export interface IMovie {
  id: number;
  name: string;
  releaseYear?: number;
  rating: number;
  imageURL?: string;
  GenreId: number;
  genreName: string;
}
