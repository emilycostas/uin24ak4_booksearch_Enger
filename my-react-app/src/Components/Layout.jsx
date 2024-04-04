import React from "react"

export default function Layout({children, searchActive}){
    return (
        <>
        <header>
            <h1>{searchActive ? ("OpenLibrary Books") : ("James Bond Books")}</h1>
                <img src="./src/vecteezy_gun_1198859.png" alt="pistol" className="pistol" /*Kilde bilde: https://www.vecteezy.com/png/1198859-gun */ />
        </header>
        <main>
            {children}
        </main>
        <footer>UIN Arbeidskrav 4 - Booksearch</footer>
        </>
    )
}

/*På <h1> sjekker jeg om søket er aktivt slik at tittelen endrer seg basert på om det er JB-bøker eller andre bøker når det er aktivt søk.
Kilde: https://codedamn.com/news/reactjs/if-else-statements-in-jsx */