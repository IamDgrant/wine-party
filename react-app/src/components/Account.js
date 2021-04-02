import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountHeader from "../components/AccountHeader"
import AccountContent from "../components/AccountContent"
import "../components/styling/accountStyling.css"

const Account = () => {
 

  return (
    <div className="main-account-container">
      <div className="account">
        <AccountHeader />
      </div>
      <div className="a-contents">
          <AccountContent />
        </div>
    </div>
  );
};

export default Account;
