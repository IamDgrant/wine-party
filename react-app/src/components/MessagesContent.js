import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/styling/messagesContentStying.css";

const MessagesContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="messages-content-container">
      <div className="messages-title">Messages</div>
      <div ClassName="messages-info-name">
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div className="profile-info-email">{sessionUser.email}</div>
      <div className="account-info"></div>
    </div>
  );
};
export default MessagesContent;
