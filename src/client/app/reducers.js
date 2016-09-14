// Container file for all reducers

import { SEARCH_STRING } from './actions/SearchBarString';
import { TOGGLE_IMAGE } from './actions/ToggleImage.js';


// Reducer to handle anything entered into the search bar

export const search = function (state='', action) {
  switch (action.type) {
    case SEARCH_STRING:
      var caseControl = action.data.toLowerCase();
      return caseControl;
    default:
      return state;
  }
};


//Reducer to handle any clicks on images

export const toggle = function (state={}, action) {
  switch (action.type) {
    case TOGGLE_IMAGE:
      return Object.assign({}, state, {
        toggle: !state.toggle
      });
    default:
      return state;
  }
};
