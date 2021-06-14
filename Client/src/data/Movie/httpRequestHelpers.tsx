import axios, { AxiosResponse } from "axios";
import { API_REQUEST_URL } from "../constants";
import { IMovie } from "../interfaces/IMovie";

export async function fetchMovies(genreID: number): Promise<IMovie[]> {
  const response: AxiosResponse<IMovie[]> = await axios.get<IMovie[]>(
    `${API_REQUEST_URL}/api/movies/${genreID}`
  );
  return response.data;
}

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
