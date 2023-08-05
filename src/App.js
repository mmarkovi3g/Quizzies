import "./App.css";
import Question from "./components/Question";
import Form from "./components/Form";
import "./App.css";
import questions from "./questions.json";

function App() {
  /* Generating Array of random numbers according to questions length.
  randomPitanja is used to generate 10 questions in Question component. */
  const randomPitanja = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * questions.length)
  );

  return (
    <div>
      <div className="title">Wellcome to Quizzies</div>
      <Form />
      <Question questions={questions} randomPitanja={randomPitanja} />
    </div>
  );
}

export default App;
