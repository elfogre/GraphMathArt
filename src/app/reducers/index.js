import {combineReducers} from 'redux';
import todos from './todos';
import {scene} from './scene';

const rootReducer = combineReducers({
  todos: todos,
  scene: scene
});

export default rootReducer;
