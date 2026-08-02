import { Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Origin from './pages/Origin.jsx'
import Members from './pages/Members.jsx'
import Book from './pages/Book.jsx'
import Sources from './pages/Sources.jsx'
import Privacy from './pages/Privacy.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vznik" element={<Origin />} />
          <Route path="prislusnici" element={<Members />} />
          <Route path="kniha" element={<Book />} />
          <Route path="zdroje" element={<Sources />} />
          <Route path="ochrana-soukromi" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
