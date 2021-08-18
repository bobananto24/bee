import {
  TOGGLE_MENU,
  TOGGLE_MODAL,
  LOGOUT_TOGGLE,
  NAVIGATION,
} from './actionTypes';

export const Menubar = () => ({
  type: TOGGLE_MENU,
});
export const Modalbar = () => ({
  type: TOGGLE_MODAL,
});
export const LogoutToggle = () => ({
  type: LOGOUT_TOGGLE,
});

export const NavigateTo = label => ({
  type: NAVIGATION,
  label,
});
