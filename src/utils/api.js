import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser,
} from './_DATA.js'


export function getUsersData() {
  return _getUsers();
}

export function getQuestionsData() {
  return _getQuestions();
}

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion(info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}

export function saveUser(info) {
  return _saveUser(info)
}