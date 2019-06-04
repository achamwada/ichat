import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { default as Paper } from "@material-ui/core/Paper";
import { default as List } from "@material-ui/core/List";
import { ContextStore } from "../../store/store";
import Messages from "../messages/Messages";
import Friends from "../friends/Friends";
import Channels from "../channels/Channels";
import Message from "../../models/message";
import ChatHead from "../chatHead/ChatHead";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      margin: "2em 10em"
    },
    flex: {
      display: "flex"
    },
    topicsWindow: {
      width: "25%",
      height: "300px",
      borderRight: "1px dashed lightgrey"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

function Dashboard() {
  const classes = useStyles({});
  const [message, setMessage] = useState("");
  const [allData, sendChatAction] = React.useContext(ContextStore);

  const channels = Object.keys(allData);
  let [currentChanel, setChanel] = useState("ReactJS");

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <ChatHead currentChanel={currentChanel} />

        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav">
              {channels.map((topic, topicIndex) => (
                <Channels
                  key={topicIndex}
                  topic={topic}
                  currentChanel={currentChanel}
                  chatCount={allData[topic].length}
                  ChangeChanel={(currentChanel: string) =>
                    setChanel(currentChanel)
                  }
                />
              ))}
            </List>
          </div>
          <Messages
            chats={allData[currentChanel]}
            messageFromInput={message}
            sendMessage={(msg: string) => setMessage(msg)}
            sendChatAction={(messageObj: Message) => sendChatAction(messageObj)}
            channel={currentChanel}
          />
          <Friends />
        </div>
      </Paper>
    </React.Fragment>
  );
}

export default Dashboard;
