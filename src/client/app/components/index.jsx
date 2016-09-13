import React from 'react';
import {render} from 'react-dom';
import SearchBar from './SearchBarComponent.jsx';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware} from 'redux';
import { searchString } from '../reducers.js';

// let store = createStore(
//   combineReducers({
//     searchString
//   })
// );

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <SearchBar/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));