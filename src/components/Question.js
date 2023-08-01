import "./Question.css";

export default function Question(question) {
  return (
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
  );
}
