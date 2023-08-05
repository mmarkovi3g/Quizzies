import "./App.css";
import Question from "./components/Question";
import Form from "./components/Form";
import "./App.css";
import questions from "./questions.json";
import { useState } from "react";

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const question = questions[currentQ];

  const numOfQuestions = questions.length;

  return (
    <div>
      <div className="title">Wellcome to Quizzies</div>

      <Form />

      {questions.map((question) => (
        <Question
          question={question}
          qNumber={questions.indexOf(question) + 1}
          numOfQuestions={questions.length}
          key={question.q}
          q={question.question}
          a1={question.optionA}
          a2={question.optionB}
          a3={question.optionC}
          a4={question.optionD}
          category={question.category}
        />
      ))}

      <div></div>
    </div>
  );
}

export default App;
