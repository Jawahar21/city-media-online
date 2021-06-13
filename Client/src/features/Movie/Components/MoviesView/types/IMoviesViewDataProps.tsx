import { IDynamicObject } from "../../../../../data/interfaces/IDynamicObject";
import { IMovie } from "../../../../../data/interfaces/IMovie";

export interface IMoviesViewDataProps {
  movies: IDynamicObject<IMovie>;
  selectedGenreID: number;
}
