import React, { useState, useEffect } from 'react'

import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Nomination from './components/Nomination'

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('noms')
    if (data) {
      setNominations(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    setLocalStorage('noms', nominations)
  }, [nominations])

  const setLocalStorage = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
  }

  const searchedMovies = (movies) => {
    setMovies(movies)
  }

  return (
    <div className='App'>
      <header className='header'>
        <h1>The Shoppies</h1>
        <SearchBar searchedMovies={searchedMovies} />
      </header>
      <div className='main-body'>
        <MovieCard
          className='movies-result'
          movies={movies}
          nominations={nominations}
          setNominations={setNominations}
        />
        <Nomination
          classname='noms'
          nominations={nominations}
          setNominations={setNominations}
        />
      </div>
    </div>
  )
}

export default App
