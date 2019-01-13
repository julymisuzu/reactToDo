import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';
import {Provider} from 'react-redux';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoItem, {TodoItem} from 'TodoItem';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one TodoItem component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        createdAt: 123455,
        completedAt: undefined
      },
      {
        id: 2,
        text: 'Check mail',
        completed: false,
        createdAt: 123455,
        completedAt: undefined
      }
    ];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ConnectedTodoList/>
    </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message-not-found').length).toBe(1);
  });
});