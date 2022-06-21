import { AttachFile, InsertEmoticon, SearchOutlined } from "@mui/icons-material";
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import './Chat.css'

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar/>
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at</p>
        </div>

        <div className="chat_headerRight">
        <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>
      </div>
        <div className="chat_body">
          <p className="chat_message">
            <span className="chat_name">
              Name of user
            </span>
            Message
            <span className="chat_timestamp">
              {new Date().toUTCString()}
            </span>

          </p>

          <p className="chat_message chat_receiver">
            <span className="chat_name">
              Name of user
            </span>
            Message
            <span className="chat_timestamp">
              {new Date().toUTCString()}
            </span>

          </p>

        </div>

        <div className="chat_footer">
          <InsertEmoticon/>
          <form>
            <input type="text" placeholder="Enter a text" />
            <button type="submit">Send a message</button>
          </form>
          <MicIcon/>
        </div>

    </div>
  );
};
