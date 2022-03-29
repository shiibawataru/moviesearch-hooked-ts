import React from "react";
import { MovieObj } from "../App";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export const Movie: React.FC<{ movie: MovieObj }> = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="card m-3 column is-2">
      <div className=" column is-centered">
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
          className="card-image"
        />
      </div>
      <h2 className="title is-4 ">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};
