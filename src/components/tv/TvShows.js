import React from "react";

import TvCard from "../card/TvCard";
import Spinner from "../spinner/Spinner";

function TvShows({ tvShows, loadingTV }) {
  if (loadingTV) {
    return <Spinner />;
  }

  if (tvShows === null || tvShows === undefined) {
    return null;
  }

  return (
    <div className="movies">
      {tvShows.map((show) => (
        <TvCard tv={show} key={show.id} />
      ))}
    </div>
  );
}

export default TvShows;
