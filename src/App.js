import "./App.css";
import Question from "./components/Question";
import "./App.css";
import { useState } from "react";

const questions = [
  {
    category: "geography",
    q: "What is the capital of Croatia?",
    a1: "Belgrade",
    a2: "Ljubljana",
    a3: "Sarajevo",
    qa: "Zagreb",
  },
  {
    category: "geography",
    q: "Which sea lies to the west of Croatia?",
    a1: "Mediterranean Sea",
    a2: "Black Sea",
    a3: "Caspian Sea",
    qa: "Adriatic Sea",
  },
  {
    category: "history",
    q: "Who was the first King of Croatia?",
    a1: "Gjuro",
    a2: "Ivan",
    a3: "Nikola",
    qa: "Tomislav",
  },
  {
    category: "culture",
    q: "Which traditional Croatian instrument is often associated with the Dalmatian region?",
    a1: "Accordion",
    a2: "Bagpipes",
    a3: "Guitar",
    qa: "Tamburica",
  },
  {
    category: "food",
    q: "What is the traditional Croatian dish often made with lamb, potatoes, and vegetables?",
    a1: "Pizza",
    a2: "Sarma",
    a3: "Rozata",
    qa: "Peka",
  },
  {
    category: "landmarks",
    q: "Which UNESCO World Heritage Site in Croatia is known for its well-preserved medieval architecture?",
    a1: "Osijek",
    a2: "Dubrovnik",
    a3: "Šibenik",
    qa: "Trogir",
  },
  {
    category: "sports",
    q: "Which sport is very popular in Croatia and often played on the beach?",
    a1: "Volleyball",
    a2: "Handball",
    a3: "Football",
    qa: "Water Polo",
  },
  {
    category: "language",
    q: "Which language family does the Croatian language belong to?",
    a1: "Romance",
    a2: "American",
    a3: "Germanic",
    qa: "Slavic",
  },
  {
    category: "festivals",
    q: "Which Croatian city hosts the annual music festival called 'INmusic'?",
    a1: "Zadar",
    a2: "Split",
    a3: "Osijek",
    qa: "Zagreb",
  },
];

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const question = questions[currentQ];

  const numOfQuestions = questions.length;
  console.log(numOfQuestions);

  const previousHandler = () => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
    } else {
      setCurrentQ(0);
    }
  };

  const nextHandler = () => {
    if (currentQ < numOfQuestions - 1) setCurrentQ((prev) => prev + 1);
  };

  return (
    <div>
      <div>Wellcome to Quizzies</div>

      <Question
        qNumber={questions.indexOf(question) + 1}
        numOfQuestions={questions.length}
        question={question}
        key={question.q}
        q={question.q}
        a1={question.a1}
        a2={question.a2}
        a3={question.a3}
        qa={question.qa}
        category={question.category}
      />

      <div className="navigation">
        <button onClick={previousHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>

      <div>FOOTER</div>
    </div>
  );
}

export default App;
