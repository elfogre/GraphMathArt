import {combineReducers} from 'redux';
import scene from './scene';
import time from './time';
import todos from './todos';

const rootReducer = combineReducers({
  time,
  todos,
  scene
});

export default rootReducer;
