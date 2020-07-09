import React, { Fragment, useContext, useEffect } from "react";

import MovieContext from "../../context/movies/moviesContext";

import Search from "../search/Search";
import Movies from "../movies/Movies";

function Home() {
  const movieContext = useContext(MovieContext);

  const { movies, loadingMovies, getMovies } = movieContext;

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  let moviesToShow;

  if (movies !== null && movies !== undefined)
    moviesToShow = movies.slice(0, 8);

  return (
    <Fragment>
      <div className="my-3">
        <Search />
      </div>
      <section>
        <h2 className="mb-1">Popular Movies</h2>
        <Movies movies={moviesToShow} loadingMovies={loadingMovies} />
      </section>
    </Fragment>
  );
}

export default Home;
