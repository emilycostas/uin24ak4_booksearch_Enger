import React from "react"
import SearchResults from "./SearchResults"

export default function Layout({children}){
    return (
        <>
        <header>
            <h1>James Bond Books</h1>
                <img src="./src/vecteezy_gun_1198859.png" alt="pistol" className="pistol" /*Kilde bilde: https://www.vecteezy.com/png/1198859-gun */ />
        </header>
        <main>
            {children}
        </main>
        <footer>UIN Arbeidskrav 4 - Booksearch</footer>
        </>
    )
}