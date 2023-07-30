import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <div className="header">
        <div className="image">
          <img src="/media/img/question_img/zagreb.jpg" alt="answer" />
        </div>
        <div className="text">Kako se zove glavni grad Republike Hrvatske?</div>
      </div>
      <div className="answers">
        <ul>
          <li>Beograd</li>
          <li>Ljubljana</li>
          <li>Zagreb</li>
          <li>Sarajevo</li>
        </ul>
      </div>
    </div>
  );
}
