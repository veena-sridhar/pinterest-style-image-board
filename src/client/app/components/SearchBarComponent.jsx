// Defines functions and classes for the search bar

import React from 'react';

export default class SearchBar extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="searchBarContainer">
        <form className="inputForm">
          <input placeholder="Search by theme" name="search" className="searchBar"/>
          <button className="searchButton">Search</button>
        </form>
      </div>
    );
  }
}