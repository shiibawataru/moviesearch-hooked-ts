import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Movie } from "./components/Movie";
import { Search } from "./components/Search";

export type MovieObj = {
  Title: string;
  Year: string;
  Poster: string;
};

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${process.env.REACT_APP_OMDb_API_KEY}`;

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((Response) => Response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue: string) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDb_API_KEY}`
    )
      .then((jsonResponse) => jsonResponse.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <Header text="Movie Search" />
      <p className="columns is-centered is-size-4 m-1 has-text-primary">
        Sharing a few of our favorite movies.
      </p>
      <Search search={search} />
      <div className="is-flex is-flex-wrap-wrap columns is-centered ">
        {loading && !errorMessage ? (
          <div>
            <span className="is-size-2">loading...</span>
            <progress className="progress is-large is-primary" max="100">
              15%
            </progress>
          </div>
        ) : errorMessage ? (
          <div className="is-size-2 has-text-danger">{errorMessage}</div>
        ) : (
          movies.map((movie: MovieObj, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
