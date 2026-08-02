function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" className="back-to-top" onClick={handleClick}>
      Nahoru ↑
    </button>
  )
}

export default BackToTop
