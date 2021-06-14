import { IMovie } from "../../../../../data/interfaces/IMovie";

export interface IMovieInfoOwnProps {
  movie: IMovie;
  onClose: () => void;
}
