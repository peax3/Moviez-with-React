import React, { Fragment, useContext, useEffect } from "react";

import TvContext from "../../context/tv/tvContext";

import TvShows from "./TvShows";
import Paginate from "../pagination/Paginate";
import Spinner from "../spinner/Spinner";

function TvShowsPage({ match, history }) {
  const tvContext = useContext(TvContext);
  const { tvShows, loadingTV, getTvShows, totalPages } = tvContext;

  useEffect(() => {
    getTvShows(match.params.filter, match.params.page);
    // eslint-disable-next-line
  }, [match.params.filter, match.params.page]);

  const handlePageChange = (page) => {
    match.params.page = page;
    history.push(`/tv/${match.params.filter}/${page}`);
  };

  if (tvShows === null || tvShows === undefined) {
    return null;
  }

  return (
    <Fragment>
      {tvShows !== null && !loadingTV ? (
        <Fragment>
          <TvShows tvShows={tvShows} loadingMovies={loadingTV} />
          <Paginate
            totalPages={totalPages}
            currentPage={Number(match.params.page)}
            pageNeighbors={3}
            paginateFunc={handlePageChange}
          />
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
}

export default TvShowsPage;
