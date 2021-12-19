import React from "react";
import { ProgressBar } from "react-bootstrap";

function QuestionPreview(props){
  const {optionOne, optionTwo} = props.question;
  
  const renderYourAnswerBadge = () => {
    return (
      <div className="badge label-warning">
        <div>Your</div>
        <div>vote</div>
      </div>
    )
  }
  
  const renderAnswer = (option) => {
    const isCurrentUserAnswer = option.votes.includes(props.authedUser)
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionVotes = option.votes.length;
    const optionPrecentage = optionVotes/totalVotes;

  return (
    <div className={`answer-card ${isCurrentUserAnswer && 'current-user-answer'}`}>
      {isCurrentUserAnswer && renderYourAnswerBadge()}
      <div>
        {`Would you rather ${option.text}?`}
      </div>
      <ProgressBar className='mb-3 mt-3' 
        now={optionPrecentage * 100} 
        label={`${Math.round(optionPrecentage * 10000) / 100}%`} />
      <div className="text-center">
        <b>{`${optionVotes} out of ${totalVotes} votes`}</b>
      </div>
    </div>
    )
  }

  return (
    <div className="question-body">
      <img src={props.authorAvatar} alt="logo"/>
      <div className="mt-3 question-body-righ-side">
        <div className="question-title mb-2">Results:</div>
        <div>
          {renderAnswer(optionOne)}
          {renderAnswer(optionTwo)}
        </div>
      </div>
    </div>      
  )
}

export default QuestionPreview;
