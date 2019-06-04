import React from "react";
import Message from "../../models/message";
import { default as ListItem } from "@material-ui/core/ListItem";
import { default as ListItemText } from "@material-ui/core/ListItemText";
import { default as Avatar } from "@material-ui/core/Avatar";
import { default as FaceIcon } from "@material-ui/icons/Face";
import { default as Chip } from "@material-ui/core/Chip";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { default as Button } from "@material-ui/core/Button";
import { default as TextField } from "@material-ui/core/TextField";

interface Props {
  chats: Array<Message>;
  messageFromInput: string;
  sendMessage: Function;
  sendChatAction: Function;
  channel: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatWindow: {
      width: "50%",
      maxHeight: "300px",
      overflow: "auto"
    },
    sendBox: {
      marginTop: "2em",
      width: "15%"
    },
    chatBox: {
      width: "85%",
      margin: "5px"
    },
    flex: {
      display: "flex"
    }
  })
);

const Messages = (props: Props) => {
  const {
    chats,
    messageFromInput,
    sendMessage,
    sendChatAction,
    channel
  } = props;
  const hasMessages = chats.length;
  const classes = useStyles();

  if (!hasMessages) {
    return (
      <React.Fragment>
        <div className={classes.chatWindow}>
          No chats
          <div className={classes.flex}>
            <TextField
              className={classes.chatBox}
              label="Message"
              value={messageFromInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                sendMessage(e.target.value)
              }
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.sendBox}
              onClick={() =>
                sendChatAction({ channel, from: "Alex", msg: messageFromInput })
              }
            >
              Send
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.chatWindow}>
      {chats.map((chat: Message) => (
        <ListItem button>
          <React.Fragment>
            <Chip
              label={chat.from}
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
            />
            <ListItemText primary={chat.msg} />
          </React.Fragment>
        </ListItem>
      ))}

      <div className={classes.flex}>
        <TextField
          className={classes.chatBox}
          label="Message"
          value={messageFromInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            sendMessage(e.target.value)
          }
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.sendBox}
          onClick={() => {
            sendChatAction({ channel, from: "Alex", msg: messageFromInput });
            sendMessage("");
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Messages;
