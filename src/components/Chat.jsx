import React from 'react'
import Messages from './Messages'
import Inputs from "./Inputs"


const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>Jane</span>
        
          
          
        
      </div>
      <Messages/>
        <Inputs/>
    </div>
  )
}

export default Chat