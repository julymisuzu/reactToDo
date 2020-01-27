import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
const store = require('configureStore').configure();
import firebase from 'firebase';
import router from 'app/router/';

// import '../playground/firebase/index';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// The TodoApp and every one of its children
// will have access to the store.
// The Provider allows that
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
