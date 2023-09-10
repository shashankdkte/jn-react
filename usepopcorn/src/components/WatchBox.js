import React, { useState } from 'react'
import MovieSummary from './MovieSummary';
import MovieWatchedList from './MovieWatchedList';

const WatchBox = ({watched}) => {
   const [isOpen2, setIsOpen2] = useState(true);
   
  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
              
            <MovieSummary watched={watched}/>
             <MovieWatchedList watched={watched}/>
            </>
          )}
        </div>
  )
}

export default WatchBox