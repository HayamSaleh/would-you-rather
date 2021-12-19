import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionCard from '../question/QuestionCard';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../../redux/actions/shared';

const isAnsweredQuestion = (question, authedUser) => {
  return question.optionOne.votes.includes(authedUser) 
    || question.optionTwo.votes.includes(authedUser);
}

function Question(props){
  const {questions, users, authedUser, dispatch} = props;
  const [question, setQuestion] = useState({});
  const [author, setAuthor] = useState({});
  const [answered, setAnswered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const navigate = useNavigate();
  const { question_id } = useParams()

  useEffect(() => {
    const question = questions[question_id];
    if(question === undefined){
      navigate('/notFound');
    } else {
      setLoaded(true);
      setQuestion(question);
      setAuthor(users[question.author]);
      setAnswered(isAnsweredQuestion(question, authedUser))
    }
  }, []);

  const handleSubmit = (question_id, answer) => {
    setAnswered(!answered);
    setQuestion(
      {...question, [answer]: {...question[answer],
       votes: [...question[answer].votes, authedUser]}}
    )
    dispatch(handleSaveQuestionAnswer(question_id, answer))
  }

  return (
    loaded && <QuestionCard
      key={question.id}
      answered={answered} 
      authorName={author.name}
      authorAvatar={author.avatarURL}
      question={question}
      handleSubmit={handleSubmit}
      authedUser={authedUser} />    
  )
}

function mapStateToProps({users, questions, authedUser}, props){
  return {
    users,
    questions,
    authedUser,
    ...props,
  }
}

export default connect(mapStateToProps)(Question)