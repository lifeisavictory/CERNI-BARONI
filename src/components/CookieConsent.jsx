import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nactiSouhlas, ulozSouhlas, nactiGtm, sledujKliknuti, UDALOST_OTEVRIT } from '../lib/souhlas.js'

// Lišta se souhlasem s analytickými cookies (Google Analytics přes GTM).
// „Přijmout“ a „Odmítnout“ jsou záměrně stejně výrazné – to vyžaduje ÚOOÚ.
function CookieConsent() {
  // Lišta se ukáže, dokud návštěvník nerozhodl (nebo rozhodnutí vypršelo).
  const [otevrena, setOtevrena] = useState(() => nactiSouhlas() === null)

  useEffect(() => {
    sledujKliknuti()
    if (nactiSouhlas() === true) nactiGtm()

    const otevri = () => setOtevrena(true)
    window.addEventListener(UDALOST_OTEVRIT, otevri)
    return () => window.removeEventListener(UDALOST_OTEVRIT, otevri)
  }, [])

  if (!otevrena) return null

  const rozhodni = (analytika) => {
    setOtevrena(false)
    ulozSouhlas(analytika)
  }

  return (
    <div className="consent-bar" role="region" aria-label="Souhlas s cookies">
      <div className="consent-inner">
        <div className="consent-text">
          <p>
            Pro budoucí zlepšení bychom rádi použili webovou analýzu návštěvnosti. K tomu ale potřebujeme Váš
            souhlas. Dáte nám ho?{' '}
            <Link to="/ochrana-soukromi" onClick={() => setOtevrena(false)}>
              Podmínky
            </Link>
          </p>
          <p className="consent-note">Souhlas můžete kdykoli odvolat v patičce webu v „Nastavení cookies“.</p>
        </div>
        <div className="consent-buttons">
          <button type="button" className="button" onClick={() => rozhodni(false)}>
            Odmítnout
          </button>
          <button type="button" className="button" onClick={() => rozhodni(true)}>
            Přijmout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
