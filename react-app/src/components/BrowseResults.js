import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { browseAllHost } from "../store/host";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import { Select, Button } from "antd";
import HostCard from "../components/HostCard";
import "../components/styling/browseHostStyling.css";
import "../components/styling/hostCard.css";

const BrowseResults = ({ isAboutShowing, setIsAboutShowing }) => {
  const sessionHosts = useSelector((state) => state.host.host);
  const dispatch = useDispatch();

  // const [isAboutShowing, setIsAboutShowing] = useState(undefined);

  // const [isHostDetailsShowing, setIsHostDetailsShowing] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [isSortedType, setIsSortedType] = useState("");
  // const [isSommelier, setIsSommelier] = useState(false);
  // const [isMixologist, setIsMixologist] = useState(false);
  // const [isRedWine, setIsRedWine] = useState(false);
  // const [isWhiteWine, setIsWhiteWine] = useState(false);
  // const [isRoseWine, setIsRoseWine] = useState(false);

  useEffect(() => {
    dispatch(browseAllHost());
  }, [dispatch]);

  // const Grid = makeResponsive(measureItems(CSSGrid), {
  //   maxWidth: 1920,
  //   minPadding: 100,
  // });

  // const showAbout = () => {
  //   setIsAboutShowing(true);
  // };
  // const hideAbout = () => {
  //   setIsAboutShowing(false);
  // };

  const sommelier = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="wine-glass"
      class="svg-inline--fa fa-wine-glass fa-w-9"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 512"
    >
      <path
        fill="#ffffff"
        d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40z"
      ></path>
    </svg>
  );

  const mixologist = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="glass-martini"
      class="svg-inline--fa fa-glass-martini fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6z"
      ></path>
    </svg>
  );

  // const addBtn = (
  //   <svg
  //     aria-hidden="true"
  //     focusable="false"
  //     data-prefix="far"
  //     data-icon="plus-square"
  //     class="svg-inline--fa fa-plus-square fa-w-14"
  //     role="img"
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 448 512"
  //   >
  //     <path
  //       fill="#ffffff"
  //       d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
  //     ></path>
  //   </svg>
  // );

  // const sommelier2 = (
  //   <svg
  //     aria-hidden="true"
  //     focusable="false"
  //     data-prefix="fas"
  //     data-icon="wine-glass"
  //     className="svg-inline--fa fa-wine-glass fa-w-9"
  //     role="img"
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 288 512"
  //   >
  //     <path
  //       fill="#ffffff"
  //       d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40z"
  //     ></path>
  //   </svg>
  // );

  // const mixologist2 = (
  //   <svg
  //     aria-hidden="true"
  //     focusable="false"
  //     data-prefix="fas"
  //     data-icon="glass-martini"
  //     className="svg-inline--fa fa-glass-martini fa-w-16"
  //     role="img"
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 512 512"
  //   >
  //     <path
  //       fill="#ffffff"
  //       d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6z"
  //     ></path>
  //   </svg>
  // );

  const updateSorted = (e) => {
    if (e.target.value === "alpha-asc") {
      setIsSortedType("asc");
    } else if (e.target.value === "alpha-desc") {
      setIsSortedType("desc");
    }
  };

  const hosts = sessionHosts.map((host) => host);

  const sorted = () =>
    hosts.sort((name1, name2) => {
      if (isSortedType === "asc") {
        return name1.first_name > name2.first_name ? 1 : -1;
      } else if (isSortedType === "desc") {
        return name1.first_name < name2.first_name ? 1 : -1;
      }
    });

  const activateSort = sorted();

  //   for( let i = 0; i < activateSort.length; i++){

  //     if ( activateSort[i].sommelier === true) {
  //       activateSort.splice(i, 1);
  //         i--;
  //     }
  // }

  // const hostTypeFilter = activatedSort.filter((type) => {

  // })

  const filteredSort = activateSort.filter((host) => {
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === false &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === false &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === false &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === false &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === true &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === true &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === true &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === false &&
      host.red === true &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === false &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === false &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === false &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === false &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === true &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === true &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === true &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === false &&
      host.mixologist === true &&
      host.red === true &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === false &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === false &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === false &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === false &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === true &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === true &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === true &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === false &&
      host.red === true &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === false &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === false &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === false &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === false &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === true &&
      host.white === false &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === true &&
      host.white === false &&
      host.rose === true
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === true &&
      host.white === true &&
      host.rose === false
    ) {
      return host;
    }
    if (
      host.sommelier === true &&
      host.mixologist === true &&
      host.red === true &&
      host.white === true &&
      host.rose === true
    ) {
      return host;
    }
  });

  const { Option } = Select;

  const children = [];
  for (let i = 0; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const handleChange = (value) => {
    console.log(value);
    // if (value.toString() === "Sommelier") {
    // } else if (value.toString() === "") {
    //   for (let i = 0; i < selectedOptions.length; i++) {
    //     if (selectedOptions[i] === "Sommelier") {
    //       selectedOptions.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
    // if (value.toString() === "Mixologist") {
    //   selectedOptions.push("Mixologist");
    // } else if (value.toString() === "") {
    //   for (let i = 0; i < selectedOptions.length; i++) {
    //     if (selectedOptions[i] === "Mixologist") {
    //       selectedOptions.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
    // if (value.toString() === "red-wine") {
    //   selectedOptions.push("red-wine");
    // } else if (value.toString() === "") {
    //   for (let i = 0; i < selectedOptions.length; i++) {
    //     if (selectedOptions[i] === "red-wine") {
    //       selectedOptions.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
    // if (value.toString() === "white-wine") {
    //   selectedOptions.push("white-wine");
    // } else if (value.toString() === "") {
    //   for (let i = 0; i < selectedOptions.length; i++) {
    //     if (selectedOptions[i] === "white-wine") {
    //       selectedOptions.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
    // if (value.toString() === "rose-wine") {
    //   selectedOptions.push("rose-wine");
    // } else if (value.toString() === "") {
    //   for (let i = 0; i < selectedOptions.length; i++) {
    //     if (selectedOptions[i] === "rose-wine") {
    //       selectedOptions.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
  };

  const currentHost = filteredSort.find(host => isAboutShowing === host.id);
  // console.log(currentHost.id);
  return (
    <>
      <div className="browse-content-container">
        <div className="search-info">
          <div className="results">
            {!isAboutShowing ? (
              <div className="sort-filter">
                <div className="sort">
                  <select
                    className="select-dropdown"
                    name="select"
                    placeholder="Sort by"
                    onChange={updateSorted}
                  >
                    <option value="sort by">Sort by</option>
                    <option value="alpha-asc">Alphabet - A-Z</option>
                    <option value="alpha-desc">Alphabet - Z-A</option>
                    <option value="price-asc">Distance - Closest</option>
                    <option value="price-asc">Distance - Furthest</option>
                    <option value="price-asc">Price - Lowest to Highest</option>
                    <option value="price-desc">
                      Price - Highest to Lowest
                    </option>
                    <option value="rating-asc">
                      Rating - Lowest to Highest
                    </option>
                    <option value="rating-desc">
                      Rating - Highest to Lowest
                    </option>
                  </select>
                </div>
                <div className="filter">
                  <Select
                    className="filter-dropdown"
                    mode="multiple"
                    placeholder="Filter by"
                    onChange={handleChange}
                    // optionLabelProp="label"
                  >
                    <Option value="Sommelier" label="Sommelier">
                      <div className="demo-option-label-item">Sommelier 🍷</div>
                    </Option>
                    <Option value="Mixologist" label="Mixologist">
                      <div className="demo-option-label-item">
                        Mixologist 🍸
                      </div>
                    </Option>
                    <Option value="red-wine" label="red-wine">
                      <div className="demo-option-label-item">
                        Red Wine Expert
                      </div>
                    </Option>
                    <Option value="white-wine" label="white-wine">
                      <div className="demo-option-label-item">
                        White Wine Expert
                      </div>
                    </Option>
                    <Option value="rose-wine" label="rose-wine">
                      <div className="demo-option-label-item">
                        Rosé Wine Expert
                      </div>
                    </Option>
                  </Select>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* <div className="host-for-you"></div> */}

            <div className="host-result-btns">
              {/* <Divider orientation="left">Horizontal</Divider> */}
              {/* <Row gutter={16}>
              {filteredSort.map((host) => (
                <Col key={host.id} className="gutter-row" span={6}>
                  <div className="hosts">
                    <div className="add-host">
                      <button>{addBtn}</button>
                    </div>
                    <div className="host-name-type">
                      <div className="host-name">
                        {host.first_name} {host.last_name}
                      </div>
                      <div className="somm">
                        {host.sommelier === true ? sommelier : null}
                      </div>
                      <div className="mix">
                        {host.mixologist === true ? mixologist : null}
                      </div>
                    </div>
                    <div className="host-city-state">
                      {host.city}, {host.state}
                    </div>
                  </div>
                </Col>
              ))}
            </Row> */}

              <CSSGrid
                component="ul"
                columns={4}
                columnWidth={250}
                itemHeight={400}
                itemwidth={250}
                duration={250}
                easing="ease-out"
              >
                {!isAboutShowing ? (
                  filteredSort.map((host) => (
                    <div key={host.id}>
                      <Button
                        style={{ padding: "0" }}
                        onClick={() => setIsAboutShowing(host)}
                      >
                        <div className="card">
                          <div
                            className="host-card"
                            style={{
                              backgroundImage: `url(${host.profile_image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <div className="hosts">
                              {/* <div className="add-host">
                                <button>{addBtn}</button>
                              </div> */}
                              <div className="host-name-type">
                                <div className="host-name">
                                  {host.first_name} {host.last_name}
                                </div>
                                <div className="somm">
                                  {host.sommelier === true ? sommelier : null}
                                </div>
                                <div className="mix">
                                  {host.mixologist === true ? mixologist : null}
                                </div>
                              </div>
                              <div className="host-city-state">
                                {host.city}, {host.state}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="host-card-container">
                    <div className="host-image-container">
                      <img src={isAboutShowing.profile_image} alt="host profile" />
                    </div>
                    <div className="host-about-container">
                      <div className="host-name-card">
                        Name: {isAboutShowing.first_name} {isAboutShowing.last_name}
                      </div>

                      {isAboutShowing.sommelier === true &&
                      isAboutShowing.mixologist === true ? (
                        <div className="host-type-card">
                          Host Type: Sommelier and Mixologist
                        </div>
                      ) : isAboutShowing.sommelier === true ? (
                        <div className="host-type-card">
                          Host Type: Sommelier
                        </div>
                      ) : (
                        <div className="host-type-card">
                          Host Type: Mixologist
                        </div>
                      )}
                      <div className="host-about-card">
                        About: {isAboutShowing.about}
                      </div>
                      <div className="host-specialty-card"></div>
                    </div>
                  </div>
                )}
              </CSSGrid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseResults;
