import React from 'react';
import Answer from './Answer';
import he from 'he';
export default function Question(props) {
  const answers = props.answers.map((answer) => (
    <Answer a={answer.answer} held={answer.isHeld} />
  ));
  return (
    <div className="question-block">
      <div className="question">{he.decode(props.question)}</div>
      {shuffle}
      <div className="answers">{answers}</div>
    </div>
  );
}
