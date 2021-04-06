import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/styling/searchContentStyling.css";
// import BrowseResults from "../components/BrowseResults"
import SearchResults from "../components/SearchResults"


const SearchContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="search-content-container">
      <div className="search-title">Hosts</div>  
      {/* <div ClassName="search-info-name" style={{ fontWeight: "900" }}>
        {sessionUser.first_name} {sessionUser.last_name}
      </div> */}
      {/* <div className="search-info-email">{sessionUser.email}</div> */}
      <div className="search-info">
          <SearchResults />
      </div>
    </div>
  );
};
export default SearchContent;
