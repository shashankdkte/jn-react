import React from 'react'
import MovieListItem from './MovieListItem'

const MoviesList = ({movies ,setSelectedMovieId}) => {
  return (
               <ul className="list">
              {movies?.map((movie,index) => (
                <MovieListItem  movie={movie} setSelectedMovieId={setSelectedMovieId}  key={index}/>
              ))}
            </ul>
  )
}

export default MoviesList