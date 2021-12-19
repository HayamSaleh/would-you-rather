import { GET_USERS, ADD_USER, ADD_USER_ANSWER,
  ADD_USER_QUESTION } from "../actions/actionTypes";

export function users(state = {}, action){
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: {
          ...action.user,
        }
      }
    case ADD_USER_QUESTION:
      const question = action.question;
      const user = question.author;
            
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat([question.id])
        }
      }
    case ADD_USER_ANSWER:
      const authedUser = action.authedUser;
            
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
    return {
      ...state,
    }
  }
}