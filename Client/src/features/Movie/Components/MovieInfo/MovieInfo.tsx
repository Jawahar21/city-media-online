import * as React from "react";
import { useEffect, useState } from "react";
import { IGenre } from "../../../../data/interfaces/IGenre";
import "./movie-info.css";
import { IMovieInfoProps } from "./types/IMovieInfoProps";

export const MovieInfo: React.NamedExoticComponent<IMovieInfoProps> =
  React.memo((props: IMovieInfoProps) => {
    const [isInEditMode, setMode] = useState<boolean>(false);
    const [selectedGenreID, updateGenreID] = useState<number>(
      props.movie.GenreId
    );

    useEffect(() => {
      updateGenreID(props.movie.GenreId);
    }, [props.movie]);

    const onEditGenreClick = () => {
      setMode(true);
    };

    const onUpdateGenre = () => {
      setMode(false);
      props.onUpdateGenre(props.movie.id, selectedGenreID);
      props.onClose();
    };

    const onGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateGenreID(Number(event.target.value));
    };

    const onCancel = () => {
      setMode(false);
      updateGenreID(props.movie.GenreId);
    }

    const EditSaveButton = () => {
      if (isInEditMode) {
        return (
          <>
            <button
              className="movie-info-edit-button"
              onClick={() => onUpdateGenre()}
            >
              Save
            </button>
            <button
              className="movie-info-edit-button"
              onClick={() => onCancel()}
            >
              cancel
            </button>
          </>
        );
      }
      return (
        <button
          className="movie-info-edit-button"
          onClick={() => onEditGenreClick()}
        >
          Edit
        </button>
      );
    };

    const EditOrViewGenre = () => {
      if (isInEditMode) {
        const options: JSX.Element[] = Object.values(props.genres).map(
          (genre: IGenre) => <option value={genre.id}>{genre.name}</option>
        );
        return (
          <select
            value={selectedGenreID}
            onChange={(event) => onGenreChange(event)}
          >
            {options}
          </select>
        );
      }
      return (
        <p className="movie-info-genre-text">Genre: {props.movie.genreName}</p>
      );
    };

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
          <div>
            {EditOrViewGenre()}
            {EditSaveButton()}
          </div>
        </div>
      </div>
    );
  });
