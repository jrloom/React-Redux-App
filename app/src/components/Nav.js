import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

import { makeStyles, Tab, Tabs } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Nav = ({ getData, ...props }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFilms = event => {
    event.preventDefault();
    getData();
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab onClick={getFilms} label="Films" />
      </Tabs>
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.data,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getData }
)(Nav);
