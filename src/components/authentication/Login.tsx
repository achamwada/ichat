import React from "react";
import { default as TextField } from "@material-ui/core/TextField";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { default as Paper } from "@material-ui/core/Paper";
import { default as Typography } from "@material-ui/core/Typography";
import { default as Button } from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { default as Grid } from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: "2em 20em"
    },
    button: {
      margin: theme.spacing(1)
    },
    margin: {
      margin: theme.spacing(1)
    }
  })
);
const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h5" component="h3">
            Welcome to the chat app
          </Typography>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <form className={classes.container} noValidate autoComplete="off">
            <FormControl fullWidth className={classes.margin}>
              <TextField
                label="Username"
                className={classes.textField}
                margin="normal"
              />
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
