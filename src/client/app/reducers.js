import { SEARCH_STRING } from './actions/SearchBarString';

export const search = function (state='', action) {
  switch (action.type) {
    case SEARCH_STRING:
      return action.data;
    default:
      return state;
  }
};
