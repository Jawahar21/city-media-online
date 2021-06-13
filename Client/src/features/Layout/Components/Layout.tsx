import * as React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { GenresView } from "../../Genre/Components/GenresView/GenreView";
import { MoviesView } from "../../Movie/Components/MoviesView/MoviesView";
import { ILayoutProps } from "./types/ILayoutProps";

export const Layout: React.NamedExoticComponent<ILayoutProps> = React.memo(
  (props: ILayoutProps) => {

    const fetchData = useCallback(() => {
      props.onFetchGenres();
      props.onFetchMovies();
    }, [props]);

    // dispatch action to fetch movies and genres
    useEffect(() => {
      fetchData();
    }, [fetchData]);

    return (
      <div>
        <GenresView />
        <MoviesView />
      </div>
    );
  }
);
