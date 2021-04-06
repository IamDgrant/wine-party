import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import { browseAllHost } from "../store/host";
import SearchForm from "../components/auth/forms/SearchHostForm";
import "../components/styling/searchResults.css";
import { Modal, Button, Select } from "antd";

// import { message } from "antd";

const SearchResult = () => {
   const [isLoaded, setIsLoaded] = useState(false);
  const [isSortedType, setIsSortedType] = useState("");
  const [isSommelier, setIsSommelier] = useState(false);
  const [isMixologist, setIsMixologist] = useState(false);
  const [isRedWine, setIsRedWine] = useState(false);
  const [isWhiteWine, setIsWhiteWine] = useState(false);
  const [isRoseWine, setIsRoseWine] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(browseAllHost());
  }, [dispatch]);

  

  const sessionHosts = useSelector((state) => state.host.host);
  const hosts = sessionHosts && sessionHosts.map((host) => host);

  if (!isLoaded) {
    return null;
  }

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

  // const backClick = () => {
  //   history.push("/home");
  // };

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

  const addBtn = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="plus-square"
      className="svg-inline--fa fa-plus-square fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#ffffff"
        d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
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

  const sorted = () =>
    hosts.sort((name1, name2) => {
      if (isSortedType === "asc") {
        return name1.first_name > name2.first_name ? 1 : -1;
      } else if (isSortedType === "desc") {
        return name1.first_name < name2.first_name ? 1 : -1;
      }
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
    // console.log(sorted);
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

  // const showFilterModal = (e) => {
  //   // e.preventDefault();
  //   // setIsFilterModalVisible(true);
  // };

  // const filterHandleOk = () => {
  //   sorted()
  // };

  const updateSommelier = () => setIsSommelier(!isSommelier);
  const updateMixologist = () => setIsMixologist(!isMixologist);
  const updateRedWine = () => setIsRedWine(!isRedWine);
  const updateWhiteWine = () => setIsWhiteWine(!isWhiteWine);
  const updateRoseWine = () => setIsRoseWine(!isRoseWine);

  // console.log(isSommelier);
  // console.log(isMixologist);
  // console.log(isRedWine);
  // console.log(isWhiteWine);
  // console.log(isRoseWine);

  // const filterHandleCancel = () => {
  //   setIsFilterModalVisible(false);
  // };

  const { Option } = Select;

  const children = [];
  for (let i = 0; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const handleChange = (value) => {
    if (value.toString() === "Sommelier") {
      // console.log("SOMM");
      setIsSommelier(true);
    } else if (value.toString() === "") {
      console.log("OFF");
      setIsSommelier(false);
    }
    if (value.toString() === "Mixologist") {
      console.log("MIX");
      setIsMixologist(true);
    } else if (value.toString() === "") {
      setIsMixologist(false);
    }
    if (value.toString() === "red-wine") {
      console.log("RED");
      setIsRedWine(true);
    } else if (value.toString() === "") {
      setIsRedWine(false);
    }
    if (value.toString() === "white-wine") {
      console.log("WHITE");
      setIsWhiteWine(true);
    } else if (value.toString() === "") {
      setIsWhiteWine(false);
    }
    if (value.toString() === "rose-wine") {
      console.log("ROSE");
      setIsRoseWine(true);
    } else if (value.toString() === "") {
      setIsRoseWine(false);
    }
  };

  return (
    <>
      <div className="results">
        <div
          className="host-near"
          // style={{
          //   color: "#0e1c36",
          //   fontFamily: "Bebas Neue",
          //   fontSize: "3.5vh",
          // }}
        >
          {/* <div className="back-arrow">
            <button onClick={backClick}>{backButton}</button>
          </div> */}
          {/* <div className="title">Hosts near you</div> */}
        </div>
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
              <option value="price-asc">Price - Lowest to Highest</option>
              <option value="price-desc">Price - Highest to Lowest</option>
              <option value="rating-asc">Rating - Lowest to Highest</option>
              <option value="rating-desc">Rating - Highest to Lowest</option>
            </select>
          </div>
          <div className="filter">
            <Select
              className="filter-dropdown"
              mode="multiple"
              placeholder="Filter by"
              // style={{ width: "300px" }}
              // defaultValue={["china"]}
              onChange={handleChange}
              optionLabelProp="label"
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
                <div className="demo-option-label-item">White Wine Expert</div>
              </Option>
              <Option value="rose-wine" label="rose-wine">
                <div className="demo-option-label-item">Rose Wine Expert</div>
              </Option>
            </Select>
            {/* <Button
              className="filter-btn"
              htmlType="submit"
              type="dashed"
              size="small"
              ghost="true"
              onClick={showFilterModal}
            >
              Filter by
            </Button>
            <Modal
              style={{ left: 300,  display: "flex", width: "100%" }}
              okText="Save"
              visible={isFilterModalVisible}
              onOk={filterHandleOk}
              onCancel={filterHandleCancel}
            >
              <SearchForm />
            </Modal> */}
            {/* <input
            className="filter-field"
              // onChange={filterInput}
              // style={{ width: "100%", height: "27px" }}
              placeholder="Filter by"
              type="text"
            /> */}
          </div>
        </div>
        <div className="host-result-btns">
          <CSSGrid
            component="ul"
            columns={4}
            columnWidth={250}
            itemHeight={400}
            itemWidth={250}
            duration={250}
            easing="ease-out"
          >
            {sessionHosts &&
              sessionHosts.length &&
              filteredSort.map((host) => (
                <div className="card" key={host.id}>
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
                      <div className="add-host">
                        <button>{addBtn}</button>
                      </div>
                      <div className="host-name-type">
                        <div className="host-name">
                          {host.first_name} {host.last_name}
                        </div>
                        <div className="somm">
                          {host.sommelier === true ? sommelier : null}{" "}
                        </div>
                        <div className="mix">
                          {host.mixologist === true ? mixologist : null}{" "}
                        </div>
                      </div>

                      <div className="host-city-state">
                        {host.city}, {host.state}
                      </div>
                      {/* <div className="host-type"></div> */}
                      {/* <div className="host-rating">
                          <Rate disabled defaultValue={4} />
                        </div> */}
                    </div>
                  </div>
                </div>
              ))}
          </CSSGrid>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
