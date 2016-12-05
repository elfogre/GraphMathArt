import * as types from '../constants/TimeActionTypes';

export function pauseTime() {
  return {type: types.PAUSE_TIME};
}

export function startTime() {
  return {type: types.START_TIME};
}

export function restartTime() {
  return {type: types.RESTART_TIME};
}

export function setTime(time) {
  return {type: types.SET_TIME, time};
}
