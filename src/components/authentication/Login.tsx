import React from "react";
import { default as TextField } from "@material-ui/core/TextField";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { default as Paper } from "@material-ui/core/Paper";
import { default as Typography } from "@material-ui/core/Typography";
import { default as Button } from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { default as Grid } from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import { borders } from '@material-ui/system';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    /*container: {
      margin: '2em 2em',
      padding: '5px',
      border: 'dotted grey 1px'
    },
    textField: {
      //marginLeft: theme.spacing(1),
      //marginRight: theme.spacing(1),
      textAlign: 'center',
      width: 200
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
      //margin: "2em 20em"
    },
    button: {
      margin: theme.spacing(1)
    },
    margin: {
      //margin: theme.spacing(1)
    },
    form: {
        textAlign: 'center'
    }*/
    container: {
      paddingTop: '20px'
    },
    leftSection:{
      extend: 'container',
      backgroundColor: '#3ab399',

    },
    paper: {
      padding: '2em',
      //marginTop: '2em'
    },
    textField: {

    },
    form: {

    },
    margin: {

    },
    button: {

    }
  })
);
const Login = () => {
  const classes = useStyles();
  return (
    <div   className={classes.leftSection}>

<Container maxWidth="lg" className={classes.container}>

        
        <Grid container direction="row" spacing={3}>
      
          <Grid item xs={5}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
              Welcome to the chat app
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={7}>
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate autoComplete="off">
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
            </Paper>
          </Grid>
       
          </Grid>

      </Container>

     
      
    </div>
  );
};

export default Login;
