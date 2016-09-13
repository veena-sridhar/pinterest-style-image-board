export const SEARCH_STRING = 'SEARCH_STRING';

export const searchString = function (string) {
  return {
    type: SEARCH_STRING,
    string
  };
};