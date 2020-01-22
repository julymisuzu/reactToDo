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

    it('should update todo', () => {
      // to change the status of a todo item, we need to have a todo item
      // to change it's value. So we first set a start realistic value to the reducer.
      var todosArray = [{
        id: 0,
        text: 'Walk the cat',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todosArray[0].id,
        updates
      };
      var response = reducers.todosReducer(df(todosArray), df(action));

      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todosArray[0].text);
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
  });

  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      var action = {
        type: 'LOGIN',
        uid: 123456
      };

      var response = reducers.authReducer(undefined, df(action));
      expect(response).toEqual({
        uid: action.uid
      });
    });

    it('should logout', () => {
      var authData = {
        uid: 123
      };
      var action = {
        type: 'LOGOUT'
      };

      var response = reducers.authReducer(df(authData), df(action));
      expect(response).toEqual({});
    });
  });
});
