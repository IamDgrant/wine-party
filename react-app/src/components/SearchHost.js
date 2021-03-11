import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowHostModal from "../components/auth/modals/ShowHostModal"
import { seeHost } from "../store/host";
import { message } from "antd";
import "./styling/checkboxStyle.css";
import "./styling/searchBar.css";

const Search = () => {  
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );
  const updateSommelier = () => setSommelier(!sommelier);
  const updateMixologist = () => setMixologist(!mixologist);

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
      (res) => {
        if (res.Host === "Not found") {
          message.error(`User ${search} not found`);
        }
        // else {
        //   message.success(`User ${search} added to Event!`);
        // }
      }
    );
  };

  // const UpdateSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  return (
    <div className="search_bar">
      <form>
        <input
          className="searchInput w-full border-2"
          placeholder="Search here..."
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <label className="container">
          Sommelier
          <input
            className="checkbox"
            type="checkbox"
            name="a"
            checked={sommelier}
            onChange={updateSommelier}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Mixologist
          <input
            className="checkbox"
            type="checkbox"
            name="b"
            checked={mixologist}
            onChange={updateMixologist}
            //   disabled={true}
          />
          <span className="checkmark"></span>
        </label>
        {/* <Checkbox /> */}
        {/* <button className="reserve-btn" onClick={onSearch}> */}
          <ShowHostModal />
        {/* </button> */}
      </form>
      {/* <label className="container">
        Sommelier
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Mixologist
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label> */}
    </div>
  );
};

export default Search;
