import React from "react"

export default function SearchResults({books}) {

  return (
    //Komponent for søkeresultater
    <div className="Book">
      {books.map((book, index) => (
        <article key={index} className="searchResults">
          <h3>{book.title}</h3>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title}></img>
            <p>Author: {book.author_name?.join(", ")}</p>
            <p>Year: {book.first_publish_year}</p>
            {book.ratings_average && <p>Average Rating: {book.ratings_average}</p>}
            {book.id_amazon && (
            //Kilde &&: https://legacy.reactjs.org/docs/conditional-rendering.html Vises kun dersom den har en verdi på både rating og amazon-link/knapp og derfor har kun et utvalg av bøkene dette

            <a href={`https://www.amazon.com/s?k=${book.id_amazon}`}target="_blank" rel="noopener noreferrer" className="amazon-button">Amazon Search</a>
            //Kilde target og rel: https://www.elegantthemes.com/blog/wordpress/rel-noopener-noreferrer-nofollow
            )}
        </article>
      ))}
    </div>
  )
}