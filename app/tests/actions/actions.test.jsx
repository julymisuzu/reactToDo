var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var response = actions.setSearchText(action.searchText);
    
    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Walk the dog'
    };
    var response = actions.addTodo(action.text);
    
    expect(response).toEqual(action);
  });

  it('should generate ADD_TODOS action object', () => {
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

    var response = actions.addTodos(action.todos);

    expect(response).toEqual(action);
  });

  it('should toggle the isCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var response = actions.toggleShowCompleted();
    
    expect(response).toEqual(action);
  });

  it('should toggle the todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    var response = actions.toggleTodo(action.id);
    
    expect(response).toEqual(action);
  });
});