import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useParams } from "react-router";
import db from "../../firebase";
import firebase from "firebase/app";

function Chat({ user }) {
  const { serverId, channelId } = useParams();
  const [channelName, setChannelName] = useState("");
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  // retrive channelName from db
  useEffect(() => {
    if (channelId) {
      db.collection("servers")
        .doc(serverId)
        .collection("channels")
        .doc(channelId)
        .onSnapshot((snap) => {
          setChannelName(snap?.data().channelName);
        });
    }
  }, [channelId, serverId]);

  // retrive the messages
  useEffect(() => {
    db.collection("servers")
      .doc(serverId)
      .collection("channels")
      .doc(channelId)
      .collection("chats")
      .orderBy("timestamp", "asc").onSnapshot(snaps => {
          setChats(snaps.docs.map(doc => doc.data()))
      })
  }, [serverId, channelId]);

  const sendMessageHandler = (event) => {
    event.preventDefault();
    if (channelId) {
      db.collection("servers")
        .doc(serverId)
        .collection("channels")
        .doc(channelId)
        .collection("chats")
        .add({
          username: user.displayName,
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          <span className="chat__headerSymbol">#</span>{" "}
          {channelName ? channelName : "No Channel Selected"}
        </h4>
      </div>
      <div className="chat__container">
        {chats?.map(chat => (
            <div className="chat__chat" key={chat.timestamp}>
                <Avatar alt={`${chat?.username}`} src={`${chat?.photoURL}`}/>
                <div className="chat__message">
                <h5>{chat.username}</h5>
                <p>
                   {chat.message}
                </p>
                </div>
            </div>
        ))}
      </div>
      <div className="chat__footer">
        <div className="chat__form">
          <form onSubmit={sendMessageHandler}>
            <input
              type="text"
              placeholder="Meassage  #Channel name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
