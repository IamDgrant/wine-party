import React from "react";
import { useHistory } from "react-router-dom";
import "../components/styling/faqStyle.css";

const FAQ = () => {
  const history = useHistory();

  const backClick = () => {
    history.push("/");
  };

  const backButton = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-alt-circle-left"
      class="svg-inline--fa2 fa-arrow-alt-circle-left fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
      ></path>
    </svg>
  );

  return (
    <>
      <div className="faq-main">
        <div className="faq">
          <div className="back-arrow">
            <button onClick={backClick}>{backButton}</button>
            <div className="welcome">
              <h1>FAQ</h1>
            </div>
          </div>
      <div className="faq-questions">
            <div className="faq-who-question">
              <ol>
                <li>
                  <h3>What is Wine Party?</h3>
                </li>
              </ol>
            </div>
            <div className="-faq-who-text">
              <p>
                It is the only place where you can search for and reserve a
                Certified Sommelier or Certified Mixologist for your next event.
                It was conceived by our founder Andre Grant, who himself is an
                aficionado of wine & spirits! His personal favorite being
                Bourbon, especially Four Roses Single Barrel.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
