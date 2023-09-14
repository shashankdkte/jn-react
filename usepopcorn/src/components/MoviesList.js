import React from 'react'
import MovieListItem from './MovieListItem'

const MoviesList = ({movies ,setSelectedMovieId}) => {
  return (
               <ul className="list">
              {movies?.map((movie) => (
                <MovieListItem  movie={movie} setSelectedMovieId={setSelectedMovieId}/>
              ))}
            </ul>
  )
}

export default MoviesList