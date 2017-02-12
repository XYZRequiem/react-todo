var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    var newTodo = this.refs.newTodo.value;

    if (typeof(newTodo) === 'string' && newTodo.length > 0) {
      this.refs.newTodo.value = '';
      this.props.onAddedTodo(newTodo);
    } else {
      this.refs.newTodo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="newTodo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
