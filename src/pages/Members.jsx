import { notablePeople, nobilityNote } from '../data/content.js'

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
        <h2>Doložené osobnosti</h2>
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
        <h2>Šlechta v PTP</h2>
        <p>{nobilityNote}</p>
      </section>
    </>
  )
}

export default Members
