import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  return (
    <div className="movie-card card text-center w-100 m-auto col-md-6">
      <div className="movie-poster w-25 m-auto">
        <img className="w-75" src={movie.poster} alt="" />
      </div>
      <h3>{movie.movieName}</h3>
      <p>{movie.category}</p>
      <p>{movie.description}</p>
      <div className="timeAndRetting d-flex justify-content-around">
        <p>Watch Time: {movie.watchTime}</p>
        <p>Ratting: {movie.imdbRating}</p>
      </div>
      <button
        onClick={() => handleWatchTime(movie.watchTime)}
        className="btn btn-info w-75"
      >
        Book Now
      </button>
    </div>
  );
};

export default SingleCard;
