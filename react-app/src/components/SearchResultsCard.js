import React from "react";
import Host from "../components/Host";
import toast from '../images/pexels-cottonbro-3171736.jpg'

const SearchResultCard = () => {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src={toast}
          alt="Friends cheering with glasses of wine"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Host Results</div>
          <Host />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SearchResultCard;
