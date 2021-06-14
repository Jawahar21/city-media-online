import * as React from "react";
import { useState } from "react";
import { IGenre } from "../../../../data/interfaces/IGenre";
import { GenreCard } from "../GenreCard/GenreCard";
import "./genres-view.css";
import { IGenresViewProps } from "./types/IGenresViewProps";

export const GenresView: React.NamedExoticComponent<IGenresViewProps> =
  React.memo((props: IGenresViewProps) => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    React.useEffect(() => {
      setGenres(Object.values(props.genres));
    }, [props.genres]);

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
