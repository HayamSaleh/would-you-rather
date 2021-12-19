import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function QuestionForm(props){
  const [selectedOption, setSelectedOption] = useState('optionOne');
  const {optionOne, optionTwo, id} = props.question || {};

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  const renderoptionsInputs = () => {
    return (
      <Form.Group controlId="optionTwos">
        <Form.Check
          value="optionOne"
          type="radio"
          aria-label="optionOne"
          label={optionOne.text}
          onChange={handleChange}
          checked={selectedOption === "optionOne"} />
        <Form.Check
          value="optionTwo"
          type="radio"
          aria-label="optionTwo"
          label={optionTwo.text}
          onChange={handleChange}
          checked={selectedOption === "optionTwo"} />
      </Form.Group>
    )
  }

  const renderoptionsPreview = () => {
    return (
      <div>
        {`...${optionOne.text}...`}
      </div>
    )
  }

  return (
    <div className="question-body">
      <img src={props.authorAvatar} alt="logo"/>
      <div className="mt-3 question-body-righ-side">
        <div className="question-title mb-2"> Would You Rather...</div>
        {props.homePreview ? renderoptionsPreview() : renderoptionsInputs()}
        <Button 
          onClick={() => props.handleSubmit(id, selectedOption)}>
            {props.homePreview ? 'View Poll' : 'Submit'}
        </Button>
      </div>
    </div>
  )
}

export default QuestionForm;
