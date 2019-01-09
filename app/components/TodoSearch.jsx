import React from 'react';

const TodoSearch = React.createClass({
  handleSearch: function () {
    const searchText = this.refs.searchText.value;
    const showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
        </div>
        <div className="container__header-completed">
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;