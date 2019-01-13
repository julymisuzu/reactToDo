import Uuid from 'node-uuid';
import moment from 'moment';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

    // Add case for TOGGLE_TODO completed equal to opposite value & update completedAt
    case 'TOGGLE_TODO':
      return state.map((item) => {
        if (item.id === action.id) {
          var completed = !item.completed;
        
          return {
            ...item,
            completed: completed,
            completedAt: completed ? moment().unix() : undefined
          };
        } else {
          return item;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};