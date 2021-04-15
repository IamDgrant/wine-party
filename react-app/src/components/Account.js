import React from "react";
import MainHeader from "../components/MainHeader"
import AccountContent from "../components/AccountContent"
import Footer from "../components/Footer";
import "../components/styling/accountStyling.css"

const Account = () => {
 

  return (
    <div className="main-account-container">
      <div className="account-header">
        <MainHeader />
      </div>
      <div className="a-contents">
          <AccountContent />
        </div>
        <div className="user-footer-content">
        <Footer />
      </div>
    </div>
    
  );
};

export default Account;
