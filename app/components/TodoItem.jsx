import React from 'react';
import moment from 'moment';

const TodoItem = React.createClass({
  render: function () {
    const {completed, id, text, createdAt, completedAt} = this.props;
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ hh:mm a');
    };

    return (
      <div className='container__content' onClick={() => { this.props.onToggle(id); }}>
        <input type="checkbox" checked={completed} />
        <label className={`${completed && 'completed'}`}>
          <span>{text}</span>
          <span className="container__todo-subtext">({renderDate()})</span>
        </label>
      </div>
    )
  }
});

module.exports = TodoItem;