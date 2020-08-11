import React from "react";

import TvCard from "../card/TvCard";

function TvShows({ tvShows }) {
  return (
    <div className="movies">
      {tvShows.map((show) => (
        <TvCard tv={show} key={show.id} />
      ))}
    </div>
  );
}

export default TvShows;
