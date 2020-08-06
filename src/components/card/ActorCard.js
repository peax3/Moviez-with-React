import React from "react";

const ActorCardBody = ({ actorName, actorRole, NumOfEpisodes }) => {
  return (
    <div className="actor-body">
      <span>{actorName}</span>
      <br />
      <span>{actorRole}</span>
      <br />
      <span>{NumOfEpisodes}</span>
    </div>
  );
};

const ActorCardImage = ({ poster }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w185/${poster}`}
      alt="actor"
      className="actor-image"
    />
  );
};

const ActorCard = ({ actor }) => {
  const { name, character, NumOfEpisodes, profile_path } = actor;

  return (
    <div className="actor-card">
      <ActorCardImage poster={profile_path} />
      <ActorCardBody
        actorName={name}
        actorRole={character}
        NumOfEpisodes={NumOfEpisodes}
      />
    </div>
  );
};

export default ActorCard;
