import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    const todos = [{
      id: 1,
      text: 'The text',
      completed: true
    }, {
      id: 2,
      text: 'text 2',
      completed: true
    }, {
      id: 3,
      text: 'Walk the dog',
      completed: false
    }];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed todos when showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'text');
      expect(filteredTodos.length).toBe(2);
    });

    it('should filter todos by searchText if uppercase', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'Text');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});