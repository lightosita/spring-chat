import React from "react";
import SideBar from "../components/SideBar";
import Chats from "../components/Chats";

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
      <SideBar />
      <Chats />
      </div>
    </div>
  )
 
 
};
export default HomePage;