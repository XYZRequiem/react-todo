var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
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
          dispatch(actions.startToggleTodo(id, !completed));
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
};

export default connect()(Todo);
