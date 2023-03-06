import React from 'react';
// import cam from '../img/cam';
// import Add from './img/Add';
// import more from './img/more';
import Messages from './Messages';


const ChatsDisplay = () => {
  return (
    <div className="chatsdisplay">
      <div className="chatInfo">
        <span>light</span>
        <div className="chatIcons">
          <img scr={HiCamera} alt="" />
          <img scr={IoPersonAdd} alt="" />
          <img scr={IoMdMore} alt="" />
          </div>
          <Messages/>
          <Input/>

        </div>
        </div>
  )
}

export default ChatsDisplay