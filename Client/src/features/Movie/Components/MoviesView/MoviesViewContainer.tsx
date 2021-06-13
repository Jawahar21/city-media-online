import { connect } from "react-redux";
import { getMovies } from "../../../../data/Movie/selectors";
import { getSelectedGenreID } from "../../../Genre/selectors";
import { MoviesView } from "./MoviesView";
import { IMoviesViewDataProps } from "./types/IMoviesViewDataProps";

const mapStateToProps = (state: any): IMoviesViewDataProps => ({
  movies: getMovies(state),
  selectedGenreID: getSelectedGenreID(state)
});

export const MoviesViewContainer =
  connect<IMoviesViewDataProps>(mapStateToProps)(MoviesView);
