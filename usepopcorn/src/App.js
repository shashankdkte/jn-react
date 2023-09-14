import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";
import NumResults from "./components/NumResults";
import ListBox from "./components/ListBox";
import WatchBox from "./components/WatchBox";
import MoviesList from "./components/MoviesList";
import Box from "./components/Box";
import MovieSummary from "./components/MovieSummary";
import MovieWatchedList from "./components/MovieWatchedList";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const API_KEY = '328ea8b6';


export default function App() {

  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "interstellar"

  useEffect(() => {
    async function fetchMovies() {
      

    
      try
      {
      setLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?apiKey=${API_KEY}&s=${query}`);
        const data = await response.json();
        console.log(data);
        if (data.Response === "True")
        {
          setMovies(data.Search);
        }
        else
        {
          setError(data.Error);
        }
        console.log(data);
      }
      catch (err)
      {
      setError(err.message)
      }
      finally
      {
        setLoading(false);
      }
    }
    fetchMovies();
},[])


  return (
    <>
      
      <Navbar>
         <Logo />
        <SearchInput />
        <NumResults movies={movies}/>
    </Navbar>
      <Main>
        <Box>
          {loading && !error && <Loading />}
          {error && <ErrorComponent  message={error}/>}
          {!loading && !error && <MoviesList  movies={movies}/>}
        </Box>
        <Box>
          <MovieSummary watched={watched} />
          <MovieWatchedList watched={watched}/>
        </Box>
      </Main>
    </>
  );
}

  const Loading = () => {
    return <p className="loader">Loading</p>
  }

  const ErrorComponent = ({message}) => {
    return <p className="error"><span>⛔</span> {message}</p>
  }