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
      <h2 className="mb-1">Actors</h2>
      {actors.length > 10 && (
        <div className="control">
          <div className="ball-checkbox">
            show All
            <input type="checkbox" onClick={handleClick} />
            <label htmlFor="checkbox">
              <div className="ball"></div>
            </label>
          </div>
        </div>
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
