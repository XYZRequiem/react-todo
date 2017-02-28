var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe ('Reducers', () => {
  describe ('-- searchTextReducer', () => {
    it('should set searchText ', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe ('-- showCompletedReducer', () => {
    it('should toggleShowCompleted ', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe ('-- todosReducer', () => {
    it('should add new todo ', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Histoire'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual('Histoire');
    });

    it('should toggleTodo first todo', () => {
      var todos = [{
        id: 1,
        text: 'wash the dog',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      },
      {
        id: 2,
        text: 'wash the cat',
        completed: true,
        createdAt: 111,
        completedAt: 125
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toEqual(moment().unix());
      expect(res[1].completed).toEqual(true);
      expect(res[1].completedAt).toEqual(125);
    });

    it('should toggleTodo second todo', () => {
      var todos = [{
        id: 1,
        text: 'wash the dog',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      },
      {
        id: 2,
        text: 'wash the cat',
        completed: true,
        createdAt: 111,
        completedAt: 125
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 2
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
      expect(res[1].completed).toEqual(false);
      expect(res[1].completedAt).toEqual(undefined);
    });
  });
});
