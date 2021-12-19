import React from "react";
import QuestionPreview from "./QuestionPreview";
import QuestionForm from "./QuestionForm";

function QuestionCard(props){  
  const {question, authorName, authorAvatar,
    answered, homePreview, handleSubmit, authedUser} = props;

  const renderQuestionPreview = () => {
    return (
      <QuestionPreview
        authedUser={authedUser}
        authorAvatar={authorAvatar}
        question={question} />
    )
  }

  const renderQuestionForm = () => {
    return (
      <QuestionForm
        question={question}
        homePreview={homePreview}
        authorAvatar={authorAvatar}
        handleSubmit={handleSubmit} />
    )
  }

  return (
    <div className="question-card">
      <div className="question-header">
        {answered ? `Asked By ${authorName}` : `${authorName} asks`}
      </div>
      {(!homePreview && answered) ? renderQuestionPreview() : renderQuestionForm()}
    </div>      
  )
}

export default QuestionCard;
