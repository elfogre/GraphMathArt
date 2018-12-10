import {combineReducers} from 'redux';
import scene from './scene';
import time from './time';

const rootReducer = combineReducers({
  time,
  scene
});

export default rootReducer;
