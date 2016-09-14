import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { search } from '../reducers.js';
import SearchBar from './SearchBarComponent.jsx';

let store = createStore(
  combineReducers({
    search
  })
);

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <SearchBar/>
      </div>
    );
  }
}

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));