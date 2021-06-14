import * as React from "react";
import { IMovie } from "../../../../data/interfaces/IMovie";
import { sortMoviesByRatingAndGenre } from "../../helpers";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieInfo } from "../MovieInfo/MovieInfo";
import "./movies-view.css";
import { IMoviesViewProps } from "./types/IMoviesViewProps";

export const MoviesView: React.NamedExoticComponent<IMoviesViewProps> =
  React.memo((props: IMoviesViewProps) => {
    const [movies, setMovies] = React.useState<IMovie[]>([]);

    React.useEffect(() => {
      setMovies(
        sortMoviesByRatingAndGenre(props.movies, props.selectedGenreID)
      );
    }, [props.movies, props.selectedGenreID]);

    const handleOnClickMovieCard = (selectedMovieID: number) => {
      props.onSetSelectedMovieID(selectedMovieID);
    };

    const handleMovieInfoClose = () => {
      props.onSetSelectedMovieID(0);
    };

    const movieCards: JSX.Element[] = movies.map((movie: IMovie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          isSelected={movie.id === props.selectedMovieID}
          onClick={handleOnClickMovieCard}
        />
      );
    });

    return (
      <>
        <div className="movies-view">{movieCards}</div>
        {props.selectedMovieID && (
          <MovieInfo
            movie={props.movies[props.selectedMovieID]}
            onClose={handleMovieInfoClose}
          />
        )}
      </>
    );
  });
