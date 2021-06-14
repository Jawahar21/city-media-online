import * as React from "react";
import imageNotFound from "../../../../not-found-image.jpg";
import "./movie-card.css";
import { IMovieCardProps } from "./types/IMovieCardProps";

export const MovieCard: React.NamedExoticComponent<IMovieCardProps> =
  React.memo((props: IMovieCardProps) => {
    return (
      <div
        className={`movie-card ${
          props.isSelected ? "movie-card--isSelected" : ""
        }`}
        onClick={() => {
          props.onClick(props.movie.id);
        }}
      >
        <img
          className="movie-card-image"
          src={props.movie.imageURL ?? imageNotFound}
          alt={props.movie.name}
        />
        <div className="movie-card-title">
          <p
            className={`movie-card-title-text ${
              props.isSelected ? "movie-card-title-text--isSelected" : ""
            }`}
          >
            {props.movie.name + " -  " + props.movie.rating ?? "N/A"}
          </p>
        </div>
      </div>
    );
  });
