import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        //Kilde handleChange og inputfelt i return: https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/

        setInputValue(value)

        /*Setter den til å søke når det er 3 eller flere tegn, og dersom søkefeltet er tomt skal den hente opp listen med alle JB-bøker igjen.
        Dette fungerer ok hvis man gir det tid til å laste inn dersom det er 0 i verdi.*/
        if(value.length >= 3 || value.length === 0) {
            onSearch(value)
        }
    }

    return (
        <input className="SearchBar" type="text" placeholder="Search Books.." value={inputValue} onChange={handleChange} />
    )
}

export default SearchBar