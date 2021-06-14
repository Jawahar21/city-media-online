import { IMovie } from "../../../../../data/interfaces/IMovie";

export interface IMovieCardProps {
  movie: IMovie;
  isSelected: boolean;
  onClick: (selectedGenreID: number) => void;
}
