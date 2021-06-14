import { connect } from "react-redux";
import { getGenres } from "../../../../data/Genre/selectors";
import { updateGenreStarted } from "../../../../data/Movie/actions";
import { MovieInfo } from "./MovieInfo";
import { IMovieInfoDataProps } from "./types/IMovieInfoDataProps";
import { IMovieInfoDispatchProps } from "./types/IMovieInfoDispatchProps";
import { IMovieInfoOwnProps } from "./types/IMovieInfoOwnProps";

const mapStateToProps = (state: object): IMovieInfoDataProps => ({
  genres: getGenres(state),
});

const mapDispatchToProps: IMovieInfoDispatchProps = {
  onUpdateGenre: updateGenreStarted,
};

export const MovieInfoContainer = connect<
  IMovieInfoDataProps,
  IMovieInfoDispatchProps,
  IMovieInfoOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(MovieInfo);
