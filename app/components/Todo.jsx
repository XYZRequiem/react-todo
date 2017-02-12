var moment = require('moment');
var React = require('react');

var Todo = React.createClass({
  onToggle: function (id) {
    this.props.onToggle(id);
  },
  render: function () {
    var {text, id, completed, createdAt, completedAt, onToggle} = this.props;
var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY, HH:mm');
    };
    return (
      <div className={todoClassName} onClick={() => {
          onToggle(id);
        }}>
        <div className="column small-1">
          <input type="checkbox" checked={completed}/>
        </div>
        <div >
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>



      </div>
    )
  }
});

module.exports = Todo;
