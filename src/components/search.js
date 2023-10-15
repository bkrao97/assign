import React from "react";

function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-100 bg-white h-8 px-5 pr-10 rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

export default Search;
