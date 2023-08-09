import { useState } from "react";
import "./Question.css";

export default function Question({ questions, randomPitanja }) {
  //counting questions for later use (implementing like this for next steps (more questions, category))
  const numOfQuestions = randomPitanja.length;

  //for looping around random array
  const [index, setIndex] = useState(0);

  //looping through questions using random index
  const [currentQ, setCurrentQ] = useState(randomPitanja[index]);

  //setting up state to show results window
  const [finished, setFinished] = useState(false);

  //setting up score
  const [score, setScore] = useState(0);

  //next question handler
  function nextHandler(event) {
    event.preventDefault();
    if (index < numOfQuestions - 1) {
      setIndex((prev) => prev + 1);
      setCurrentQ(randomPitanja[index + 1]);
    } else {
      // Reset the index to 0 to loop back to the first question
      setIndex(9);
      setCurrentQ(randomPitanja[index]);
      setFinished(true);
    }
    const answer = event.target.value;
    if (answer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    console.log(event.target.value);
    console.log(question.answer);
  }

  //getting the displayed question
  const question = questions[currentQ];

  //getting the category name for icon and text to show up
  const category = question.category;

  return (
    <div>
      {finished ? (
        <div className="question-completed">
          <h2>Quizzie completed</h2>
          <p>
            You answered correctly {score} of {numOfQuestions} questions
          </p>
        </div>
      ) : (
        <div className="question">
          <div className="header">
            <img
              className="category-img"
              src={`./media/img/${category}.png`}
              alt="category"
            />
            <p className="question_number">
              <span>{index + 1}</span>/{randomPitanja.length}
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
          {/*
  <div className="navigation">
    <button>Previous</button>
    <button>Next</button>
  </div>{" "}
  */}
        </div>
      )}
    </div>
  );
}
