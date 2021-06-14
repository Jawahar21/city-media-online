import { IMovie } from "../../../../../data/interfaces/IMovie";

export interface IMovieCardProps {
  // movie whose card to be displayed
  movie: IMovie;

  // indicated if the card is selected or not
  isSelected: boolean;

  // call back to handle the click event on the card.
  onClick: (selectedGenreID: number) => void;
}
