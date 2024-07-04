import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input
        className="text-white rounded-l-md bg-zinc-700 px-2 py-1"
        type="search"
        placeholder="Rechercher..."
      />
      <button
        className="bg-gray-300 rounded-r-md px-2 py-1 hover:bg-blue-500"
      >
        OK
      </button>
    </div>
  );
};

export default SearchBar;