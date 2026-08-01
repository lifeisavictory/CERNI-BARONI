function Privacy() {
  return (
    <>
      <section>
        <p className="eyebrow">Právní informace</p>
        <h1>Ochrana soukromí</h1>
        <p className="lead">
          Tyto zásady ochrany soukromí vysvětlují, jakým způsobem web cernibaroni.cz nakládá s informacemi
          návštěvníků.
        </p>
      </section>

      <section>
        <h2>1. Žádné soubory cookies</h2>
        <p>
          Tento web je vytvořen jako statická informační prezentace a <strong>nepoužívá žádné soubory cookies</strong>{' '}
          ani jiné technologie sledování (tracking). Při prohlížení těchto stránek se do vašeho prohlížeče neukládají
          žádné identifikační soubory.
        </p>
      </section>

      <section>
        <h2>2. Osobní údaje</h2>
        <p>
          Web neshromažďuje, neukládá ani nezpracovává žádné osobní údaje návštěvníků. Nejsou zde žádné registrační
          formuláře ani databáze uživatelů.
        </p>
      </section>

      <section>
        <h2>3. Externí služby</h2>
        <p>Web využívá jednu externí službu pro zajištění typografie (tzv. CDN):</p>
        <ul className="chip-list">
          <li>Google Fonts (písma Fraunces, Inter, IBM Plex Mono)</li>
        </ul>
        <p>
          Tato služba může při načítání písem zaznamenat vaši IP adresu a technické údaje o prohlížeči. Toto
          zpracování probíhá u poskytovatele (Google) v souladu s jeho vlastními pravidly ochrany soukromí. Stránka{' '}
          <a href="/zdroje">Zdroje</a> dále obsahuje odkazy na externí novinářské a archivní weby třetích stran — při
          jejich návštěvě se řídí ochrana soukromí pravidly daného webu.
        </p>
      </section>

      <section>
        <h2>4. Analytika</h2>
        <p>
          Pro základní přehled o návštěvnosti využívám službu <strong>Umami</strong>. Jedná se o analytický nástroj
          zaměřený na soukromí, který nesbírá osobní údaje a nepoužívá cookies.
        </p>
      </section>

      <section>
        <p className="source-publisher">Poslední aktualizace: 1. srpna 2026.</p>
      </section>
    </>
  )
}

export default Privacy
