import { notablePeople, nobilityNote, memoryOfNationNote, memoryOfNationUrl } from '../data/content.js'

function Members() {
  return (
    <>
      <section>
        <p className="eyebrow">Příslušníci a osudy</p>
        <h1>Kdo prošel PTP</h1>
        <p className="lead">
          Naprostou většinu z 40 až 60 tisíc mužů, kteří PTP prošli, dnes jmenovitě neznáme — jejich příběhy zůstaly
          v rodinné paměti nebo archivech. Níže uvádíme případy, u kterých je dnes k dispozici dostatek ověřených
          informací.
        </p>
      </section>

      <section>
        <h2>Známé osobnosti</h2>
        <div className="person-list">
          {notablePeople.map((person) => (
            <article key={person.name} className="person">
              <h3>
                {person.name} <span className="person-years">({person.years})</span>
              </h3>
              <p className="person-role">{person.role}</p>
              <p>{person.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Šlechtické rody</h2>
        <p>{nobilityNote}</p>
      </section>

      <section>
        <h2>Další příběhy</h2>
        <p>
          {memoryOfNationNote}{' '}
          <a href={memoryOfNationUrl} target="_blank" rel="noreferrer">
            Přejít na sekci PTP v archivu Paměť národa
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default Members
