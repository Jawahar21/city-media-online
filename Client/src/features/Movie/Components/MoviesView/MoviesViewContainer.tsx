import { connect } from "react-redux";
import { getMovies } from "../../../../data/Movie/selectors";
import { getSelectedGenreID } from "../../../Genre/selectors";
import { setSelectedMovie } from "../../actions";
import { getSelectedMovieID } from "../../selectors";
import { MoviesView } from "./MoviesView";
import { IMoviesViewDataProps } from "./types/IMoviesViewDataProps";
import { IMoviesViewDispatchProps } from "./types/IMoviesViewDispatchProps";

const mapStateToProps = (state: any): IMoviesViewDataProps => ({
  movies: getMovies(state),
  selectedGenreID: getSelectedGenreID(state),
  selectedMovieID: getSelectedMovieID(state),
});

const mapDispatchToProps: IMoviesViewDispatchProps = {
  onSetSelectedMovieID: setSelectedMovie,
};

export const MoviesViewContainer = connect<
  IMoviesViewDataProps,
  IMoviesViewDispatchProps
>(
  mapStateToProps,
  mapDispatchToProps
)(MoviesView);
