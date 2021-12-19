import { GET_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from "./actionTypes";
import { getQuestionsData } from '../../utils/api';
import { hideLoading, showLoading } from "react-redux-loading";

export function getQuestions(questions){
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addQuestionAnswer(data){
  return {
    type: ADD_QUESTION_ANSWER,
    ...data
  }
}

export function handleGetQuestions(){
  return (dispatch) => {
    dispatch(showLoading())
    return getQuestionsData()
     .then((questions) => {
       dispatch(getQuestions(questions));
       dispatch(hideLoading())
     })
     .catch(rej => {
      console.log("Error on getting Questions");
    })
  }
 }
