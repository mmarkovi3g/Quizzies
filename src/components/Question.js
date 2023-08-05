import { useState } from "react";
import "./Question.css";

export default function Question({ questions, randomPitanja }) {
  //counting questions for later use (implementing like this for next steps (more questions, category))
  const numOfQuestions = randomPitanja.length;

  //for looping around random array
  const [index, setIndex] = useState(0);

  //looping through questions using random index
  const [currentQ, setCurrentQ] = useState(randomPitanja[index]);

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

  //getting the displayed question
  const question = questions[currentQ];

  //getting the category name for icon and text to show up
  const category = question.category;

  return (
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
