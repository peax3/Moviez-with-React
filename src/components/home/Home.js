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
  return (
    <Fragment>
      <div className="my-2">
        <Search />
      </div>
      <section>
        <h2>Popular Movies</h2>
        <Movies movies={movies} loadingMovies={loadingMovies} />
      </section>
    </Fragment>
  );
}

export default Home;
