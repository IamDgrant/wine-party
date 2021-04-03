import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import "../components/styling/accountContentStyling.css";

const AccountContent = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const details = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="address-card"
      className="svg-inline--fa fa-address-card fa-w-18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="#850558"
        d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"
      ></path>
    </svg>
  );

  const notifications = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="envelope"
      class="svg-inline--fa fa-envelope fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#051885"
        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
      ></path>
    </svg>
  );

  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  return (
    <div className="account-content-container">
      <div className="account-title">Account</div>
      <div ClassName="account-info-name" style={{ fontWeight: "900" }}>
        {sessionUser.first_name} {sessionUser.last_name}
      </div>
      <div ClassName="account-info-email">{sessionUser.email}</div>
      <div ClassName="account-info-profile">
        <NavLink
          to="/profile"
          style={{ fontWeight: "400", color: "rgb(5, 133, 50)" }}
        >
          Your Profile
        </NavLink>
      </div>
      <div className="account-info">
        <Grid
        // className="account-grid"
          component="ul"
          columns={5}
          columnWidth={250}
          itemHeight={400}
          itemwidth={250}
          duration={0}
        >
          <div className="account-cards">
            <NavLink to="/details">
              <div className="account-card">
                <div className="account-icon">
                  <div className="account-icon-inner">{details}</div>
                </div>
                <div className="account-inner-card">
                  <Card
                    title="Personal Details >"
                    bordered={false}
                    style={{ width: 300 }}
                  >
                    <p>
                      Tell us about yourself so we can keep you up to date with
                      Wine Party.
                    </p>
                  </Card>
                </div>
              </div>
            </NavLink>
            <div className="account-card">
              <div className="account-icon">
                <div className="account-icon-inner">{notifications}</div>
              </div>
              <div className="account-inner-card">
                <Card
                  title="Notifications >"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>
                    Tell us about yourself so we can keep you to date with Wine
                    Party
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};
export default AccountContent;
