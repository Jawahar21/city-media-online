import axios, { AxiosResponse } from "axios";
import { API_REQUEST_URL } from "../constants";
import { IGenre } from "../interfaces/IGenre";

/**
 * Makes an axios call to fetch the Genres from the server.
 * @returns list of genres available.
 */
export async function fetchGenres(): Promise<IGenre[]> {
  const response: AxiosResponse<IGenre[]> = await axios.get<IGenre[]>(`${API_REQUEST_URL}/api/genres`);
  return response.data;
}
