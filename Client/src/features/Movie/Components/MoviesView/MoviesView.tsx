import * as React from "react";
import { IMovie } from "../../../../data/interfaces/IMovie";
import { MovieCard } from "../MovieCard/MovieCard";
import { IMoviesViewProps } from "./types/IMoviesViewProps";
import './movies-view.css';
import { sortMoviesByRatingAndGenre } from "../../helpers";

export const MoviesView: React.NamedExoticComponent<IMoviesViewProps> =
  React.memo((props: IMoviesViewProps) => {
    const [movies, setMovies] = React.useState<IMovie[]>([]);

    React.useEffect(() => {
      setMovies(sortMoviesByRatingAndGenre(props.movies, props.selectedGenreID));
    }, [props.movies, props.selectedGenreID]);

    const movieCards = movies.map((movie: IMovie) => {
      return (
        <MovieCard
          key={Math.random()}
          movie={movie}
        />
      );
    });
    return <div className="movies-view">{movieCards}</div>;
  });
