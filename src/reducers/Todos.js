import {
  ALL_TODOS,
  COMPLETED,
  PENDING,
  CURRENT_ID,
  REFRESH,
} from '../actions/actionTypes';

const initialState = {
  todos: null,
  completed: false,
  pending: false,
  refresh: false,
  currentId: null,
};

export default Todos = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TODOS:
      return {...state, todos: action.todos.reverse()};
    case COMPLETED:
      return {...state, completed: action.bool};
    case PENDING:
      return {...state, pending: action.bool};
    case REFRESH:
      return {...state, refresh: !state.refresh};
    case CURRENT_ID:
      return {...state, currentId: action.id};
  }
  return state;
};
