import * as React from "react";
import { useCallback, useEffect } from "react";
import { GenresViewContainer } from "../../Genre/Components/GenresView/GenresViewContainer";
import { MoviesViewContainer } from "../../Movie/Components/MoviesView/MoviesViewContainer";
import "./layout.css";
import { ILayoutProps } from "./types/ILayoutProps";

/**
 * This is the layout component which holds the genres view and movies view
 * On load dispatches action to make an API call to fetch genres.
 */
export const Layout: React.NamedExoticComponent<ILayoutProps> = React.memo(
  (props: ILayoutProps) => {
    
    const fetchData = useCallback(() => {
      props.onFetchGenres();
    }, [props]);

    // dispatch action to fetch genres
    useEffect(() => {
      fetchData();
    }, [fetchData]);

    return (
      <div className="layout">
        <GenresViewContainer />
        <MoviesViewContainer />
      </div>
    );
  }
);
