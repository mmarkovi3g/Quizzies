import { useState } from "react";
import "./Question.css";

export default function Question({
  selectedQuestions,
  randomArray,
  numOfQuestions,
  started,
  setStarted,
}) {
  // testing consoles for later use on more categories / number of Questions
  /* console.log(selectedQuestions.length);
  console.log(randomArray); */

  // setting default index state to loop through the questions
  const [index, setIndex] = useState(0);

  // derived state form index state - to reduce number of states
  const currentQ = randomArray[index];

  // choosing selected question based on 2 previous states
  const question = selectedQuestions[currentQ];

  //setting up state to show results window
  const [finished, setFinished] = useState(false);

  //setting up score (this needs to be improved later on)
  const [score, setScore] = useState(0);

  //next question handler
  function nextHandler(event) {
    event.preventDefault();
    if (index < numOfQuestions - 1) {
      setIndex((prev) => prev + 1);
    } else {
      // Reset the index to 0 to loop back to the first question
      setIndex(9);
      setFinished(true);
    }
    const answer = event.target.value;
    if (answer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  // default state for game start - resets on button click
  function newGame() {
    setStarted(false);
  }

  return (
    <div>
      {finished ? (
        <div className="question-completed">
          <h2>Quizzie completed</h2>
          <p>
            You answered correctly {score} of {numOfQuestions} questions
          </p>
          <button className="new-game" onClick={newGame}>
            Start new Quizzie
          </button>
        </div>
      ) : (
        <div className="question">
          <div className="header">
            <img
              className="category-img"
              src={`../media/img/${question.category}.png`}
              alt="category"
            />
            <p className="question_number">
              <span>{index + 1}</span>/{randomArray.length}
            </p>
          </div>

          <div className="header">
            <div className="text">{question.question}</div>
          </div>
          <div className="answers">
            <ul>
              <button onClick={nextHandler} value={question.optionA}>
                {question.optionA}
              </button>
              <button onClick={nextHandler} value={question.optionB}>
                {question.optionB}
              </button>
              <button onClick={nextHandler} value={question.optionC}>
                {question.optionC}
              </button>
              <button onClick={nextHandler} value={question.optionD}>
                {question.optionD}
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
