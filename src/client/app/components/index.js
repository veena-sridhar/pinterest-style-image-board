// Initialize the Redux store, and render the app

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { search, toggle } from '../reducers.js';
import App from './App.jsx';
import AppContainer from '../containers/AppContainer.js';

const store = createStore(
  combineReducers({
    search,
    toggle
  })
);

render(<Provider store={store}><App component={AppContainer}/></Provider>, document.getElementById('app'));