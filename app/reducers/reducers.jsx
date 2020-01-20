var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
        // {
        //   id: uuid(),
        //   text: action.text,
        //   completed: false,
        //   createdAt: moment().unix(),
        //   completedAt: undefined
        // }
      ];
      // add case for TOGGLE_TODO completed
      // equal to opposite value & update completedAt
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          }
          // var nextCompleted = !todo.completed;

          // return {
          //   ...todo,
          //   completed: nextCompleted,
          //   completedAt: nextCompleted ? moment().unix() : undefined
          // }
        } else {
          return todo;
        }
      });
      // The items below are my solution for this
      // var updateTodos = state.map((todo) => {
      //   if (todo.id === action.id) {
      //     todo.completed = !todo.completed;
      //     todo.completedAt = todo.completed ? moment().unix() : undefined;
      //   }
      //   return todo;
      // });
      // return [
      //   ...state,
      //   updatedTodos
      // ];
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
}
