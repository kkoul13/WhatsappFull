import { DonutLarge, SearchOutlined } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import "./Sidebar.css";
import { SidebarChat } from "./SidebarChat";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="" />
        <div className="sidebar_headerRight">

          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
          
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined/>
          <input placeholder="Search/New Chat" type='text'/>
        </div>
      </div>
      <div className="sideBar_Chats">
        <SidebarChat/>
      </div>
    </div>
  );
};
