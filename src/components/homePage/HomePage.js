import React, { Fragment, useContext, useEffect } from "react";

import MovieContext from "../../context/movies/moviesContext";
import TvContext from "../../context/tv/tvContext";

import Search from "../search/Search";
import Movies from "../movies/Movies";
import TvShows from "../tv/TvShows";

function Home() {
  const movieContext = useContext(MovieContext);
  const tvContext = useContext(TvContext);

  const { movies, loadingMovies, getMovies } = movieContext;

  const { tvShows, getTvShows, loadingTV } = tvContext;

  useEffect(() => {
    getMovies();
    getTvShows();

    // eslint-disable-next-line
  }, []);

  let moviesToShow;

  let tvToShow;

  if (movies !== null && movies !== undefined)
    moviesToShow = movies.slice(0, 8);

  if (tvShows !== null && tvShows !== undefined) tvToShow = tvShows.slice(0, 8);

  return (
    <Fragment>
      <div className="my-3">
        <Search />
      </div>
      <section>
        <h2 className="mb-1">Popular Movies</h2>
        <Movies movies={moviesToShow} loadingMovies={loadingMovies} />
      </section>

      <section>
        <h2 className="my-2">Popular Tv Shows</h2>
        <TvShows tvShows={tvToShow} loadingTV={loadingTV} />
      </section>
    </Fragment>
  );
}

export default Home;
