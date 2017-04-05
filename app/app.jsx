var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var redux = require('redux');

var TodoAPI = require('TodoAPI');

var actions = require('actions');
var store = require('configureStore').configure();

import Login from 'Login';
import TodoApp from 'TodoAPp';

store.subscribe(() => {
  var state = store.getState();

  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundations
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router hashHistory={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
          <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
