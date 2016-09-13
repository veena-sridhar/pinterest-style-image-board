import React from 'react';

export default class SearchBar extends React.Component {
  render () {
    return (
      <div className="searchBarContainer">
        <form>
          <input placeholder="Search by theme" name="search" className="searchBar"/>
          <button className="searchButton">Search</button>
        </form>
      </div>
    );
  }
}