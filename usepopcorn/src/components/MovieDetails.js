import React, { useEffect, useState } from 'react'
import StarRating from './StarRating';
import { Loading } from '../App';
const API_KEY = '328ea8b6';
const MovieDetails = ({ selectedMovieId ,onCloseMovie, onAddMovie, watched }) => {
   const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState();
   const isWatched = watched.map((movie) => movie.imdbID).includes(selectedMovieId);
   const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;
    const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedMovieId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedMovieId]
  );

  useEffect(() => {
    document.title = `Movie | ${movie.Title}`

    return () => {
      document.title = "usePopcorn"
    }
  },[movie.Title])
  const addMovieHandler = () => {

   const newWatchedMovie = {
      imdbID: selectedMovieId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddMovie(newWatchedMovie);
    onCloseMovie();

  }

return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            {!isWatched ? (
            <>
             <StarRating
                    maxRating={10}
                    size={24}
              onSetRating={setUserRating}
              
                />
                { userRating > 0 && (
                    <button className="btn-add" onClick={addMovieHandler}>
                      + Add to list </button>)
                }
              </> 
            ) : (<p>
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              </p>)}
              
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails