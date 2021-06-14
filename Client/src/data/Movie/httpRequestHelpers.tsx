import axios, { AxiosResponse } from "axios";
import { API_REQUEST_URL } from "../constants";
import { IMovie } from "../interfaces/IMovie";

/**
 * This method is to make an axios call to fetch the movies of specific genre.
 * @param genreID - ID of the genre for which movies have to be fetched
 * @returns - list of movies of specific genre.
 */
export async function fetchMovies(genreID: number): Promise<IMovie[]> {
  const response: AxiosResponse<IMovie[]> = await axios.get<IMovie[]>(
    `${API_REQUEST_URL}/api/movies/${genreID}`
  );
  return response.data;
}

/**
 * This method is to make an axios call to update the genre of the movie.
 * @param movieID - ID of the movie for which genre has to be updated
 * @param genreID - the genre ID which has to be updated for the movie
 * @returns - The updated movie object returned from the server.
 */
export async function updateGenre(
  movieID: number,
  genreID: number
): Promise<IMovie> {
  const body = { GenreId: genreID };
  const response: AxiosResponse<IMovie> = await axios.put<IMovie>(
    `${API_REQUEST_URL}/api/movie/${movieID}`,
    body
  );
  return response.data;
}
