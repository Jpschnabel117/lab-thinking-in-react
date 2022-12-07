import { useState } from 'react';

function SearchBar(props) {
  

  return <input type="text" name='search' value={props.searchTerm} onChange={(e) => {
    props.setSearchTerm(e.target.value)
    props.search(e.target.value)
  }}/>;
}

export default SearchBar;
