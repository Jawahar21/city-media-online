export class CacheService {
    private static fetchedMoviesGenreIDs = new Set<number>();

    public static CheckIfMoviesOfGenreAreFetched(genreID: number) {
        return this.fetchedMoviesGenreIDs.has(genreID);
    }

    public static AddGenreIDToFetchedList(genreID: number) {
        return this.fetchedMoviesGenreIDs.add(genreID);
    }
}