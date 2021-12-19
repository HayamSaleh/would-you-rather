import { SET_AUTHORIZED_USER, LOG_OUT } from "./actionTypes";

export function setAuthedUser(id){
  return {
    type: SET_AUTHORIZED_USER,
    id,
  }
}

export function userLogout(){
  return {
    type: LOG_OUT,
  }
}

export function handleAuthnicateUser(id){
  return (dispatch => {
    dispatch(setAuthedUser(id));
  }) 
}

export function handleUserLogout(){
  return (dispatch => {
    dispatch(userLogout());
  }) 
}



