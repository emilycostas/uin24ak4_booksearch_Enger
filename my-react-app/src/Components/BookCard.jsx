import React from "react"

export default function BookCard({books}) {
console.log(books)

return (
    //Komponent for bookcard med James Bond-bøker
    <div className="Book">
      {books.map((book, index) => (
        <article key={index} className="searchResults">
          <h3>{book.title}</h3>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title}></img>
            <p>Author: {book.author_name?.join(", ")}</p>
            <p>Year: {book.first_publish_year}</p>
            {book.ratings_average && <p>Average Rating: {book.ratings_average}</p>}
            {book.id_amazon && (
            /*Rating og amazon-link/knapp vises kun når dette er tilgjengelig fra api'et for
            den spesifikke boka og det er derfor ikke alle bøker som har rating og knapp.
            Begge deler er lett synlig når man f.eks søker "Harry".
            Kilde &&: https://legacy.reactjs.org/docs/conditional-rendering.html */

            <a href={`https://www.amazon.com/s?k=${book.id_amazon}`}target="_blank" rel="noopener noreferrer" className="amazon-button">Amazon Search</a>
            //Kilde target og rel: https://www.elegantthemes.com/blog/wordpress/rel-noopener-noreferrer-nofollow
            )}
        </article>
      ))}
    </div>
  )
}