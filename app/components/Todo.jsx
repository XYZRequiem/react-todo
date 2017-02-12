var moment = require('moment');
var React = require('react');

var Todo = React.createClass({
  onToggle: function (id) {
    this.props.onToggle(id);
  },
  render: function () {
    var {text, id, completed, createdAt, completedAt, onToggle} = this.props;
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
      <div className="row" onClick={() => {
          onToggle(id);
        }}>
        <div className="column small-1"><input type="checkbox" checked={completed}/></div>
        <div className="column small-6"><p>{text}</p></div>
        <div className="column small-5"><p>{renderDate()}</p></div>



      </div>
    )
  }
});

module.exports = Todo;
