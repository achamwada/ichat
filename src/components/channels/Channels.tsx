import React from "react";
import { default as ListItem } from "@material-ui/core/ListItem";
import { default as ListItemText } from "@material-ui/core/ListItemText";

interface Props {
  topic: string;
  currentChanel: string;
  chatCount: number;
  ChangeChanel: Function;
}
const Channels = (props: Props) => {
  const { topic, currentChanel, chatCount, ChangeChanel } = props;
  let messageText = "";
  return (
    <div>
      <ListItem
        selected={topic === currentChanel}
        button
        onClick={() => ChangeChanel(topic)}
      >
        <div style={{ display: "none" }}>
          {(messageText = chatCount === 1 ? " message" : " messages")}
        </div>

        <ListItemText primary={topic} secondary={chatCount + messageText} />
      </ListItem>
    </div>
  );
};

export default Channels;
