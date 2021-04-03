import React from "react";
import MainHeader from "../components/MainHeader";
import FAQContent from "../components/FAQContent";
import "../components/styling/faqStyling.css";

const FAQ = () => {
  return (
    <>
      <div className="main-faq-container">
        <div className="about-header">
          <MainHeader />
        </div>
        <div className="faq-contents">
          <FAQContent />
        </div>
      </div>
    </>
  );
};

export default FAQ;
