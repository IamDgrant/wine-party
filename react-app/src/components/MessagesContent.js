import React from "react";
import { useSelector } from "react-redux";
import "../components/styling/messagesContentStying.css";

const MessagesContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="messages-content-container">
      <div className="messages-title">Messages</div>
      <div className="messages-info-name" style={{ fontWeight: "900" }}>
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div className="messages-info-email">{sessionUser.email}</div>
      <div className="messages-info"></div>
    </div>
  );
};
export default MessagesContent;
