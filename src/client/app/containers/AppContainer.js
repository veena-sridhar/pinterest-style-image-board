// Defines Redux functions, and maps state and dispatch to props

import { connect } from 'react-redux';
import * as search from '../actions/SearchBarString.js';
import * as toggle from '../actions/ToggleImage.js';
import App from '../components/App.jsx';

const mapStateToProps = function (state) {
  console.log('map state being called');
  const { search, toggle } = state;
  return {
    search,
    toggle
  };
};

const mapDispatchToProps = function (dispatch, currentProps) {
  console.log('map dispatch being called');
  return {
    updateSearch: function (string) {
      dispatch(search.searchString(string));
    },
    toggleOneImage: function (imageObj) {
      dispatch(toggle.toggleImage(imageObj));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
