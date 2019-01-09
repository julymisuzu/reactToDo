import React from 'react';
import Uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    // const newList = this.state.todos;
    // let maxItem = newList.reduce((prevValue, value) => {
    //   if(prevValue.id > value.id) {
    //     return prevValue;
    //   } else if (prevValue.id < value.id) {
    //     return value;
    //   }
    // });
    // let newId = maxItem.id + 1;

    // newList.push({id: newId, text: text});
    // this.setState({
    //   todos: newList
    // });

    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        item.completedAt = item.completed ? moment().unix() : undefined;
      }
      return item;
    });

    this.setState({
      todos: updatedTodos
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="grid-x">
          <div className="cell medium-6 large-4 large-offset-4 medium-offset-3">
            <div className="grid-container container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
