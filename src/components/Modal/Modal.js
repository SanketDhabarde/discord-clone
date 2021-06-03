import React, { useEffect, useState } from 'react';
import './Modal.css';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import db, { storage } from '../../firebase';
import firebase from 'firebase/app';

function Modal({setModal, server, channel}) {
    const [serverName, setServerName] = useState("");
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);

    // to upload the serverImage to firebase storage
    // : if request.auth != null
    useEffect(() => {
        if(file){
            const storageRef= storage.ref(file.name);

            storageRef.put(file).on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred/ snap.totalBytes)*100;
                console.log(percentage);
            }, (error) => {
                console.log(error);
            }, async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url);
            })
        }
    }, [file]);


    
    const clickHandler = (event) => {
        if(event.target.classList.contains('modal')){
            setModal(false);
        }
    }

    const imageUploadHandler = (event) => {
        const selected = event.target.files[0];
        if(selected){
            setFile(selected);
        }
    }

    const serverHandler = () => {
        if(serverName && url){
            db.collection("servers").add({
                serverName: serverName,
                serverImage: url,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            setModal(false);
        }
    }

    return (
        <div className="modal" onClick={clickHandler}>
            {server && (
                <div className="modal__createServer">
                <div className="modal__header">
                    <h2>Customize your server</h2>
                   <label>
                        <input type="file" onChange={imageUploadHandler}/>
                        <AddAPhotoIcon style={{color:"grey", textAlign: 'center', marginTop: '9px', marginRight: '22px'}}/> 
                        <small style={{margin:'12px'}}>Upload</small>  
                   </label>    
                </div>
                <div className="modal__create">
                    <label htmlFor="server">Server Name</label>
                    <input type="text" id="server" value={serverName} onChange={e => setServerName(e.target.value)}/>
                </div>
                <div className="modal__footer">
                    <button className="modal__backButton" onClick={() => setModal(false)}>Back</button>
                    <button className="modal__createButton" onClick={serverHandler}>Create</button>
                </div>
            </div>
            )}
            {channel && (
                <div className="modal__createServer">
                <div className="modal__header">
                    <h2>Customize your Channel</h2>
                </div>
                <div className="modal__create">
                    <label htmlFor="server">Channel Name</label>
                    <input type="text" id="server"/>
                </div>
                <div className="modal__footer">
                    <button className="modal__backButton" onClick={() => setModal(false)}>Back</button>
                    <button className="modal__createButton">Create</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Modal;
