import React from "react";
import { default as Typography } from "@material-ui/core/Typography";
import { default as Grid } from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

interface Props {
  currentChanel: string;
}
const ChatHead = (props: Props) => {
  const classes = useStyles();
  const { currentChanel } = props;
  return (
    <React.Fragment>
      <Typography variant="h4" component="h4">
        Chat App
      </Typography>
      <Typography component="p">Welcome to our chat app</Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div className={classes.paper}>
            <h2> Currently on {currentChanel} Channel</h2>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ChatHead;
