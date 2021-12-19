import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { handleSaveQuestion } from '../../redux/actions/shared';

function NewQuestion(props){
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const { dispatch } = props;
  const navigate = useNavigate();

  const handleSubmitQuestion = () => {
    const question  = {
      optionOneText,
      optionTwoText,
    }

    dispatch(handleSaveQuestion(question))
    navigate('/')
  }

  return (
    <div className="question-card">
      <div className="add-question-header">
        Create New Question
      </div>
      <div className="add-question-body">
        <div>Complete this question:</div>
        <div className="question-title mt-4">Would you rather..</div>
        <Form.Group className="w-100">
          <Form.Control
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
            placeholder="Enter Option one Text Here"/>
            <div>OR</div>
          <Form.Control
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
            placeholder="Enter Option two Text Here"/>
        </Form.Group>
        <Button onClick={handleSubmitQuestion}>Submit</Button>

      </div>
    </div> 
  )
}

export default NewQuestion;