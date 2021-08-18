import {AUTHENTICATION, ACCOUNT, USERNAME} from './actionTypes';

export const Authentication = bool => ({
  type: AUTHENTICATION,
  bool,
});
export const Account = val => ({
  type: ACCOUNT,
  val,
});
export const Username = val => ({
  type: USERNAME,
  val,
});
