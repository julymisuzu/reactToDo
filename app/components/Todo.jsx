import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

// Actions
import * as actions from 'actions';

export class Todo extends React.Component {
  render() {
    const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className="container__content" onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <input type="checkbox" checked={completed}/>
        <label className={`${completed && 'completed'}`}>
          <span>{text}</span>
          <span className="container__todo-subtext">({renderDate()})</span>
        </label>
      </div>
    )
  }
};

export default connect()(Todo);
