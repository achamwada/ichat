import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { default as Paper } from '@material-ui/core/Paper';
import { default as Typography } from '@material-ui/core/Typography';

import { default as List } from '@material-ui/core/List';
import { default as ListItem } from '@material-ui/core/ListItem';
import { default as ListItemText } from '@material-ui/core/ListItemText';

import { default as Avatar } from '@material-ui/core/Avatar';
import { default as Chip } from '@material-ui/core/Chip';
import { default as FaceIcon } from '@material-ui/icons/Face';
import { default as Button } from '@material-ui/core/Button';
import { default as TextField } from '@material-ui/core/TextField';
import { ContextStore } from '../store/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      margin: '2em 10em'
    },
    flex: {
      display: 'flex'
    },
    topicsWindow: {
      width: '25%',
      height: '300px',
      borderRight: '1px dashed lightgrey'
    },
    chatWindow: {
      width: '75%',
      height: '300px'
    },
    chip: {
      margin: '5px'
    },
    chatBox: {
      width: '85%',
      margin: '5px'
    },
    sendBox: {
      width: '15%'
    }
  }),
);


function Dashboard() {
  const classes = useStyles({});
  const [ message, setMessage ] = useState("");
  const [ allData ] = React.useContext(ContextStore);
  //console.log({allData})

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>
        <Typography component="p">
          Welcome to our chat app
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav">

              {
                ["Javascript", "Golang", "PHP"].map((topic, topicIndex) =>


                  <ListItem button key={topicIndex}>
                    <ListItemText primary={topic} />
                  </ListItem>


                )
              }
            </List>

          </div>
          <div className={classes.chatWindow}>
            {
              [{ from: "alex", msg: "Hi there", channel: "React" }, { from: "Martha", msg: "I'm fine, how are you?", channel: "Golang" }, { from: "alex", msg: "doing Greate", channel: "PHP" }].map((chat, chatIndex) =>
                <React.Fragment key={chatIndex}>


                  <ListItem button>
                    <Chip
                      avatar={
                        <Avatar>
                          <FaceIcon />
                        </Avatar>
                      }
                      label={chat.from}
                      className={classes.chip}
                    />
                    <ListItemText primary={chat.msg} />
                  </ListItem>

                </React.Fragment>


              )
            }

          </div>

        </div>
        <div className={classes.flex}>


          <TextField className={classes.chatBox}
            label="Message"
            value={message}
            onChange = { (e: React.ChangeEvent<HTMLInputElement>)=> setMessage(e.target.value) }
          />
          <Button variant="contained" color="primary" className={classes.sendBox}>
            Send message
      </Button>




        </div>

      </Paper>
    </React.Fragment>
  );
}

export default Dashboard;
