var React = require('react');

var Todo = React.createClass({
  onToggle: function (id) {
    this.props.onToggle(id);
  },
  render: function () {
    var {text, id, completed, onToggle} = this.props;
    return (
      <div onClick={() => {
          onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
});

module.exports = Todo;
