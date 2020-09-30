import React from "react";
import no_image_icon from "../../assets/images/no-image-icon.jpg";

const ActorCardBody = ({ actorName, actorRole, NumOfEpisodes }) => {
  return (
    <div className="actor-body">
      <h4>{actorName}</h4>
      <span className="actor-role">{actorRole}</span>
      <br />
      <span className="actor-episodes">{NumOfEpisodes}</span>
    </div>
  );
};

const ActorCardImage = ({ poster }) => {
  return (
    <img
      src={
        !poster ? no_image_icon : `https://image.tmdb.org/t/p/w185/${poster}`
      }
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
