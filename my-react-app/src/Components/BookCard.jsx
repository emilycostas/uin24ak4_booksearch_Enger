import React from "react"
import { Link } from "react-router-dom"

export default function BookCard({books}) {

    console.log(books)
  return (
    <div>
      {books.map((book, index) => (
        <article key={index} className="bookCard">
          <h3>{book.title}</h3>
          <p>Author: {book.author_name?.join(", ")}</p>
          <p>Year: {book.first_publish_year}</p>
          {book.ratings_average && <p>Average Rating: {book.ratings_average}</p>}
          {book.id_amazon && (
        //Kilde &&: https://legacy.reactjs.org/docs/conditional-rendering.html
            <a 
              href={`https://www.amazon.com/s?k=${book.id_amazon}`}
              target="_blank" 
              rel="noopener noreferrer"
              //Kilde target og rel: https://www.elegantthemes.com/blog/wordpress/rel-noopener-noreferrer-nofollow
              className="amazon-search-button">Amazon Search</a>
          )}
        </article>
      ))}
    </div>
  )
  //Rating og amazon søk til SearchResults etterhvert, men ligger her foreløpig for å se det på siden uten søkefunksjon
}