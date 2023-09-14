import React from 'react'
import MovieListItem from './MovieListItem'
import MovieWatchedListItem from './MovieWatchedListItem'

const MovieWatchedList = ({watched}) => {
  return (
     <ul className="list">
                {watched.map((movie,index) => (
                 <MovieWatchedListItem  movie={movie} key={index}/>
                ))}
              </ul>
  )
}

export default MovieWatchedList