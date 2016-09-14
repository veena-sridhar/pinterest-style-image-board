// Defines Redux functions, and maps state and dispatch to props

import { connect } from 'react-redux';
import * as search from '../actions/SearchBarString.js';
import * as toggle from '../actions/ToggleImage.js';
import App from '../components/App.jsx';

const mapStateToProps = function (state) {
  const { search, toggle } = state;
  return {
    search,
    toggle
  };
};

const mapDispatchToProps = function (dispatch, currentProps) {
  return {
    updateSearch: function (string) {
      dispatch(search.searchString(string));
    },
    toggleOneImage: function (imageObj) {
      dispatch(toggle.toggleImage(imageObj));
    }
  };
};


//Connect both functions to the App parent component

export default connect(mapStateToProps, mapDispatchToProps)(App);
