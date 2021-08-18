import {AUTHENTICATION, ACCOUNT, USERNAME} from '../actions/actionTypes';

const initialState = {
  isLogged: false,
  account: null,
  username: 'Guest',
};

export default Authentication = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {...state, isLogged: action.bool};
    case ACCOUNT:
      return {...state, account: action.val};
    case USERNAME:
      return {...state, username: action.val};
  }
  return state;
};
