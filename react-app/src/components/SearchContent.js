import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { CSSGrid } from "react-stonecutter";
import { seeHost } from "../store/host";
import "../components/styling/searchContentStyling.css";
// import BrowseResults from "../components/BrowseResults"
// import SearchResult from "../components/SearchResults";
import { Select, Button, Modal } from "antd";
import "../components/styling/searchResults.css";

const SearchContent = () => {
  const sessionHosts = useSelector((state) => state.host.host);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // const [isLoaded, setIsLoaded] = useState(false);
  const [isSortedType, setIsSortedType] = useState("");
  const [isAboutShowing, setIsAboutShowing] = useState(undefined);
  const [isSelectedVisible, setIsSelectedVisible] = useState(false);

  // const [isAddEventShowing, setIsAddEventShowing] = useState(undefined);
  // const [isSommelier, setIsSommelier] = useState(false);
  // const [isMixologist, setIsMixologist] = useState(false);
  // const [isRedWine, setIsRedWine] = useState(false);
  // const [isWhiteWine, setIsWhiteWine] = useState(false);
  // const [isRoseWine, setIsRoseWine] = useState(false);

  // console.log(isSelectedVisible);

  useEffect(() => {
    const locationSplit = location.search.split("&");
    const query = locationSplit.map((chunk) => chunk.split("=")[1]);
    dispatch(seeHost(...query));
  }, [dispatch, location.search]);

  // const selectedHostId = isAboutShowing && isAboutShowing.id;

  // const sessionEvent = useSelector((state) => state.event.event);
  // const sessionHostId = useSelector((state) =>
  //   state.host.host ? state.host.host : null
  // );

  // useEffect((value) => {
  //   if (value.toString() === "Sommelier") {
  //     updateSommelier();
  //   }
  //   if (value.toString() === "Mixologist") {
  //     updateMixologist();
  //   }
  //   if (value.toString() === "red-wine") {
  //     updateRedWine();
  //   }
  //   if (value.toString() === "white-wine") {
  //     updateWhiteWine();
  //   }
  //   if (value.toString() === "rose-wine") {
  //     updateRoseWine();
  //   }
  //   // setIsSommelier(!isSommelier);
  //   // setIsMixologist(!isMixologist);
  //   // setIsRedWine(!isRedWine);
  //   // setIsWhiteWine(!isWhiteWine);
  //   // setIsRoseWine(!isRoseWine);
  // }, [dispatch, isSommelier, isMixologist, isRedWine, isWhiteWine, isRoseWine]);

  // const Grid = makeResponsive(measureItems(CSSGrid), {
  //   maxWidth: 1920,
  //   minPadding: 100,
  // });

  const sommelier = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="wine-glass"
      className="svg-inline--fa fa-wine-glass fa-w-9"
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
      className="svg-inline--fa fa-glass-martini fa-w-16"
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
      return 0;
    });

  const activateSort = sorted();

  // const updateFiltered = (e) => {
  //   if (e.target.value === "alpha-asc") {
  //     setIsSortedType("asc");
  //   } else if (e.target.value === "alpha-desc") {
  //     setIsSortedType("desc");
  //   }
  // };

  // const allPossibilities = () => {
  //   const numberOfPossibilities = 5;
  //   const boolArrCollection = [];

  //   for (let i = 0; i < 1 << numberOfPossibilities; i++) {
  //     const boolArr = [];
  //     //Increasing or decreasing depending on which direction
  //     //you want your array to represent the boolean
  //     for (let j = numberOfPossibilities - 1; j >= 0; j--) {
  //       boolArr.push(Boolean(i & (1 << j)));
  //     }

  //     // console.log(boolArr);
  //   }
  // };

  // const results = allPossibilities();

  const filteredSort = activateSort.filter((host) => {
    if (
      host.sommelier === true ||
      host.mixologist === true ||
      host.red === true ||
      host.white === true ||
      host.rose === true
    ) {
      return host;
    }
    //watch this to see if it broke anything!!!!!!!!
    return host;
  });

  // const hosts = activateSort.filter(host => host.sommelier.indexOf('4') !== -1);

  // const handleChange = (inputValue) => {
  //   activateSort.forEach((host) => {
  //     if (host.sommelier === true) {
  //       let somm = "Sommelier";
  //       // console.log(somm);
  //     } else if (host.mixologist === true) {
  //       let mix = "Mixologist";
  //     } else if (host.red === true) {
  //       let red = "red-wine";
  //     } else if (host.white === true) {
  //       let sowhitemm = "white-wine";
  //     } else if (host.rose === true) {
  //       let rose = "rose-wine";
  //     }
  //     // console.log(somm);
  //   });
    
  // };

  const { Option } = Select;

  const children = [];
  for (let i = 0; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  // const showSelectedHostsAdd = () => {
  //   // e.preventDefault();
  //   setIsAddResultsVisible(true);
  // };

  // const handleChange = (value) => {
  //   if (value.toString() === "Sommelier") {
  //     console.log("SOMM");
  //     setIsSommelier(true);
  //   } else if (value.toString() === "") {
  //     console.log("OFF");
  //     setIsSommelier(false);
  //   }
  //   if (value.toString() === "Mixologist") {
  //     console.log("MIX");
  //     setIsMixologist(true);
  //   } else if (value.toString() === "") {
  //     setIsMixologist(false);
  //   }
  //   // if (value.toString() === "red-wine") {
  //   //   console.log("RED");
  //   //   setIsRedWine(true);
  //   // } else if (value.toString() === "") {
  //   //   setIsRedWine(false);
  //   // }
  //   // if (value.toString() === "white-wine") {
  //   //   console.log("WHITE");
  //   //   setIsWhiteWine(true);
  //   // } else if (value.toString() === "") {
  //   //   setIsWhiteWine(false);
  //   // }
  //   // if (value.toString() === "rose-wine") {
  //   //   console.log("ROSE");
  //   //   setIsRoseWine(true);
  //   // } else if (value.toString() === "") {
  //   //   setIsRoseWine(false);
  //   // }
  // };

  // const currentHost = filteredSort.find(host => isAboutShowing === host.id);

  // const handleOk = () => {
  //   history.push(
  //     `/search?search=${search}&sommelier=${sommelier}&mixologist=${mixologist}`
  //   );
  // };

  const onHandleCancel = () => {
    setIsSelectedVisible(false);
  };

  const onHandleOk = () => {
    history.push("/events");
  };

  return (
    <div className="search-content-container">
      <div className="search-title">Hosts</div>
      <div className="search-info">
        <div className="results">
          <div className="host-for-you"></div>
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
                <option value="price-desc">Price - Highest to Lowest</option>
                <option value="rating-asc">Rating - Lowest to Highest</option>
                <option value="rating-desc">Rating - Highest to Lowest</option>
              </select>
            </div>
            {/* <div className="filter">
              <Select
                className="filter-dropdown"
                mode="multiple"
                placeholder="Filter by"
                // onChange={handleChange}
                // optionLabelProp="label"
              >
                <Option value="Sommelier" label="Sommelier">
                  <div className="demo-option-label-item">Sommelier 🍷</div>
                </Option>
                <Option value="Mixologist" label="Mixologist">
                  <div className="demo-option-label-item">Mixologist 🍸</div>
                </Option>
                <Option value="red-wine" label="red-wine">
                  <div className="demo-option-label-item">Red Wine Expert</div>
                </Option>
                <Option value="white-wine" label="white-wine">
                  <div className="demo-option-label-item">
                    White Wine Expert
                  </div>
                </Option>
                <Option value="rose-wine" label="rose-wine">
                  <div className="demo-option-label-item">Rosé Wine Expert</div>
                </Option>
              </Select>
            </div> */}
          </div>
          <div className="host-result-btns">
            <CSSGrid
              component="ul"
              columns={4}
              columnWidth={250}
              itemHeight={400}
              itemwidth={250}
              duration={250}
              easing="ease-out"
            >
              {filteredSort.map((host) => (
                <div key={host.id}>
                  <Button
                    style={{ padding: "0" }}
                    onClick={() => {
                      setIsAboutShowing(host);
                      setIsSelectedVisible(true);
                    }}
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
                  <Modal
                    width={900}
                    title="Add Host"
                    // onOk={handleOk}
                    // onCancel={onHandleCancel}
                    visible={isSelectedVisible}
                    footer={[
                      <Button
                        key="link"
                        type="primary"
                        onClick={onHandleCancel}
                      >
                        Cancel
                      </Button>,
                      <Button key="submit" type="primary" onClick={onHandleOk}>
                        Create Event and add Host
                      </Button>,
                    ]}
                  >
                    {isAboutShowing !== undefined && (
                      <div className="host-card-container">
                        <div className="host-image-container">
                          <img
                            src={isAboutShowing.profile_image}
                            alt="host profile"
                          />
                        </div>
                        <div className="host-about-container">
                          <div className="host-name-card">
                            Name: {isAboutShowing.first_name}{" "}
                            {isAboutShowing.last_name}
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
                  </Modal>
                </div>
              ))}
            </CSSGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
