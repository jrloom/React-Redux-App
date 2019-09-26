import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFilm } from "../actions";

const Movies = ({ getFilm, ...props }) => {
  useEffect(() => {
    getFilm();
  }, [getFilm]);

  return (
    <div>
      <div>Movie div</div>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getFilm }
)(Movies);
