import React, { useEffect, useState } from 'react';
import {IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Server from './components/Server/Server';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Modal from './components/Modal/Modal';
import db from './firebase';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [servers, setServers] = useState([]);

  // to get the created servers from database
  useEffect(() => {
    db.collection('servers').onSnapshot(snaps => {
      setServers(snaps.docs.map( snap => ({
        data: snap.data(),
        id: snap.id
      })));
    })
  }, []);

  return (
    <div className="app">
      {!user ? (
        <BrowserRouter>
          <Route path="/" exact><SignIn  user={user} setUser={setUser}/></Route>
          <Route path="/signup"><SignUp user={user} setUser={setUser}/></Route>
        </BrowserRouter>
      ): (
        <BrowserRouter>
        <div className="app__servers">
          {servers?.map(server => (
            <Server key={server.id} server={server.data} id={server.id}/>
          ))}
          <IconButton className="app__serverAdd" onClick={() => setModal(true)}>
              <AddIcon/>
          </IconButton>
        </div>
        <Route path="/" exact>
          <Sidebar user={user} setUser={setUser}/>
          <Chat user={user}/>
        </Route>
        <Route path="/server/:serverId" exact>
          <Sidebar user={user} setUser={setUser}/>
          <Chat user={user}/>
        </Route>
        <Route path="/server/:serverId/channel/:channelId">
          <Sidebar user={user} setUser={setUser}/>
          <Chat user={user}/>
        </Route>
        {modal && <Modal setModal={setModal} server/>}
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default App;
