import { IDynamicObject } from "../../../../../data/interfaces/IDynamicObject";
import { IGenre } from "../../../../../data/interfaces/IGenre";

export interface IMovieInfoDataProps {
    genres: IDynamicObject<IGenre>;
}