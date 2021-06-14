import * as React from "react";
import { useEffect, useState } from "react";
import { IGenre } from "../../../../data/interfaces/IGenre";
import "./movie-info.css";
import { IMovieInfoProps } from "./types/IMovieInfoProps";

/**
 * This component opens a pop up screen in the middle of the page when a user selects a Movie.
 * The pop up contains the info about the movie.
 * Allows to update the genre of the movie from list of genres available.
 */
export const MovieInfo: React.NamedExoticComponent<IMovieInfoProps> =
  React.memo((props: IMovieInfoProps) => {
    const [isInEditMode, setMode] = useState<boolean>(false);
    const [selectedGenreID, updateGenreID] = useState<number>(
      props.movie.GenreId
    );

    // sets state with genre of the movie
    useEffect(() => {
      updateGenreID(props.movie.GenreId);
    }, [props.movie]);

    // sets state for edit mode when user clicks on edit of genre
    const onEditGenreClick = () => {
      setMode(true);
    };

    // clean ups and dispatches action to update the genre of movie on save.
    const onUpdateGenre = () => {
      setMode(false);
      props.onUpdateGenre(props.movie.id, selectedGenreID);
      props.onClose();
    };

    // sets state when user changes the genre in the dropdown.
    const onGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateGenreID(Number(event.target.value));
    };

    // sets the state back to normal mode and updates the genreID with actual genre ID.
    const onCancel = () => {
      setMode(false);
      updateGenreID(props.movie.GenreId);
    }

    // If the component is in edit mode, then returns save, cancel buttons for edit of genre.
    // If not then returns edit button.
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

    // returns a <p> element to show the genre name if the component is not in edit mode.
    // returns a dropdown to select a genre if the component is in edit mode.
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
