import React from "react"
import { useParams } from "react-router-dom"

export default function SearchResults({books}) {
  const { bookid } = useParams();
  const book = books.find(book => book.key === `/works/${bookid}`)

  if (!book) {
    return <p>Book not found</p>
  }


  console.log(book)

  return (
    <section>
      <h1>{book.title}</h1>
      <p>Author: {book.author_name?.join(", ")}</p>
      <p>Year: {book.first_publish_year}</p>
      <p>Average Rating: {book.ratings_average}</p>
    </section>
  )
}