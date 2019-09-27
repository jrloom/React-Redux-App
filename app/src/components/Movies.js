import React from "react";
import { makeStyles, Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(5)
  },
  verticalSpace: {
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: 24
  }
}));

const Movie = props => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing={5}>
          {props.movie.map(movie => (
            <Grid item xs={6} key={movie.id}>
              <Card>
                <CardContent>
                  <Grid container alignItems="center" justify="space-between" className={classes.verticalSpace}>
                    <Typography component="h2" className={classes.title} color="textSecondary">
                      {movie.title}
                    </Typography>
                    <Typography color="textSecondary">{movie.release_date}</Typography>
                  </Grid>
                  <Grid container alignItems="center" justify="space-between" className={classes.verticalSpace}>
                    <Typography>Directed by {movie.director}</Typography>
                    <Typography>Produced by {movie.producer}</Typography>
                  </Grid>
                  <Typography>{movie.description}</Typography>
                  <Grid container justify="flex-end">
                    <Typography>{movie.rt_score}% fresh</Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Movie;
