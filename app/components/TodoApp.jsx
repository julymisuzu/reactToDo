import React from 'react';
import * as Redux from 'react-redux';

// Components
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

// Actions
import * as actions from 'actions';

export class TodoApp extends React.Component {
  constructor() {
    super();

    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(e) {
    e.preventDefault();

    const {dispatch} = this.props;

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div>

        <div className='page-actions'>
          <a href='#' onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="grid-x">
          <div className="cell medium-6 large-4 large-offset-4 medium-offset-3">
            <div className="grid-container container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(TodoApp);
