import { IMovie } from "../../../../../data/interfaces/IMovie";

export interface IMovieInfoOwnProps {
  // movie whose info to be displayed
  movie: IMovie;
  // action dispatch to perform cleanup activities on close of MovieInfo pop up
  onClose: () => void;
}
