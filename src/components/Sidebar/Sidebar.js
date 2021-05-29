import { Avatar, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h4>#ServerName</h4>
                <IconButton>
                    <Add style={{color: 'white'}}/>
                </IconButton> 
            </div>
            <div className="sidebar__channels">
                <p className="sidebar__channel"><span className="sidebar__channelSymbol">#</span> channel 1</p>
                <p className="sidebar__channel"><span className="sidebar__channelSymbol">#</span> channel 2</p>
                <p className="sidebar__channel"><span className="sidebar__channelSymbol">#</span> channel 3</p>
            </div>
            <div className="sidebar__footer">
                <div className="sidebar__footerLeft">
                    <Avatar/>
                    <h5>Username</h5>
                </div>
                <div className="sidebar__footerRight">
                    <MicIcon/>
                    <HeadsetMicIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

