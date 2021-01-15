import React from 'react'

const Nomination = ({ nominations, setNominations, setLocalStorage }) => {
  const deleteNomination = (id) => {
    setNominations(nominations.filter((nom) => nom.imdbID !== id))
    setLocalStorage('noms', [...nominations])
  }
  console.log(nominations)
  return (
    <div className>
      <h1>Nominations</h1>
      <div className='nominations-container'>
        {nominations &&
          nominations.map((nom) => {
            return (
              <div key={nom.imdbID} id={nom.imdbID} className='nomination-card'>
                <h2 className='movie-title'>{nom.Title}</h2>
                <div className='movie-subrow'>
                  <h3 className='movie-year'>{nom.Year}</h3>
                  <button onClick={() => deleteNomination(nom.imdbID)}>
                    Delete
                  </button>
                </div>

                <img src={nom.Poster} alt='nom pic' />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Nomination
