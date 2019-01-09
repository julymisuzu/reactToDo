import React from 'react';

import TodoItem from 'TodoItem';

const TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message-not-found">Nothing To Do</p>
        );
      }

      return todos.map((todo) => {
        return (
          // Get all arguments of 'todo' and pass it to TodoItem
          <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />
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

module.exports = TodoList;