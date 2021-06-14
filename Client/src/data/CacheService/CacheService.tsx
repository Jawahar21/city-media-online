/**
 * This is a Cache Service used for meomoizing purpose accoss the application.
 * This currently only remembers the genreIDs whose list of movies are fetched to the client application.
 * With this an API call is not made again to re-fetch the previously fetched movies info.
 */
export class CacheService {
  private static fetchedMoviesGenreIDs = new Set<number>();

  /**
   * Checks if movies of specific genre are fetched or not.
   * @param genreID - ID of the genre for which the fetched status is to be checked.
   * @returns boolean flag indicating the status
   */
  public static CheckIfMoviesOfGenreAreFetched(genreID: number) {
    return this.fetchedMoviesGenreIDs.has(genreID);
  }

  /**
   * This method is to add the genre ID into the set whose movies are fetched into the client
   * @param genreID - ID of the genre which has to be stored.
   */
  public static AddGenreIDToFetchedList(genreID: number) {
    this.fetchedMoviesGenreIDs.add(genreID);
  }
}
