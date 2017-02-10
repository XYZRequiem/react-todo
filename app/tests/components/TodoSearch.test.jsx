var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('Search', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('-- Spies', () => {
    describe('-- Should Call', () => {
      it('onSearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, searchText);
      });

      it('onSearch with proper checked value', () => {
        var showCompleted = true;
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(showCompleted, '');
      });
    });

    describe('-- Should Not Call', () => {
      it('onSearch with no change to inputs', () => {
        var searchText = '';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;

        expect(spy).toNotHaveBeenCalled(false, searchText);
      });
    });
  });
});
