import { useEffect, useState } from 'react';
import './App.css';
import { Chat } from './Chat';
import { Sidebar } from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'


function App() {

  const [messages , setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/messages/sync").then((res)=>{
      setMessages(res.data)
    })

  } , [])

  useEffect(()=>{
    
    var pusher = new Pusher('1f5265f05f9509580481', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessages)=> {
      // alert(JSON.stringify(data));
      setMessages([...messages , newMessages])
    });

    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  } , [messages])


  return (
    <div className="App">
      <div className="app__body">
      <Sidebar/>
      <Chat/>
      </div>
      
    </div>
  );
}

export default App;
