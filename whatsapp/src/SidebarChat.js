import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

export const SidebarChat = () => {
  return (
    <div className='sideBarChat'>
        <Avatar/>
        <div className="sideBarChat_info">
            <h1>Room name</h1>
            <p>This is the message</p>
        </div>
    </div>
  )
}
