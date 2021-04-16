import React from "react";
import MainHeader from "../components/MainHeader";
import MessagesContent from "../components/MessagesContent";
import Footer from "../components/Footer";
import "../components/styling/messagesStyling.css";

const Messages = () => {
  return (
    <>
      <div className="main-messages-container">
        <div className="messages-contents">
          <MessagesContent />
        </div>
        <div className="messages-header">
          <MainHeader />
        </div>
      </div>
      <div className="user-footer-content">
        <Footer />
      </div>
    </>
  );
};

export default Messages;
