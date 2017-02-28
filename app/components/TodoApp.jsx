var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddedTodo: function (newTodo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTodo,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo APP</h1>

        <div className="row">
          <div className="column small-centered small-11 mediem-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
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
              <AddTodo onAddedTodo={this.handleAddedTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
