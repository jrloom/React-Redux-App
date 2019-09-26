import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Movies = ({ getData, ...props }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      {props.movie.map(movie => (
        <h4 key={movie.id}>{movie.title}</h4>
      ))}
      {props.error}
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.data,
  id: state.id,
  title: state.title,
  desc: state.desc,
  director: state.director,
  producer: state.producer,
  release: state.release,
  score: state.score,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getData }
)(Movies);
