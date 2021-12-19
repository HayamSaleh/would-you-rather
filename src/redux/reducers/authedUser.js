import { LOG_OUT, SET_AUTHORIZED_USER } from "../actions/actionTypes";

export function authedUser(state= null, action){
  switch (action.type) {
    case SET_AUTHORIZED_USER:
      return action.id  
    case LOG_OUT:
      return null; 
    default:
      return state;
  }
}