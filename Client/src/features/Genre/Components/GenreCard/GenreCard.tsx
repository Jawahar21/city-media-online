import * as React from "react";
import { IGenreCardProps } from "./types/IGenreCardProps";
import './genre-card.css';

export const GenreCard: React.NamedExoticComponent<IGenreCardProps> =
  React.memo((props: IGenreCardProps) => {
    return (
      <div
        className="genre-card"
        onClick={() => {
          props.onClick(props.genre.id);
        }}
      >
        <img src={props.genre.imageURL} alt={props.genre.name} />
      </div>
    );
  });
