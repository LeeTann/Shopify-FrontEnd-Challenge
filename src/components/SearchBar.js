import React from 'react'
import axios from 'axios'

const SearchBar = ({ searchedMovies }) => {
  const handleChange = (e) => {
    const search = e.target.value
    getMovies(search)
  }

  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?apikey=be593d4&s=${search}&type=movie`
    const {
      data: { Search },
    } = await axios.get(url)

    searchedMovies(Search)
    console.log(Search)
  }

  return (
    <div>
      <input
        className='search-box'
        type='text'
        placeholder='search movies'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default SearchBar
