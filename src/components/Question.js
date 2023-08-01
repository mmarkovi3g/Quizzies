import "./Question.css";

export default function Question(question) {
  return (
    <div className="question">
      <p className="question_number">
        <span>{question.qNumber}</span>/{question.numOfQuestions}
      </p>
      <div className="header">
        <div className="text">{question.q}</div>
      </div>
      <div className="answers">
        <ul>
          <li>{question.a1}</li>
          <li>{question.a2}</li>
          <li>{question.a3}</li>
          <li>{question.a4}</li>
        </ul>
      </div>
      <div className="navigation">
        <button onClick={question.onPreviousHandler}>Previous</button>
        <button onClick={question.onNextHandler}>Next</button>
      </div>
    </div>
  );
}
