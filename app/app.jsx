import React from 'react';
import ReactDOM from 'react-dom';
const {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

const actions = require('actions');
const reducers = require('reducers');
const store = require('configureStore').configure();

store.subscribe(() => {
  const state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// The TodoApp and every one of its children
// will have access to the store.
// The Provider allows that
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);