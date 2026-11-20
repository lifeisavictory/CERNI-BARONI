// Souhlas s analytickými cookies a načítání Google Tag Manageru.
//
// GTM (a s ním Google Analytics) se načte až PO kliknutí na „Přijmout“
// (Consent Mode „basic“) – do té doby web do Googlu nic neposílá.
// Rozhodnutí návštěvníka se pamatuje v localStorage na 12 měsíců.
// V `npm run dev` se GTM nenačítá (lišta se ale zobrazuje kvůli testování).
// Převzato z webu zamekzelenahora.cz (lib/souhlas.js), upraveno pro tento web.

// Google Tag Manager – ID kontejneru (GTM-XXXXXXX). Dokud je prázdné,
// lišta se zobrazuje, ale GTM se nenačte ani po souhlasu.
// GA4 (měřicí ID G-…) se nastavuje uvnitř GTM, ne v kódu webu.
export const GTM_ID = 'GTM-TLCKWGDF'

const KLIC = 'cb-souhlas'
const PLATNOST_MS = 365 * 24 * 60 * 60 * 1000
export const UDALOST_OTEVRIT = 'cb-souhlas-otevrit'

let gtmNacten = false
let kliknutiSledovana = false

export function nactiSouhlas() {
  try {
    const data = JSON.parse(localStorage.getItem(KLIC))
    if (!data || typeof data.analytika !== 'boolean') return null
    if (Date.now() - data.cas > PLATNOST_MS) return null
    return data.analytika
  } catch {
    return null
  }
}

function gtag() {
  window.dataLayer = window.dataLayer || []
  // GTM vyžaduje objekt `arguments`, ne pole.
  window.dataLayer.push(arguments)
}

export function nactiGtm() {
  if (gtmNacten || !GTM_ID || !import.meta.env.PROD) return
  gtmNacten = true
  window.dataLayer = window.dataLayer || []
  // Výchozí stav je vždy „vše zakázáno“; analytika se povolí až aktualizací
  // (sem se kód dostane jen po souhlasu). Reklamní úložiště zůstává zakázané.
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('consent', 'update', { analytics_storage: 'granted' })
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`
  document.head.appendChild(s)
}

function smazGaCookies() {
  const domena = window.location.hostname.replace(/^www\./, '')
  document.cookie.split(';').forEach((c) => {
    const nazev = c.split('=')[0].trim()
    if (!/^_ga/.test(nazev)) return
    ;['', `; domain=${domena}`, `; domain=.${domena}`].forEach((d) => {
      document.cookie = `${nazev}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`
    })
  })
}

export function ulozSouhlas(analytika) {
  try {
    localStorage.setItem(KLIC, JSON.stringify({ analytika, cas: Date.now() }))
  } catch {
    // Bez úložiště se lišta prostě zobrazí znovu při příští návštěvě.
  }
  if (analytika) {
    nactiGtm()
  } else if (gtmNacten) {
    // Odvolání souhlasu: zakázat měření, smazat cookies GA a načíst stránku
    // znovu, aby už GTM v paměti neběžel.
    gtag('consent', 'update', { analytics_storage: 'denied' })
    smazGaCookies()
    window.location.reload()
  } else {
    smazGaCookies()
  }
}

export function otevriNastaveni() {
  window.dispatchEvent(new Event(UDALOST_OTEVRIT))
}

// Vlastní události pro GTM (spouštěč „Vlastní událost“). Bez souhlasu
// GTM neběží, takže se nikam neodešlou.
export function zaznamenej(udalost, parametry = {}) {
  if (!gtmNacten) return
  window.dataLayer.push({ event: udalost, ...parametry })
}

// Kliknutí na odkazy se sleduje jedním posluchačem pro celý web:
// - mailto: → `kontakt_email` (cb_predmet = předmět e-mailu),
// - odkaz na jinou doménu → `odchozi_odkaz` (cb_cil = adresa; typicky zdroje).
// Posluchač se zaregistruje jen jednou (StrictMode spouští efekty dvakrát).
export function sledujKliknuti() {
  if (kliknutiSledovana) return
  kliknutiSledovana = true
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]')
    if (!a) return
    const href = a.getAttribute('href')
    if (href.startsWith('mailto:')) {
      let predmet = ''
      try {
        predmet = new URL(href).searchParams.get('subject') || ''
      } catch {
        // neplatný mailto – předmět necháme prázdný
      }
      zaznamenej('kontakt_email', { cb_predmet: predmet })
    } else if (/^https?:\/\//.test(href) && a.hostname !== window.location.hostname) {
      zaznamenej('odchozi_odkaz', { cb_cil: a.href })
    }
  })
}
