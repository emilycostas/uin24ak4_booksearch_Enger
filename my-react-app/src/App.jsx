import { BrowserRouter as Router} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Layout from './Components/Layout'
import SearchResults from './Components/SearchResults'
import BookCard from './Components/BookCard'
import SearchBar from './Components/SearchBar'
import './App.css'
import './css/sass/main.scss'


//Kilde: Generelt oppsett på App og komponenter fra forelesningsoppgaver.

function App() {
  const [books, setBooks] = useState([])
  const [SearchActive, setSearchActive] = useState(false)

  const getData = async () => {

    //Henter inn API-link med James Bond-bøker
    const response = await fetch('https://openlibrary.org/search.json?q=James+Bond&mode=everything&subject_facet=James+Bond+%28Fictitious+character%29')
    const data = await response.json()
    setBooks(data.docs)

    //Setter SearchActive som false
    setSearchActive(false)
    
    //Sorterer bokliste alfabetisk utenfor søk https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/ 
    const sortedBooks = data.docs.sort((a, b) => a.title.localeCompare(b.title))
    setBooks(sortedBooks)
  }

  const searchBooks = async (searchText) => {
    //Sjekker om søkefeltet er tomt, og dersom det er det skal JB-bøkene hentes opp igjen
    if(searchText === '') {
      getData()
    } else {

      /*Link til tittelsøk fra OpenLibrary
      Litt usikker på om man skal kunne søke generelt på OpenLibrary sine bøker eller kun i JB-bøker, men har nå lagt inn link til å søke generelt.*/
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(searchText)}`)
      const data = await response.json()
      setBooks(data.docs)

      //Setter her SearchActive som true
      setSearchActive(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Router>
      <Layout searchActive={SearchActive}>
        <SearchBar onSearch={searchBooks} />
        {SearchActive ? ( <SearchResults books={books} /> ) : ( <BookCard books={books} /> )}
      </Layout>
    </Router>
  )
}

/*Hvordan sjekke om søk er aktivt eller ikke - Dersom søk er aktivt skal SearchResults rendres ut, og dersom det ikke er aktivt skal BookCard rendres ut.
Kilde:https://codedamn.com/news/reactjs/if-else-statements-in-jsx */

export default App
