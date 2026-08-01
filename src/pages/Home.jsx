import { Link } from 'react-router-dom'
import { originIntro } from '../data/content.js'

function Home() {
  return (
    <>
      <section className="hero-text">
        <p className="eyebrow">1950–1954 · Československá lidová armáda</p>
        <h1>Černí baroni</h1>
        <p className="lead">{originIntro}</p>
        <div className="cta-row">
          <Link className="button" to="/vznik">
            Jak PTP vznikly
          </Link>
          <Link className="button button-ghost" to="/prislusnici">
            Kdo v nich sloužil
          </Link>
        </div>
      </section>

      <section className="card-grid">
        <Link className="card" to="/vznik">
          <h2>Vznik a fungování</h2>
          <p>Od silničních praporů roku 1948 přes vznik PTP v roce 1950 až po jejich zrušení v květnu 1954.</p>
        </Link>
        <Link className="card" to="/prislusnici">
          <h2>Příslušníci a osudy</h2>
          <p>Kněží, sedláci, šlechtici i synové továrníků — kategorie „politicky nespolehlivých“ a konkrétní osudy.</p>
        </Link>
        <Link className="card" to="/kniha">
          <h2>Kniha a film</h2>
          <p>Satirický román Miloslava Švandrlíka a jeho kultovní filmová i televizní adaptace.</p>
        </Link>
        <Link className="card" to="/zdroje">
          <h2>Zdroje</h2>
          <p>Přehled článků a archivů, ze kterých tento web čerpá.</p>
        </Link>
      </section>
    </>
  )
}

export default Home
