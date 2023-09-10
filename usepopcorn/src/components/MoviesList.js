import React from 'react'
import MovieListItem from './MovieListItem'

const MoviesList = ({movies}) => {
  return (
               <ul className="list">
              {movies?.map((movie) => (
                <MovieListItem  movie={movie}/>
              ))}
            </ul>
  )
}

export default MoviesList