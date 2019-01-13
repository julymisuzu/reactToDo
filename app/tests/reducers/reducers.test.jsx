var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat'
      };
      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {type: 'TOGGLE_SHOW_COMPLETED'};
      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the cats'
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: 123,
        text: 'Something',
        completed: true,
        createdAt: 12344,
        completedAt: 34545
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var response = reducers.todosReducer(df(todos), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].completed).toEqual(false);
      expect(response[0].completedAt).toEqual(undefined);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        createdAt: 123456,
        completedAt: undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].id).toEqual(111);
    });
  });
});