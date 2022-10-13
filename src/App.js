import React from 'react';
import Question from './Question';
import './style.css';

export default function App() {
  const [start, setStart] = React.useState(false);
  const [correct, setCorrect] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [qanda, setQandA] = React.useState([]);

  React.useEffect(function () {
    fetch(
      'https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  function convert() {
    const tempArr = [];
    for (let i = 0; i < questions.length; i++) {
      tempArr.push({
        question: questions[i].question,
        answers: [
          { answer: questions[i].correct_answer, isHeld: false, correct: true },
          {
            answer: questions[i].incorrect_answers[0],
            isHeld: false,
            correct: false,
          },
          {
            answer: questions[i].incorrect_answers[1],
            isHeld: false,
            correct: false,
          },
          {
            answer: questions[i].incorrect_answers[2],
            isHeld: false,
            correct: false,
          },
        ],
        key: questions[1].question,
      });
    }
    setQandA(tempArr);
  }

  function shuffle() {
    setQandA((prevQandA) => prevQandA.map({}))
        
    }


  function startTest() {
    setStart(true);
    convert();
    shuffle();
  }

  function compareAnswer() {}

  const questionElements = qanda.map((element) => (
    <Question question={element.question} answers={element.answers} />
  ));

  return (
    <main>
      {start ? (
        <div className="questions">{questionElements}</div>
      ) : (
        <div className="start-screen">
          <h1>Quizzical</h1>
          <p> easy anime quiz</p>
          <button className="start-test" onClick={startTest}>
            Start quiz
          </button>
        </div>
      )}
    </main>
  );
}
