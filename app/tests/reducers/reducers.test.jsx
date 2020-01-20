var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

/* Deep freeze is only useful for tests, it's good
to prevent reducers from modifying things that shouldn't be modifying */

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Cat'
      };
      // var response = reducers.searchTextReducer('', action);
      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      // var response = reducers.showCompletedReducer(false, action);
      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    })
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 123456789
        }
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      // to change the status of a todo item, we need to have a todo item
      // to change it's value. So we first set a start realistic value to the reducer.
      var todosArray = [{
        id: 0,
        text: 'Walk the cat',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 0
      };
      var response = reducers.todosReducer(df(todosArray), df(action));

      expect(response[0].completed).toEqual(true);
      expect(response[0].completedAt).toNotBe(undefined);
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
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(todos[0]);
    });
  })
});
