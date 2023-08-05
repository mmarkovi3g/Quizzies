import "./App.css";
import Question from "./components/Question";
import Form from "./components/Form";
import "./App.css";
import questions from "./questions.json";
import { useState } from "react";

function App() {
  //needs to be declared here because if i declared it inside Question jsx it would render with every state change
  const randomPitanja = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * questions.length)
  );

  return (
    <div>
      <div className="title">Wellcome to Quizzies</div>
      <Form />
      <Question questions={questions} randomPitanja={randomPitanja} />

      <div></div>
    </div>
  );
}

export default App;
