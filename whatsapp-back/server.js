import express from 'express'
import mongoose from 'mongoose';
import Messages from './dbMessage.js'
import Pusher from 'pusher';
import cors from 'cors'


const app = express();

const port = process.env.PORT || 9000;

// const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1425752",
  key: "1f5265f05f9509580481",
  secret: "eb28618f90d9865a0719",
  cluster: "ap2",
  useTLS: true
});

// pusher.trigger("my-channel", "my-event", {
//   message: "hello world"
// });

const connection_url= 'mongodb+srv://koulkashyap97:Hesoyam150@cluster0.bx7st.mongodb.net/test'

mongoose.connect(connection_url)

const db = mongoose.connection

db.once('open' , ()=>{
    console.log("Db connected")

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()
    changeStream.on("change" , (change)=>{
        console.log("a change occured")

        if(change.operationType==="insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("message" , "inserted" , {
                name :messageDetails.name,
                message : messageDetails.message,
                timestamp : messageDetails.timestamp,
                received : messageDetails.received
            })
        }

        else{
                console.log("Error triggering push")
        }
    })
})



app.use(express.json())

app.use(cors())

app.get('/' , (req , res)=>res.status(200).send("hello world"))

app.get("/messages/sync" , (req,res)=>{
    Messages.find(
        (err , data)=>{
            if(err){
                res.status(500).send(err)
            }

            else{
                res.status(200).send(data)
            }
        }
    )
})

app.post("/messages/new" , (req,res)=>{
    const dbMessage = req.body;
    Messages.create(dbMessage , (err , data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.listen(port , ()=>console.log(`App is running on ${port}`))