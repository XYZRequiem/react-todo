var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('-- Spies', () => {
    it('should call onAddedTodo prop with valid data', () => {
      var todoText = 'Check mail';
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddedTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.newTodo.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddedTodo prop with invalid data', () => {
      var todoText = null;
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddedTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.newTodo.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});
