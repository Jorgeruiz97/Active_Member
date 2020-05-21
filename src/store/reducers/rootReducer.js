import { combineReducers } from 'redux';
import * as at from '../actions/actionTypes';

const initialState = {
  error: null,
  processing: false,
  success: null,
}

export const appState = (state = initialState, { type, data}) => {
  switch (type) {
    case 'TBD':
      return {
        ...state
      }
  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app: appState
})

export default rootReducer;
