import React, { useState } from "react";

import ActorCard from "../card/ActorCard";

const Actors = ({ actors }) => {
  const [showAllActors, setShowAllActors] = useState(false);

  const handleClick = (e) => {
    setShowAllActors(e.target.checked);
  };

  let actorsToShow;

  if (actors === null || actors === undefined) {
    return null;
  } else if (actors.length === 0) {
    return null;
  }

  if (actors.length <= 10) {
    actorsToShow = actors;
  } else if (actors.length > 10 && !showAllActors) {
    actorsToShow = actors.slice(0, 10);
  } else if (actors.length > 10 && showAllActors) {
    actorsToShow = actors;
  }

  return (
    <div className="actors-container">
      <h2>Actors</h2>
      {actors.length > 10 && (
        <label htmlFor="show Actors">
          showAllActors
          <input type="checkbox" onClick={handleClick} />
        </label>
      )}

      <div className="actors">
        {actorsToShow.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default Actors;
