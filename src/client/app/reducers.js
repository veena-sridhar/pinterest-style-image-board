// import { SEARCH_STRING } from './actions/SearchBarString.js';

export const currentSearchString = function (state='', action) {
  switch (action.type) {
    case SEARCH_STRING:
      return action.data;
    default:
      return state;
  }
};