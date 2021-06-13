import * as React from "react";
import "./movie-card.css";
import { IMovieCardProps } from "./types/IMovieCardProps";

export const MovieCard: React.NamedExoticComponent<IMovieCardProps> =
  React.memo((props: IMovieCardProps) => {
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={props.movie.imageURL} alt={props.movie.name} />
      </div>
    );
  });
