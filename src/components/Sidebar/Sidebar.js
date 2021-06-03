import { Avatar, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import SettingsIcon from "@material-ui/icons/Settings";
import Modal from "../Modal/Modal";
import { useParams } from "react-router";
import db from "../../firebase";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [modal, setModal] = useState(false);
  const [serverName, setServerName] = useState("");
  const [channels, setChannels] = useState([]);
  const { serverId } = useParams();

  // to retrive the server from db
  useEffect(() => {
    if (serverId) {
      db.collection("servers")
        .doc(serverId)
        .onSnapshot((snap) => {
          setServerName(snap.data().serverName);
        });

      // to retrive the channels from db
      db.collection("servers")
        .doc(serverId)
        .collection("channels")
        .onSnapshot((snap) => {
          setChannels(
            snap?.docs.map((doc) => ({
              channelName: doc.data().channelName,
              id: doc.id,
            }))
          );
        });
    }
  }, [serverId]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h4>#{serverName? serverName : "No server selected"}</h4>
        <IconButton onClick={() => setModal(true)}>
          <Add style={{ color: "white" }} />
        </IconButton>
      </div>
      <div className="sidebar__channels">
        {channels?.map((channel) => (
          <NavLink to={`/server/${serverId}/channel/${channel.id}`} activeClassName="activeChannel" key={channel.id}>
            <p className="sidebar__channel" >
              <span className="sidebar__channelSymbol">#</span>{" "}
              {channel.channelName}
            </p>
          </NavLink>
        ))}
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footerLeft">
          <Avatar />
          <h5>Username</h5>
        </div>
        <div className="sidebar__footerRight">
          <MicIcon />
          <HeadsetMicIcon />
          <SettingsIcon />
        </div>
      </div>
      {modal && <Modal setModal={setModal} channel serverId={serverId} />}
    </div>
  );
}

export default Sidebar;
