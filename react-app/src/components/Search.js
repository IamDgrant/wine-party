import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeHost } from "../store/host";
import { Button, Input, message } from "antd";
// import "./styling/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(seeHost(search, sessionHostId)).then((res) => {
      if (res.Host === "Not found") {
        message.error(`User ${search} not found`);
      } else {
        message.success(`User ${search} added to Event!`);
      }
    });
  };

  return (
    <div className="search_bar">
      <form>
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={onSearch}
      >
        Add Host
      </button>
    </div>
  );
};

export default Search;
