import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from '../constants/ActionTypes';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
      case CLEAR_COMPLETED:
      return state;

    default:
      return state;
  }
}
