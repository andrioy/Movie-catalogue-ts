import { useState, KeyboardEvent } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";

interface Movie {
  Poster: string;
  imdbID: string;
  Title: string;
  Type: string;
  Year: number;
}

// interface Movies {
//   movie: Movie[];
// }

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (title: string) => {
    await fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((json) => setMovies(json.Search));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      searchMovies(search);
    }
  };
  // console.log(movies);
  // console.log(typeof movies.Title);

  return (
    <div className="App">
      <h1>Movie Catalogue</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie: Movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
