import { bookInfo } from '../data/content.js'

function Book() {
  return (
    <>
      <section>
        <p className="eyebrow">Kniha a film</p>
        <h1>
          {bookInfo.title}
          <span className="h1-subtitle">({bookInfo.subtitle})</span>
        </h1>
        <p className="lead">
          {bookInfo.author} · ilustrace {bookInfo.illustrator} · {bookInfo.year}
        </p>
      </section>

      <section>
        <h2>O knize</h2>
        <p>{bookInfo.text}</p>
      </section>

      <section>
        <h2>Filmová a televizní adaptace</h2>
        <p>{bookInfo.film}</p>
      </section>

      <section>
        <h2>Zámek Zelená Hora</h2>
        <p>
          {bookInfo.location}
          <a href={bookInfo.locationLinkUrl} target="_blank" rel="noreferrer">
            {bookInfo.locationLinkText}
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default Book
