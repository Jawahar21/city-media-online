import * as React from "react";
import "./movie-info.css";
import { IMovieInfoProps } from "./types/IMovieInfoProps";

export const MovieInfo: React.NamedExoticComponent<IMovieInfoProps> =
  React.memo((props: IMovieInfoProps) => {
    return (
      <div className="movie-info-box">
        <div className="movie-info-content">
          <div className="movie-info-content-header">
            <p>Movie Information</p>
            <button
              className="close-button"
              aria-label="Close alert"
              type="button"
              data-close
              onClick={() => props.onClose()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>Title: {props.movie.name}</p>
          <p>Rating: {props.movie.rating ?? "N/A"}</p>
          <p>Release Year: {props.movie.releaseYear ?? "N/A"}</p>
          <p>Genre: {props.movie.genreName}</p>
        </div>
      </div>
    );
  });
