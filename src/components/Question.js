import "./Question.css";
import { useState } from "react";

export default function Question(question) {
  const numOfQ = 10;
  const [qNum, setQNum] = useState(1);

  const nextHandler = () => {
    if (qNum < numOfQ) {
      setQNum((prev) => prev + 1);
    }
  };

  const prevHandler = () => {
    if (qNum > 1) {
      setQNum((prev) => prev - 1);
    }
  };

  return (
    <div className="question">
      <p className="question_number">
        <span>{qNum}</span>/{numOfQ}
      </p>
      <div className="header">
        <div className="image">
          <img src="/media/img/question_img/zagreb.jpg" alt="answer" />
        </div>
        <div className="text">{question.q}</div>
      </div>
      <div className="answers">
        <ul>
          <li>{question.a1}</li>
          <li>{question.a2}</li>
          <li>{question.a3}</li>
          <li>{question.qa}</li>
        </ul>
      </div>
      <div className="navigation">
        <button onClick={prevHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
}
