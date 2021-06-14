import * as React from "react";
import { IMovie } from "../../../../data/interfaces/IMovie";
import { sortMoviesByRatingAndGenre } from "../../helpers";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieInfoContainer } from "../MovieInfo/MovieInfoContainer";
import "./movies-view.css";
import { IMoviesViewProps } from "./types/IMoviesViewProps";

/**
 * Component to show diplay the movies of selected genre
 * On click of movie highlights it in the UI and also dipatches action to show movie info pop up screen in the middle of the page.
 */
export const MoviesView: React.NamedExoticComponent<IMoviesViewProps> =
  React.memo((props: IMoviesViewProps) => {
    const [movies, setMovies] = React.useState<IMovie[]>([]);

    // filters the movies by genre and sorts then by rating
    React.useEffect(() => {
      setMovies(
        sortMoviesByRatingAndGenre(props.movies, props.selectedGenreID)
      );
    }, [props.movies, props.selectedGenreID]);

    /**
     * dispatches action to set the selected movie ID in store.
     * @param selectedMovieID - selected movie ID 
     */
    const handleOnClickMovieCard = (selectedMovieID: number) => {
      props.onSetSelectedMovieID(selectedMovieID);
    };

    // resets the selection on close of movie
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
        {props.selectedMovieID !== 0 && (
          <MovieInfoContainer
            movie={props.movies[props.selectedMovieID]}
            onClose={handleMovieInfoClose}
          />
        )}
      </>
    );
  });
