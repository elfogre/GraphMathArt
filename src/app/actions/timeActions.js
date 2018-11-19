import * as types from '../constants/TimeActionTypes';

export function handlePauseTime() {
  return {type: types.PAUSE_TIME};
}

export function handleStartTime() {
  return {type: types.START_TIME};
}

export function handleRestartTime() {
  return {type: types.RESTART_TIME};
}

export function setTime(time) {
  return {type: types.SET_TIME, time};
}
