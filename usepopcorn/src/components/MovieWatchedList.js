import React from 'react'
import MovieListItem from './MovieListItem'
import MovieWatchedListItem from './MovieWatchedListItem'

const MovieWatchedList = ({watched}) => {
  return (
     <ul className="list">
                {watched.map((movie) => (
                 <MovieWatchedListItem  movie={movie}/>
                ))}
              </ul>
  )
}

export default MovieWatchedList