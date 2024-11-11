'use client';
import React, { useState } from 'react'

const Chat = () => {
  
    const [messageList, setMessageList] = useState([]);

    const addNewMessage = (e) =>{
        console.log(e.code);

        if(e.code === 'Enter'){

            if(!e.target.value){
                alert('Please enter a message');
                return;
            }

        }

    }
   
    return (
    
  )
}

export default Chat;
