import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <h4><span className="chat__headerSymbol">#</span> Channel Name</h4>
            </div>
            <div className="chat__container">
                <div className="chat__chat">
                    <Avatar/>
                    <div className="chat__message">
                        <h5>Usename</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam eligendi asperiores esse sunt amet accusamus vel animi neque minus maiores architecto totam, corporis iusto eos corrupti natus numquam consequuntur?</p>
                    </div>
                </div>
                <div className="chat__chat">
                    <Avatar/>
                    <div className="chat__message">
                        <h5>Usename</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam eligendi asperiores esse sunt amet accusamus vel animi neque minus maiores architecto totam, corporis iusto eos corrupti natus numquam consequuntur?</p>
                    </div>
                </div>
                
                <div className="chat__chat">
                    <Avatar/>
                    <div className="chat__message">
                        <h5>Usename</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam eligendi asperiores esse sunt amet accusamus vel animi neque minus maiores architecto totam, corporis iusto eos corrupti natus numquam consequuntur?</p>
                    </div>
                </div>
            </div>
            <div className="chat__footer">
                <div className="chat__form">
                    <form>
                        <input type="text" placeholder="Meassage  #Channel name"/>
                    </form>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chat;
