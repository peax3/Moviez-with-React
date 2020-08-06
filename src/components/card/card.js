import React from "react";

export function CardImage({ poster, alt }) {
  return (
    <img
      src={`http://image.tmdb.org/t/p/w500/${poster}`}
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
        <span>{votes}</span>
      </div>
      <span>{date}</span>
    </div>
  );
}
