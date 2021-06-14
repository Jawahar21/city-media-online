import * as React from "react";
import imageNotFound from "../../../../not-found-image.jpg";
import "./genre-card.css";
import { IGenreCardProps } from "./types/IGenreCardProps";

/**
 * Genre Card component to display a Genre in the UI
 */
export const GenreCard: React.NamedExoticComponent<IGenreCardProps> =
  React.memo((props: IGenreCardProps) => {
    return (
      <div
        className={`genre-card ${
          props.isSelected ? "genre-card--isSelected" : ""
        }`}
        onClick={() => {
          props.onClick(props.genre.id);
        }}
      >
        <img
          className="genre-card-image"
          src={props.genre.imageURL ?? imageNotFound}
          alt={props.genre.name}
        />
        <div className="genre-card-title">
          <p
            className={`genre-card-title-text ${
              props.isSelected ? "genre-card-title-text--isSelected" : ""
            }`}
          >
            {props.genre.name}
          </p>
        </div>
      </div>
    );
  });
