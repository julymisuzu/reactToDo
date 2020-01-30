import React from 'react';
import {connect} from 'react-redux';

// Actions
import * as actions from 'actions';

export class AddTodo extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <div className="medium-12 cell">
            <input type="text" ref="todoText" placeholder="What do you need to do?" />
          </div>
          <div className="medium-12 cell">
            <button className="button primary expanded">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
