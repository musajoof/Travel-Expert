import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Hotels');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, category);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-200 dark:bg-gray-900 dark:text-gray-100 ">
      <form onSubmit={handleSearch} className="flex items-center gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="px-4 py-2 text-slate-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none text-slate-400"
        >
          <option value="Hotels" className=''>Hotels</option>
          <option value="Cruises">Cruises</option>
          <option value="Tours">Tours</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
