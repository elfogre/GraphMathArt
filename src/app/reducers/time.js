import {PAUSE_TIME, START_TIME, RESTART_TIME, SET_TIME} from '../constants/TimeActionTypes';

const initialState = {time: 0, timepaused: false};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case PAUSE_TIME:
      return {...state, timepaused: true};
    case START_TIME:
      return {...state, timepaused: false};
    case RESTART_TIME:
      return {...state, time: 0};
    case SET_TIME:
      return {...state, time: action.time};
    default:
      return state;
  }
}
