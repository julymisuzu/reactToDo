import React from 'react';

const AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
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
});

module.exports = AddTodo;