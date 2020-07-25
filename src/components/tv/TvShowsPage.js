import React, { Fragment, useContext, useEffect } from "react";

import TvContext from "../../context/tv/tvContext";

import TvShows from "./TvShows";

function TvShowsPage({ match }) {
  const tvContext = useContext(TvContext);
  const { tvShows, loadingTV, getTvShows } = tvContext;

  useEffect(() => {
    getTvShows(match.params.filter, 1);
    // eslint-disable-next-line
  }, [match.params.filter]);

  return (
    <Fragment>
      <TvShows tvShows={tvShows} loadingMovies={loadingTV} />
    </Fragment>
  );
}

export default TvShowsPage;
