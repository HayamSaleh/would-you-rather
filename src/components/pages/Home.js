import React, {useState } from "react";
import {connect} from 'react-redux';
import { Nav } from "react-bootstrap";
import QuestionCard from '../question/QuestionCard';
import { useNavigate } from "react-router-dom";

function Home(props){
  const [isAnsweredTab, setAnsweredTab] = useState(false);
  const { answeredQuestions, unAnsweredQuestions, users } = props;
  const navigate = useNavigate();

  const questionsData = isAnsweredTab ? answeredQuestions : unAnsweredQuestions;

  const renderNavTabs = () => {
    return (
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link 
            active={!isAnsweredTab}
            onClick={() => setAnsweredTab(false)}>
              Unanswered Questions
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={isAnsweredTab}
            onClick={() => setAnsweredTab(true)}>
              Answered Questions
            </Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

  const renderEmptyCard = () => {
    return (
      <div className="empty-card">
        {isAnsweredTab ? 'You don\'t have any answered questions' 
          : 'You have no questions to answer'}
      </div>
    )
  }

  const handleSubmit = (qid) => {
    navigate(`/question/${qid}`);
  }

  const renderQuestion = (question) => {
    const author = users[question.author];

    return (
      <QuestionCard
        key={question.id}
        answered={isAnsweredTab} 
        homePreview
        authorName={author.name}
        authorAvatar={author.avatarURL}
        question={question}
        handleSubmit={handleSubmit} />
    )
  }

  return (
    <div className="question-list">
      {renderNavTabs()}
      {questionsData.length === 0 ? renderEmptyCard() 
        : questionsData.map((question) => {
          return renderQuestion(question || {})
      })}
    </div>
  )
}

function mapStateToProps ({ questions, users, authedUser }, props) {
  const questionsArray = Object.values(questions);

  questionsArray.sort((a, b) =>  b.timestamp - a.timestamp);

  const answeredQuestions = questionsArray.filter(question => 
    question.optionOne?.votes.includes(authedUser)
    || question.optionTwo?.votes.includes(authedUser));

  const unAnsweredQuestions = questionsArray.filter(question => 
    !question.optionOne.votes.includes(authedUser)
      && !question.optionTwo.votes.includes(authedUser));

  return {
    users,
    answeredQuestions,
    unAnsweredQuestions,
    authedUser,
  }
}

export default connect(mapStateToProps)(Home)