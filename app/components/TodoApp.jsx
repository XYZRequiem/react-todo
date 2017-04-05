var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-title">
          <a href="#">Logout</a>
        </div>

        <h1 className="page-title">Todo APP</h1>

        <div className="row">
          <div className="column small-centered small-11 mediem-6 large-5">
            <div className="container">
              <TodoSearch/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column small-centered small-11 mediem-6 large-5">
            <div className="container">
              <TodoList/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column small-centered small-11 mediem-6 large-5">
            <div className="container">
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
