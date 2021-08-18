import {combineReducers} from 'redux';
import Authentication from './Authentication';
import Todos from './Todos';
import Toggle from './Toggle';

export default combineReducers({
  AUTH: Authentication,
  TODOS: Todos,
  TOGGLE: Toggle,
});
