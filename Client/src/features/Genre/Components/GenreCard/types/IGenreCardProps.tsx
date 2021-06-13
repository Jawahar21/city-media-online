import { IGenre } from "../../../../../data/interfaces/IGenre";

export interface IGenreCardProps {
  genre: IGenre;
  isSelected: boolean;
  onClick: (selectedGenreID: number) => void;
}
