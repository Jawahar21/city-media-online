import axios, { AxiosResponse } from "axios";
import { API_REQUEST_URL } from "../constants";
import { IMovie } from "../interfaces/IMovie";

export async function fetchMovies(): Promise<IMovie[]> {
  const response: AxiosResponse<IMovie[]> = await axios.get<IMovie[]>(
    `${API_REQUEST_URL}/api/movies`
  );
  return response.data;
}
