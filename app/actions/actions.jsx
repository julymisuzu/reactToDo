import moment from 'moment';

import firebase, {firebaseRef, githubProvider} from 'app/firebase/';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

/* This is a sample of a thunk action that returns a function */
export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
    // if adding the new todo item to the firebase was successfull,
    // then dispatch the addTodo action
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export const startAddTodos = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  var todosRef = firebaseRef.child(`users/${uid}/todos`);
  return todosRef.once('value', (snapshot) => {
    var todosArray = snapshot.val() || {};  
    var allTodos = Object.keys(todosArray).map((item) => {
      return {
        id: item,
        ...snapshot.val()[item]
      }
    });

    dispatch(addTodos(allTodos));
  });
}

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};


export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export const login = (userId) => {
  return {
    type: 'LOGIN',
    uid: userId
  }
};

export const startLogin = () => (dispatch, getState) => {
  return firebase.auth().signInWithPopup(githubProvider)
  .then((result) => {
    console.log('Auth worked!', result);
  }, (error) => {
    console.log('Unable to auth', error);
  });
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const startLogout = () => (dispatch, getState) => {
  return firebase.auth().signOut()
  .then(() => {
    console.log('Logged out!');
  });
};
