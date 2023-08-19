import { useState, useEffect } from "react";
import "./Question.css";

export default function Question({
  selectedQuestions,
  randomArray,
  numOfQuestions,
}) {
  console.log(selectedQuestions);
  console.log(randomArray);
  console.log(numOfQuestions);

  const [index, setIndex] = useState(0); // defaultni index za početak
  const currentQ = randomArray[index]; // trenutno pitanje - index iz random arraya
  // što ako nema random arraya?
  console.log(currentQ);

  const question = selectedQuestions[currentQ];
  console.log(question);

  //setting up state to show results window
  const [finished, setFinished] = useState(false);

  //setting up score
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

  return (
    <div>
      {finished ? (
        <div className="question-completed">
          <h2>Quizzie completed</h2>
          <p>
            You answered correctly {score} of {numOfQuestions} questions
          </p>
          <button>Start new Quizzie</button>
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
