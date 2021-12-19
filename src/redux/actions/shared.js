import { getInitialData, saveQuestion, saveQuestionAnswer } from '../../utils/api';
import {getUsers, addUserQuestion, addUserAnswer} from './users';
import { getQuestions,addQuestion, addQuestionAnswer } from './questions';
import { hideLoading, showLoading } from 'react-redux-loading';

export function handleInitialData(){
 return (dispatch) => {
   dispatch(showLoading())
   return getInitialData()
    .then((user, questions) => {
      dispatch(getUsers(user));
      dispatch(getQuestions(questions));
      dispatch(hideLoading())
    })
  }
}

export function handleSaveQuestion(data){
  return (dispatch, getState) => {
    const { authedUser } = getState()
    data.author = authedUser;

    return saveQuestion(data)
      .then(res => {
        dispatch(addQuestion(res));
        dispatch(addUserQuestion(res))
      })
      .catch(rej => {
        console.log("Error on saving Question", rej);
      })
  }
}

export function handleSaveQuestionAnswer(qid, answer){
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const data = {
      qid,
      answer,
      authedUser
    };

    return saveQuestionAnswer(data)
      .then(() => {
        dispatch(addQuestionAnswer(data));
        dispatch(addUserAnswer(data));
      })
      .catch(rej => {
        console.log("Error on saving Question Answer", rej);
      })
  }
}