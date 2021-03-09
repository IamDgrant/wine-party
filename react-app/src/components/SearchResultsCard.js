import React from "react";
import Host from "../components/Host";
import toast from '../images/pexels-cottonbro-3171736.jpg'

const SearchResultCard = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={toast}
          alt="Friends cheering with glasses of wine"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Host Results</div>
          <Host />
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
};

export default SearchResultCard;
