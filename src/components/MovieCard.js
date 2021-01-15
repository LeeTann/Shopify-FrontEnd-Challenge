import React from 'react'

const MovieCard = ({
  movies,
  nominations,
  setNominations,
  setLocalStorage,
}) => {
  const addNomination = (movie) => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie])
      setLocalStorage('noms', [...nominations, movie])
    } else {
      alert('You have reached a max of 5 nominated movies.')
    }
  }

  return (
    <div className='container'>
      <div>
        <h1>Movies</h1>
      </div>
      <div className='movie-container'>
        <div className='movies'>
          {movies &&
            movies.map((movie, i) => {
              return (
                <div
                  key={movie.imdbID}
                  id={movie.imdbID}
                  className='movie-card'
                >
                  <h2 className='movie-title'>{movie.Title}</h2>
                  <div className='movie-subrow'>
                    <p className='movie-year'>{movie.Year}</p>
                    <button
                      disabled={nominations.some(
                        (nom) => nom.imdbID === movie.imdbID
                      )}
                      onClick={() => addNomination(movie)}
                    >
                      Nominate
                    </button>
                  </div>

                  <img src={movie.Poster} alt='movie poster' />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
