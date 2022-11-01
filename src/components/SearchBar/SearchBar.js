import React, { useState } from 'react'
import styles from "./SearchBar.module.css"

const SearchBar = ({setSearchTerm}) => {
  const [input, setInput] = useState("")

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log(input)
    setSearchTerm(input)
  }
  return (
    <form className={styles.SearchBar} onSubmit={searchSubmitHandler}>
      <input type="search" placeholder='search...' value={input}
      onChange={(e)=> setInput(e.target.value)}/>
      <button>SearchBar</button>
    </form>
  )
};

export default SearchBar
