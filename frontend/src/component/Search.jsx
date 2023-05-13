import React from 'react';
import { useLocation } from 'react-router-dom';
import AllPosts from "../component/AllBooks/AllPosts.jsx";

const Search = () => {
  const location = useLocation();
  const searchResults = location.state.searchResults;

  return (
    <div>
        <AllPosts data={searchResults} />
    </div>
  );
};

export default Search;