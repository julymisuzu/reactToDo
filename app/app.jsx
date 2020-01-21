import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
import Login from 'Login';

import * as actions from 'actions';
const store = require('configureStore').configure();

// import '../playground/firebase/index';

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// The TodoApp and every one of its children
// will have access to the store.
// The Provider allows that
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
