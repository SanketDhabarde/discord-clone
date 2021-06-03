import { Avatar } from "@material-ui/core";
import React from "react";
import './Server.css';

function Server({server}) {
  return (
    <div className="server">
        <Avatar src={server.serverImage} />
    </div>
  );
}

export default Server;
