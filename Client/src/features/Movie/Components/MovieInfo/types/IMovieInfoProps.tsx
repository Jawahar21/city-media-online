import { IMovieInfoDataProps } from "./IMovieInfoDataProps";
import { IMovieInfoDispatchProps } from "./IMovieInfoDispatchProps";
import { IMovieInfoOwnProps } from "./IMovieInfoOwnProps";

export interface IMovieInfoProps
  extends IMovieInfoDataProps,
    IMovieInfoDispatchProps,
    IMovieInfoOwnProps {}
