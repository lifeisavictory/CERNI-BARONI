import PageMeta from '../components/PageMeta.jsx'
import { pageMeta } from '../data/content.js'
import { otevriNastaveni } from '../lib/souhlas.js'

function Privacy() {
  return (
    <>
      <PageMeta {...pageMeta.privacy} />
      <section>
        <p className="eyebrow">Právní informace</p>
        <h1>Ochrana soukromí</h1>
        <p className="lead">
          Tyto zásady ochrany soukromí vysvětlují, jakým způsobem web cernibaroni.cz nakládá s informacemi
          návštěvníků.
        </p>
      </section>

      <section>
        <h2>1. Cookies a Google Analytics (jen se souhlasem)</h2>
        <p>
          Pokud v liště kliknete na „Přijmout“, web načte nástroj <strong>Google Tag Manager</strong> a měří
          návštěvnost službou <strong>Google Analytics</strong> (poskytovatel Google Ireland Limited). Ta ukládá do
          prohlížeče analytické cookies (<code>_ga</code>, <code>_ga_*</code>, platnost až 2 roky) a zaznamenává
          pseudonymní údaje o návštěvě: navštívené stránky, délku návštěvy, posouvání stránky, kliknutí na odkazy
          na jiné weby, stažení souborů, typ zařízení a prohlížeče, přibližnou polohu (zemi, region) a zdroj
          návštěvy. Reklamní funkce jsou vypnuté. Vypnutý je také sběr údajů poskytnutých uživateli
          (funkce, která by Googlu předávala např. e-mail či telefon z formulářů) — Google Analytics od vás tedy
          nezískává žádné kontaktní údaje.
        </p>
        <p>
          Právním základem je váš souhlas (čl. 6 odst. 1 písm. a) GDPR). Údaje mohou být předány do USA; Google je
          účastníkem rámce EU–US Data Privacy Framework.
        </p>
        <p>
          Bez souhlasu se Google Analytics vůbec nenačte a do prohlížeče se neukládají žádné cookies. Souhlas můžete
          kdykoli změnit nebo odvolat tlačítkem{' '}
          <button type="button" className="inline-button" onClick={otevriNastaveni}>
            Nastavení cookies
          </button>{' '}
          (najdete ho i v patičce webu). Vaše rozhodnutí si web pamatuje v úložišti prohlížeče 12 měsíců.
        </p>
      </section>

      <section>
        <h2>2. Osobní údaje</h2>
        <p>
          Web nemá registrační formuláře ani databázi uživatelů. Kontaktní odkaz otevře pouze e-mailového klienta ve
          vašem zařízení — zpráva se přes tento web nikam neodesílá. Máte právo na přístup ke svým údajům, jejich
          výmaz, odvolání souhlasu a podání stížnosti u Úřadu pro ochranu osobních údajů (uoou.gov.cz).
        </p>
      </section>

      <section>
        <h2>3. Externí služby</h2>
        <p>
          Písma (Fraunces, Inter, IBM Plex Mono) jsou součástí webu a načítají se přímo z jeho serveru — web tedy
          nepoužívá žádné CDN třetí strany pro typografii a při načítání písem se ke Google ani jinému poskytovateli
          neodesílají žádná data. Stránka <a href="/zdroje">Zdroje</a> obsahuje odkazy na externí novinářské a
          archivní weby třetích stran — při jejich návštěvě se řídí ochrana soukromí pravidly daného webu.
        </p>
      </section>

      <section>
        <h2>4. Tvorba obsahu</h2>
        <p>
          Texty na tomto webu byly připraveny s pomocí AI na základě zdrojů uvedených na stránce{' '}
          <a href="/zdroje">Zdroje</a> a před zveřejněním prošly věcnou kontrolou autora.
        </p>
      </section>

      <section>
        <p className="source-publisher">Poslední aktualizace: 20. listopadu 2026.</p>
      </section>
    </>
  )
}

export default Privacy
