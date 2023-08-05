import { useState } from "react";
import "./Question.css";

export default function Question({ questions, randomPitanja }) {
  //generating random array of indexes

  //counting questions for later use
  const numOfQuestions = randomPitanja.length;

  //for looping around random array
  const [index, setIndex] = useState(0);
  const [currentQ, setCurrentQ] = useState(randomPitanja[index]);

  //getting the displayed question
  const question = questions[currentQ];

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
    }
  }

  return (
    <div className="question">
      <p className="question_number">
        <span>{index + 1}</span>/{randomPitanja.length}
      </p>
      <div className="header">
        <div className="text">{question.question}</div>
      </div>
      <div className="answers">
        <ul>
          <li onClick={nextHandler}>{question.optionA}</li>
          <li onClick={nextHandler}>{question.optionB}</li>
          <li onClick={nextHandler}>{question.optionC}</li>
          <li onClick={nextHandler}>{question.optionD}</li>
        </ul>
      </div>
      {/*
      <div className="navigation">
        <button>Previous</button>
        <button>Next</button>
      </div>{" "}
      */}
    </div>
  );
}
