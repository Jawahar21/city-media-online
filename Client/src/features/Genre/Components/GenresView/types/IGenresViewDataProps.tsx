import { IDynamicObject } from "../../../../../data/interfaces/IDynamicObject";
import { IGenre } from "../../../../../data/interfaces/IGenre";

export interface IGenresViewDataProps {
  genres: IDynamicObject<IGenre>;
  selectedGenreID: number;
}
