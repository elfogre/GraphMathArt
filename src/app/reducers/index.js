import {combineReducers} from 'redux';
import todos from './todos';
import scene from './scene';
import time from './time';

const rootReducer = combineReducers({
  time: time,
  todos: todos,
  scene: scene
});

export default rootReducer;
