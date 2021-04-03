import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import "../components/styling/FAQContentStyling.css";

const FAQContent = () => {
  return (
    <div className="faq-content-container">
      <div className="faq-title">FAQ</div>
      <div className="faq-question">
        <ol>
          <li>
            <h3>What is Wine Party?</h3>
          </li>
        </ol>
      </div>
      <div className="-faq-answers">
        <p>
          It is the only place where you can search for and reserve a Certified
          Sommelier or Certified Mixologist for your next event. It was
          conceived by our founder Andre Grant, who himself is an aficionado of
          wine & spirits! His personal favorite being Bourbon, especially Four
          Roses Single Barrel.{" "}
        </p>
      </div>
    </div>
  );
};
export default FAQContent;
