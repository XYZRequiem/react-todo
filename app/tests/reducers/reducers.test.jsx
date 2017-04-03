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
        todo: {
          id: '123abc',
          text: 'Something',
          completed: false,
          createdAt: 12345
        }


      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should updateTodo todo', () => {
      var todos = [{
        id: '1',
        text: 'wash the dog',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      },
      {
        id: '2',
        text: 'wash the cat',
        completed: true,
        createdAt: 111,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[1].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[1].completed).toEqual(updates.completed);
      expect(res[1].completedAt).toEqual(updates.completedAt);
      expect(res[1].text).toEqual(todos[1].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
