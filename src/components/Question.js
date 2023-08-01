import "./Question.css";
import { useState } from "react";

export default function Question(question) {
  const [selectedQ, setSelectedQ] = useState(1);

  return (
    <div className="question">
      <div className="question">
        <p className="question_number">
          <span>{question.qNumber}</span>/{question.numOfQuestions}
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
      </div>

      <div className="navigation">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
