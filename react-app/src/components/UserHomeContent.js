import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import { seeHost } from "../store/host";
import { Avatar, Modal, Button, message, notification } from "antd";
import "../components/styling/userHomeContentStyling.css";

const UserHomeContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      openNotification("topLeft");
    }, 1000);
  }, [dispatch]);

  const onSearch = async (e) => {
    e.preventDefault();
    history.push(
      `/search?search=${search}&sommelier=${sommelier}&mixologist=${mixologist}`
    );
  };

  const updateSearch = (e) => setSearch(e.target.value);
  const updateSommelier = () => setSommelier(!sommelier);
  const updateMixologist = () => setMixologist(!mixologist);
  //   const updateRedWine = () => setIsRedWine(!isRedWine);
  //   const updateWhiteWine = () => setIsWhiteWine(!isWhiteWine);
  //   const updateRoseWine = () => setIsRoseWine(!isRoseWine);

  const close = () => {
    // console.log(
    //   "Notification was closed. Either the close button was clicked or duration time elapsed."
    // );
  };

  const openNotification = (placement) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          history.push("/events", notification.close(key));
        }}
      >
        Add Event
      </Button>
    );
    notification.open({
      message: `WELCOME TO WINE PARTY ${sessionUser.first_name.toUpperCase()}!`,
      description: "Let's get started by adding a new event.",
      btn,
      key,
      duration: 5,
      placement: "topLeft",
      top: "125px",
      onClose: close,
    });
  };

  return (
    <div className="userHome-content-container">
      <div className="user-home-image-container">
        <div className="search-form">
          <form
            className="form"
            onSubmit={onSearch}
            style={{ border: "1px black solid" }}
          >
            <input
              value={search}
              onChange={updateSearch}
              type="search"
              className="search-input"
              placeholder="Search name, city, state, postal code..."
            />
            <button type="submit" className="search-button">
              <svg className="submit-button">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="svg-inline--fa fa-search fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </svg>
            </button>
            <div className="search-option">
              <div>
                <input
                  checked={sommelier}
                  onChange={updateSommelier}
                  name="type"
                  type="checkbox"
                  value="type-somm"
                  id="type-somm"
                />
                <label htmlFor="type-somm">
                  <span className="search-check">Sommelier</span>
                </label>
              </div>
              <div>
                <input
                  checked={mixologist}
                  onChange={updateMixologist}
                  name="type"
                  type="checkbox"
                  value="type-mix"
                  id="type-mix"
                />
                <label htmlFor="type-mix">
                  <span className="search-check">Mixologist</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="user-home-image-inner"></div>
      </div>
    </div>
  );
};
export default UserHomeContent;
