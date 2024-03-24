import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Layout from './Components/Layout'
import SearchResults from './Components/SearchResults'
import BookCard from './Components/BookCard'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  const getData = async () => {
    const response = await fetch('https://openlibrary.org/search.json?q=James+Bond&mode=everything&subject_facet=James+Bond+%28Fictitious+character%29')
    const data = await response.json()
    setBooks(data.docs)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BookCard books={books} />} />
          <Route path="/book/:bookid" element={<SearchResults books={books} />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
