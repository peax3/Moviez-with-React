import React from "react";

function MovieCard({ movie }) {
  const { id, title, vote_average, release_date, poster_path } = movie;

  return (
    <div className="movie-card">
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="movie poster"
      />
      <div className="movie-info">
        <div>
          <span>{title}</span>
          <span>{vote_average}</span>
        </div>
        <span>{release_date}</span>
      </div>
    </div>
  );
}

export default MovieCard;
