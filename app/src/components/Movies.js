import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Movies = ({ getData, ...props }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {props.movie.map(movie => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
          <p>Description: {movie.description}</p>
          <p>Director: {movie.director}</p>
          <p>Producer: {movie.producer}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Score: {movie.rt_score}</p>
        </div>
      ))}
      <p>{props.error}</p>
    </>
  );
};

const mapStateToProps = state => ({
  movie: state.data,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getData }
)(Movies);
