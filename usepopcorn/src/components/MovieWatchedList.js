import React from 'react'
import MovieListItem from './MovieListItem'
import MovieWatchedListItem from './MovieWatchedListItem'

const MovieWatchedList = ({watched , onDeleteMovie}) => {
  return (
     <ul className="list">
                {watched.map((movie,index) => (
                 <MovieWatchedListItem  movie={movie} key={index} onDeleteMovie={onDeleteMovie}/>
                ))}
              </ul>
  )
}

export default MovieWatchedList