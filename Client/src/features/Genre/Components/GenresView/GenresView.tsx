import * as React from "react";
import { useState } from "react";
import { IGenre } from "../../../../data/interfaces/IGenre";
import { GenreCard } from "../GenreCard/GenreCard";
import "./genres-view.css";
import { IGenresViewProps } from "./types/IGenresViewProps";

/**
 * Component to show diplay the genres of movies available
 * On click of genre highlights it in the UI and also dipatches action fetch the movies of that particular genre.
 */
export const GenresView: React.NamedExoticComponent<IGenresViewProps> =
  React.memo((props: IGenresViewProps) => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    // set the internal state genres when update in store.
    React.useEffect(() => {
      setGenres(Object.values(props.genres));
    }, [props.genres]);

    /**
     * handles the click event on genre
     * dispatces an action which stores the selected genre ID and fetches the genres of
     * @param selectedGenreID id of the genre selected by user
     */
    const handleOnClickGenreCard = (selectedGenreID: number) => {
      props.onSetSelectedGenreID(selectedGenreID);
    };

    const genreCards = genres.map((genre: IGenre) => {
      return (
        <GenreCard
          key={genre.id}
          genre={genre}
          isSelected={genre.id === props.selectedGenreID}
          onClick={handleOnClickGenreCard}
        />
      );
    });

    return <div className="genres-view">{genreCards}</div>;
  });
