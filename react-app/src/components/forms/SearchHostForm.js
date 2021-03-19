import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeHost } from "../../store/host";
import { message } from "antd";
import "../styling/checkboxStyle.css";
import "../styling/searchBar.css";

const SearchForm = ({
  search,
  setSearch,
  sommelier,
  setSommelier,
  mixologist,
  setMixologist,
}) => {

  const dispatch = useDispatch();
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

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


  const updateSearch = (e) => setSearch(e.target.value);
  const updateSommelier = () => setSommelier(!sommelier);
  const updateMixologist = () => setMixologist(!mixologist);

  return (
    <div className="search_bar">
      <form onSubmit={onSearch}>
        <input
          className="searchInput w-full border-2"
          placeholder="Search here..."
          value={search}
          type="text"
          onChange={updateSearch}
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
          />
          <span className="checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
