import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'
import { pageMeta } from '../data/content.js'

function NotFound() {
  return (
    <section>
      <PageMeta {...pageMeta.notFound} noindex />
      <p className="eyebrow">Chyba 404</p>
      <h1>Stránka nenalezena</h1>
      <p className="lead">
        Hledaná stránka na tomto webu neexistuje. Pokračujte na <Link to="/">úvodní stránku</Link>.
      </p>
    </section>
  )
}

export default NotFound
