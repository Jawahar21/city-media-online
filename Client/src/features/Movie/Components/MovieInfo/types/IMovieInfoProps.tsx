import { IMovie } from "../../../../../data/interfaces/IMovie";

export interface IMovieInfoProps {
  movie: IMovie;
  onClose: () => void;
}
