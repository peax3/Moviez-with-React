import React, { Fragment } from "react";

import ActorCard from "../card/ActorCard";

const Actors = ({ actors }) => {
  if (actors === null || actors === undefined) {
    return null;
  } else if (actors.length === 0) {
    return null;
  } else {
    return (
      <div>
        <h2>Actors</h2>

        <div className="actors">
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    );
  }
};

export default Actors;
