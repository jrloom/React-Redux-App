import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import "./App.css";

import Nav from "./components/Nav";
import Movies from "./components/Movies";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    paddingTop: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid component="header" container>
          <Grid component="h1" item xs={12}>
            Studio Ghibli
          </Grid>
          <Grid component="nav" item xs={12}>
            <Nav />
          </Grid>
        </Grid>
      </Paper>
      <Movies movie={props.movie} />
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.data,
  error: state.error
});
//
export default connect(
  mapStateToProps,
  { getData }
)(App);
