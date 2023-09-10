import React, {useState} from 'react'
import MoviesList from './MoviesList';
import MovieSummary from './MovieSummary';
import MovieWatchedList from './MovieWatchedList';

const Main = ({tempWatchedData,movies}) => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <MoviesList  movies={movies}/>
          )}
        </div>

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
      </main>
  )
}

export default Main