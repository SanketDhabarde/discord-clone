import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__serverLogo">
        <Avatar/>
        <Avatar/>
        <Avatar/>
        <IconButton>
            <AddIcon/>
        </IconButton>
      </div>
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
