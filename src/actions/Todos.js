import {
  ALL_TODOS,
  COMPLETED,
  PENDING,
  CURRENT_ID,
  REFRESH,
} from './actionTypes';

export const Todos = todos => ({
  type: ALL_TODOS,
  todos,
});
export const Completed = bool => ({
  type: COMPLETED,
  bool,
});
export const Pending = bool => ({
  type: PENDING,
  bool,
});
export const Refresh = () => ({
  type: REFRESH,
});
export const CurrentId = id => ({
  type: CURRENT_ID,
  id,
});
