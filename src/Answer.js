import React from 'react';

export default function Answer(props) {
  const styles = {
    backgroundColor: props.held ? 'green' : 'white',
  };
  return <div className="answer-option">{props.a}</div>;
}
