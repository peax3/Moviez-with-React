import React from "react";
import no_image_icon from "../../assets/images/no-image-icon.jpg";

export function CardImage({ poster, alt }) {
  return (
    <img
      src={!poster ? no_image_icon : `http://image.tmdb.org/t/p/w300/${poster}`}
      alt={alt}
      className="card-image"
    />
  );
}
export function CardBody({ title, votes, date }) {
  return (
    <div className="card-body">
      <div>
        <span>{title}</span>
        <span className="votes">
          <i className="fas fa-star"></i>
          {votes}
        </span>
      </div>
      <span className="date">{date}</span>
    </div>
  );
}
