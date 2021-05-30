import React, { useState } from 'react';
import {IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Server from './components/Server/Server';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
          // <SignUp/>
          <SignIn/>
      ): (
        <>
        <div className="app__servers">
          <Server/>
          <Server/>
          <Server/>
          <IconButton style={{backgroundColor: '#36393f'}}>
              <AddIcon style={{color: 'green'}}/>
          </IconButton>
        </div>
        <Sidebar/>
        <Chat/>
        </>
      )}
      
    </div>
  );
}

export default App;
