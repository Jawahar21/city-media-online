import { IDynamicObject } from "../../data/interfaces/IDynamicObject";
import { IMovie } from "../../data/interfaces/IMovie";

export function sortMoviesByRatingAndGenre(
  moviesMap: IDynamicObject<IMovie>,
  genreID: number
) {
  let movies: IMovie[] = Object.values(moviesMap);
  movies = movies.filter((movie: IMovie) => movie.GenreId === genreID);
  movies = movies.sort((movie1: IMovie, movie2: IMovie) => {
    return movie2.rating - movie1.rating;
  });
  return movies;
}
