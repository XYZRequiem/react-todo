import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className="page-title">
          <a href="#" onClick={this.onLogout}>Logout</a>
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

export default Redux.connect()(TodoApp);
