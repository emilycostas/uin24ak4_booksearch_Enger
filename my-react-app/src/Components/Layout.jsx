import React from "react"
import SearchResults from "./SearchResults"

export default function Layout({children}){
    return (
        <>
        <header>
            <h1>James Bond Books</h1>
        </header>
        <main>
            {children}
        </main>
        <footer>UIN Arbeidskrav 4 - Booksearch</footer>
        </>
    )
}