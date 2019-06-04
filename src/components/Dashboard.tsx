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

import {default as Grid} from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';

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
    friendsWindow: {
      width: '25%',
      height: '300px',
      borderLeft: '1px dashed lightgrey'
    },
    chatWindow: {
      width: '50%',
      maxHeight: '300px', 
      overflow: 'auto'
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
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  })
);


function Dashboard() {
  const classes = useStyles({});
  const [message, setMessage] = useState("");
  const [allData, sendChatAction]= React.useContext(ContextStore);

  const channels = Object.keys(allData);
  let [currentChanel, setChanel] = useState("Golang");
  var messageText = "";


  return (
    <React.Fragment>
  
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>
        <Typography component="p">
          Welcome to our chat app
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}><h2> Currently on {currentChanel} Channel</h2></div>
        </Grid>
        
      </Grid>
        
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav">

              {
                channels.map((topic, topicIndex) =>
                

                  <ListItem  selected={topic === currentChanel}
                  button 
                  key={topicIndex} onClick={() => setChanel(topic)}>
                  <div style={{display:'none'}}>{messageText = (allData[topic].length === 1 ) ? " message" :   " messages"}</div>
                  
                    <ListItemText primary={topic} secondary={allData[topic].length + messageText} />
                  </ListItem>


                )
              }
            </List>

          </div>
          
          <div className={classes.chatWindow}>
           
            {
              allData[currentChanel].map((chat: any, chatIndex: number) =>
                <React.Fragment key={chatIndex}>
                  <ListItem button>
                    {Object.entries(chat).length === 0 && chat.constructor === Object ? <div>No chats</div> : <React.Fragment>
                      <Chip
                        avatar={<Avatar> <FaceIcon /> </Avatar>}
                        label={chat.from} className={classes.chip} />
                      <ListItemText
                        primary={chat.msg} />
                    </React.Fragment>}
                  </ListItem>
                </React.Fragment>
              )
            }

          </div>

          <div className={classes.friendsWindow}>
            <List component="nav">
            <ListSubheader>You have no friends yet</ListSubheader>

                  <ListItem >
                  
                    <ListItemText  secondary="Coming soon!" />
                  </ListItem>


            </List>

          </div>

        </div>
        <div className={classes.flex}>
          <TextField className={classes.chatBox}
            label="Message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          />
          <Button 
          variant="contained" 
          color="primary" 
          className={classes.sendBox}
          onClick = { () => {
              sendChatAction({channel: currentChanel, msg:message ,from:"alex" })
            setMessage("");
          }
           }
          >
            Send message
      </Button>

        </div>

      </Paper>
    </React.Fragment>
  );
}

export default Dashboard;
