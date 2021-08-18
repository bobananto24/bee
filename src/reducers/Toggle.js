import {
  TOGGLE_MODAL,
  TOGGLE_MENU,
  LOGOUT_TOGGLE,
  NAVIGATION,
} from '../actions/actionTypes';

const initialState = {
  isModal: false,
  menubar: false,
  openedOnce: false,
  currentPage: 'Dashboard',
};

export default Toggle = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {...state, isModal: !state.isModal};
    case TOGGLE_MENU:
      return {
        ...state,
        openedOnce: true,
        menubar: !state.menubar,
      };
    case LOGOUT_TOGGLE:
      return {
        ...state,
        openedOnce: false,
        menubar: !state.menubar,
        currentPage: 'Dashboard',
      };
    case NAVIGATION:
      return {
        ...state,
        openedOnce: false,
        menubar: !state.menubar,
        currentPage: action.label,
      };
  }
  return state;
};
