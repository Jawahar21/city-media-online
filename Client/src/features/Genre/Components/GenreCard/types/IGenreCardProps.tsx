import { IGenre } from "../../../../../data/interfaces/IGenre";

export interface IGenreCardProps {
  // genre to be displayed on card
  genre: IGenre;

  // indicates if card is selected by user or not
  isSelected: boolean;

  // call back to handle the click event on the card.
  onClick: (selectedGenreID: number) => void;
}
