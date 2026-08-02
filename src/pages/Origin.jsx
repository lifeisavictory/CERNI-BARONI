import { useEffect, useRef, useState } from 'react'
import { timeline, nicknameOrigin, conditionsText, categories, otherGroupsNote } from '../data/content.js'

function Origin() {
  const itemRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index))
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section>
        <p className="eyebrow">Vznik a fungování</p>
        <h1>Jak vznikly PTP</h1>
      </section>

      <section>
        <h2>Časová osa</h2>
        <ol className="timeline-zigzag">
          {timeline.map((item, index) => (
            <li
              key={item.year}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={[index % 2 === 0 ? 'tz-left' : 'tz-right', index === activeIndex ? 'is-active' : '']
                .filter(Boolean)
                .join(' ')}
            >
              <div className="tz-card">
                <time className="tz-year">{item.year}</time>
                <p className="tz-text">{item.text}</p>
              </div>
              <div className="tz-node" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Odkud se vzala přezdívka „černí baroni“</h2>
        <p>{nicknameOrigin}</p>
      </section>

      <section>
        <h2>Kdo byl zařazován</h2>
        <p>
          Do kategorie „E“ (politicky nespolehliví) spadali muži z nejrůznějších skupin, které si režim vytipoval jako
          třídně nebo politicky nebezpečné:
        </p>
        <ul className="chip-list">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <p>{otherGroupsNote}</p>
      </section>

      <section>
        <h2>Pracovní a životní podmínky</h2>
        <p>{conditionsText}</p>
      </section>
    </>
  )
}

export default Origin
