import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BackToTop from './BackToTop.jsx'

const links = [
  { to: '/', label: 'Domů', end: true },
  { to: '/vznik', label: 'Vznik a fungování' },
  { to: '/prislusnici', label: 'Příslušníci a osudy' },
  { to: '/kniha', label: 'Kniha a film' },
  { to: '/zdroje', label: 'Zdroje' },
]

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header id="site-header">
        <NavLink to="/" className="brand" end onClick={() => setIsMenuOpen(false)}>
          Černí baroni
        </NavLink>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={isMenuOpen ? 'is-open' : ''}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
        <BackToTop />
      </main>
      <footer id="site-footer">
        <div className="footer-grid">
          <div>
            <p className="footer-heading">Černí baroni</p>
            <p className="copyright">
              © {new Date().getFullYear()} Černí baroni — neoficiální informační projekt. Texty vycházejí z veřejně
              dostupných zdrojů (viz Zdroje) a nejedná se o původní historický výzkum.
            </p>
          </div>
          <div className="footer-links">
            <p className="footer-heading">Na webu</p>
            <nav className="footer-nav">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/ochrana-soukromi">Ochrana soukromí</NavLink>
            </nav>
          </div>
        </div>
        <p className="contact-bar">
          <a href="mailto:tomas@lifeisavictory.com">tomas@lifeisavictory.com</a>
        </p>
      </footer>
    </>
  )
}

export default Layout
