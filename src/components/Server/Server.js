import { Avatar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import './Server.css';

function Server({server, id}) {
  return (
    <div className="server">
      <NavLink to={`/server/${id}`}>
        <Avatar src={server.serverImage} />
      </NavLink>
    </div>
  );
}

export default Server;
