'use client';
import React, { useState } from 'react'

const Chat = () => {

    const [chatList, setChatList] = useState([]);

    const addNewChat  = (e) => {

        if(e.code === 'Enter'){

            if(!e.target.value){
                alert('Please enter a message to add');
            }
        }
    }
  return (
    <div className='bg-gray-300 h-screen pt-10'>

        <div className='container mx-auto rounded-lg bg-white border'>

            <div className='p-4 border-b-2'>

                <input onKeyDown={addNewChat}
                placeholder='Enter a Message to add in your Chat' type="text"
                className='px-3 py-2 rounded w-full bg-gray-200' />
            </div>
        </div>
    </div>
  )
}

export default Chat;
