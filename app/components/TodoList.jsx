import React from 'react';
const {connect} = require('react-redux');

import TodoItem from 'TodoItem';

import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message-not-found">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          // Get all arguments of 'todo' and pass it to TodoItem
          <TodoItem key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);