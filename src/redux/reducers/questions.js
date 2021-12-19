import {GET_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER  } from "../actions/actionTypes";

export function questions(state = {}, action){
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
        }
      }
    case ADD_QUESTION_ANSWER:
      const answer = action.answer;
      const qid = action.qid;
      
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([action.authedUser])
          },
        }
      }
    default:
    return {
      ...state
    }
  }
}