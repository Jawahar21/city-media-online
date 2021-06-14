import * as React from "react";
import "./movie-card.css";
import { IMovieCardProps } from "./types/IMovieCardProps";
import imageNotFound from "../../../../not-found-image.jpg";

export const MovieCard: React.NamedExoticComponent<IMovieCardProps> =
  React.memo((props: IMovieCardProps) => {
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={props.movie.imageURL ?? imageNotFound}
          alt={props.movie.name}
        />
        <div className="movie-card-title">
          <p className="movie-card-title-text">
            {props.movie.name + " -  " + props.movie.rating ?? "N/A"}
          </p>
        </div>
      </div>
    );
  });
