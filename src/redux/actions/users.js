import { ADD_USER, GET_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from "./actionTypes";
import { saveUser, getUsersData } from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading";

export function getUsers(users){
  return {
    type: GET_USERS,
    users,
  }
}

export function addUser(user){
  return {
    type: ADD_USER,
    user,
  }
}

export function addUserQuestion(question){
  return {
    type: ADD_USER_QUESTION,
    question,
  }
}


export function addUserAnswer(data){
  return {
    type: ADD_USER_ANSWER,
    ...data
  }
}

export function handleUserAdd(user){
  return (dispatch => {
    return saveUser(user)
      .then(res => {
        dispatch(addUser(user))
      })
      .catch(rej => {
        console.log('Error on handling user add');
      })
  })
}

export function handleGetUsers(){
  return (dispatch) => {
    dispatch(showLoading())
    return getUsersData()
     .then((user) => {
       dispatch(getUsers(user));
       dispatch(hideLoading())
     })
  }
 }
 