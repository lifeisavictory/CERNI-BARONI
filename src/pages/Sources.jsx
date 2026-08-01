import { sources } from '../data/content.js'

function Sources() {
  return (
    <section>
      <p className="eyebrow">Zdroje</p>
      <h1>Odkud web čerpá</h1>
      <p className="lead">
        Fakta uvedená na tomto webu jsou sestavena z veřejně dostupných novinářských a historických zdrojů. U
        jednotlivých osudů a čísel se odhady jednotlivých zdrojů mohou mírně lišit.
      </p>
      <ul className="source-list">
        {sources.map((source) => (
          <li key={source.url} id={source.id}>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.title}
            </a>
            <span className="source-publisher"> — {source.publisher}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Sources
