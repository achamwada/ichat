import React from "react";
import { default as ListItem } from "@material-ui/core/ListItem";
import { default as ListItemText } from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { default as List } from "@material-ui/core/List";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    friendsWindow: {
      width: "25%",
      height: "300px",
      borderLeft: "1px dashed lightgrey"
    }
  })
);

const Friends = () => {
  const classes = useStyles();

  return (
    <div className={classes.friendsWindow}>
      <List component="nav">
        <ListSubheader>You have no friends yet</ListSubheader>

        <ListItem>
          <ListItemText secondary="Coming soon!" />
        </ListItem>
      </List>
    </div>
  );
};

export default Friends;
