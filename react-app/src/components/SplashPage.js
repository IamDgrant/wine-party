import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import SignUpButtonModal from "./auth/modals/SignUpButtonModal";
import LogInButtonModal from "./auth/modals/LoginButtonModal";
import "../components/styling/splashPageStyle.css";
import background from "../images/pexels-cottonbro-3171815.jpg";

const SplashPage = () => {
  return (
    <>
      <div className="logo-container">
        <NavLink to="signup" className="text-link">
          Wine Party
        </NavLink>
      </div>
      <Row>
        <Col className="top_content" >
          <div
            style={{
              backgroundImage: `url(${background})`,
              height: "90vh",
              width: "auto",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="signUp-btn">
                <SignUpButtonModal />
            </div>
            <div className="logIn-btn">
                <LogInButtonModal />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SplashPage;
