import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { login, createUser } from "../store/session";
import { seeHost } from "../store/host";
import SignUpForm from "./auth/forms/SignUpForm";
import LoginForm from "./auth/forms/LoginForm";
import { Menu, Dropdown, Button, Modal } from "antd";
import { ReactComponent as CloseMenu } from "../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import img_placeholder from "../assets/images/empty-profile-picture-png.png";
import "../components/styling/userMainHeaderStyling.css";
import "../components/styling/buttonStyling.css";

const LandingHeader = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsisSignUpModalVisible] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [click, setClick] = useState(false);
  //   const [search, setSearch] = useState("");
  //   const [sommelier, setSommelier] = useState(false);
  //   const [mixologist, setMixologist] = useState(false);
  //   const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    // e.preventDefault();
    let newErrors = [];
    if (signUpPassword === repeatPassword) {
      dispatch(
        createUser({
          first_name,
          last_name,
          city,
          state,
          postal_code,
          signUpEmail,
          signUpPassword,
          repeatPassword,
        })
      ).catch(async (res) => {
        console.log(res);
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
        }
      });
    }
  };

  const onSignIn = async (e) => {
    // e.preventDefault();
    const user = await dispatch(login(signInEmail, signInPassword));
    if (signInEmail.length === 0) {
      alert("You must provide valid email address");
    }
    console.log(user);
    // if (user.ok) history.push("/home");
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const signInHandleOk = () => {
    onSignIn();
    setIsSignInModalVisible(false);
  };

  const signInHandleCancel = () => {
    setIsSignInModalVisible(false);
  };

  const showSignUpModal = () => {
    setIsisSignUpModalVisible(true);
  };

  const signUpHandleOk = () => {
    onSignUp();
    setIsisSignUpModalVisible(false);
  };

  const signUpHandleCancel = () => {
    setIsisSignUpModalVisible(false);
  };

  //   const onSearch = async (e) => {
  //     e.preventDefault();
  //     dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
  //       (res) => {
  //         if (res.Host === "Not found") {
  //           message.error(`User ${search} not found`);
  //         } else {
  //           history.push("/search");
  //           // message.success(`User ${search} added to Event!`);
  //         }
  //         // if (res.hosts) history.push("/search");
  //       }
  //     );
  //   };

  //   const updateSearch = (e) => setSearch(e.target.value);
  //   const updateSommelier = () => setSommelier(!sommelier);
  //   const updateMixologist = () => setMixologist(!mixologist);

  //   const clickAbout = () => {
  //     const anchor = document.querySelector("#Events");
  //     anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  //   };

  //   const clickTasting = () => {
  //     const anchor = document.querySelector("#Events");
  //     anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  //   };

  //   const clickStories = () => {
  //     const anchor = document.querySelector("#Events");
  //     anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  //   };
  //   const clickNews = () => {
  //     const anchor = document.querySelector("#Events");
  //     anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  //   };

  // useEffect(() => {
  //   dispatch(browseAllHost());
  // }, [dispatch]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button
          className="antd-btn"
          htmlType="submit"
          type="link"
          size="small"
          ghost="true"
          onClick={showSignInModal}
        >
          Log in
        </Button>
        <Modal
          okText="Sign in"
          title="Sign in"
          visible={isSignInModalVisible}
          onOk={signInHandleOk}
          onCancel={signInHandleCancel}
        >
          <LoginForm
            signInEmail={signInEmail}
            setSignInEmail={setSignInEmail}
            signInPassword={signInPassword}
            setSignInPassword={setSignInPassword}
            errors={errors}
          />
        </Modal>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="antd-btn"
          type="link"
          htmlType="submit"
          size="small"
          ghost="true"
          onClick={showSignUpModal}
        >
          Sign up
        </Button>
        <Modal
          title="Sign up"
          okText="Sign up"
          visible={isSignUpModalVisible}
          onOk={signUpHandleOk}
          onCancel={signUpHandleCancel}
        >
          <SignUpForm
            first_name={first_name}
            setFirstName={setFirstName}
            last_name={last_name}
            setLastName={setLastName}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            postal_code={postal_code}
            setPostalCode={setPostalCode}
            signUpEmail={signUpEmail}
            setSignUpEmail={setSignUpEmail}
            signUpPassword={signUpPassword}
            setSignUpPassword={setSignUpPassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
            errors={errors}
          />
        </Modal>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/help">
          <Button className="antd-btn" type="link">
            Help
          </Button>
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="user-main-header-container">
      <div className="user-main-logo-container">Wine Party</div>
      <div className="navBar">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink exact to="/about">
              <Button
                type="text"
                className="menu userNavBar-btn"
              >
                About
              </Button>
            </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink exact to="tasting">
              <Button
                type="text"
                className="menu userNavBar-btn"
              >
                Virtual Tasting
              </Button>
            </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink exact to="/stories">
              <Button
                type="text"
                className="menu userNavBar-btn"
              >
                Wine Stories
              </Button>
            </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink exact to="/news">
              <Button
                type="text"
                className="menu userNavBar-btn"
              >
                News
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown-container">
        <div className="dropdown-inner-container">
          <Dropdown
            className="antd-drop"
            style={{ width: "25vw" }}
            overlay={userMenu}
            trigger={["click"]}
          >
            <div className="button-container">
              <Button
                className="profile-button"
                shape="circle"
                type="primary"
                onClick={(e) => e.preventDefault()}
              >
                <div className="inner-img-container">
                  <img
                    src={img_placeholder}
                    alt="Avatar"
                    className="small-profile-pic"
                  ></img>
                </div>
              </Button>
            </div>
          </Dropdown>
        </div>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default LandingHeader;
