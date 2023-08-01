import "./App.css";
import Question from "./components/Question";
import "./App.css";
import { useState } from "react";

const questions = [
  {
    category: "geography",
    q: "What is the capital of Croatia?",
    a1: ["Split", false],
    a2: ["Osijek", false],
    a3: ["Varaždin", false],
    a4: ["Zagreb", true],
  },
  {
    category: "geography",
    q: "Which sea lies to the west of Croatia?",
    a1: ["Mediterranean Sea", false],
    a2: ["Black Sea", false],
    a3: ["Adriatic Sea", true],
    a4: ["Aegean Sea", false],
  },
  {
    category: "geography",
    q: "What is the longest river in Croatia?",
    a1: ["Sava River", true],
    a2: ["Drava River", false],
    a3: ["Una River", false],
    a4: ["Kupa River", false],
  },
  {
    category: "geography",
    q: "Which national park is located in Croatia?",
    a1: ["Plitvice Lakes National Park", true],
    a2: ["Mount Dinara National Park", false],
    a3: ["Brijuni National Park", false],
    a4: ["Durmitor National Park", false],
  },
  {
    category: "geography",
    q: "Which Croatian island is known for its unique heart shape?",
    a1: ["Krk", false],
    a2: ["Hvar", false],
    a3: ["Vis", false],
    a4: ["Galesnjak", true],
  },
  {
    category: "geography",
    q: "Which mountain range runs along the border between Croatia and Bosnia and Herzegovina?",
    a1: ["Alps", false],
    a2: ["Dinaric Alps", true],
    a3: ["Carpathians", false],
    a4: ["Pindus", false],
  },
  {
    category: "geography",
    q: "Which Croatian city is famous for its Roman amphitheater?",
    a1: ["Dubrovnik", false],
    a2: ["Split", true],
    a3: ["Zadar", false],
    a4: ["Pula", false],
  },
  {
    category: "geography",
    q: "What is the southernmost city in Croatia?",
    a1: ["Dubrovnik", true],
    a2: ["Zadar", false],
    a3: ["Split", false],
    a4: ["Rijeka", false],
  },
  {
    category: "geography",
    q: "Which Croatian region is known for its distinctive red soil and wine production?",
    a1: ["Slavonia", false],
    a2: ["Istria", true],
    a3: ["Dalmatia", false],
    a4: ["Lika", false],
  },
  {
    category: "geography",
    q: "What is the largest lake in Croatia?",
    a1: ["Lake Vransko", true],
    a2: ["Lake Jarun", false],
    a3: ["Lake Peruća", false],
    a4: ["Lake Prokljan", false],
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
      <div className="title">Wellcome to Quizzies</div>

      <Question
        question={question}
        onPreviousHandler={previousHandler}
        onNextHandler={nextHandler}
        qNumber={questions.indexOf(question) + 1}
        numOfQuestions={questions.length}
        key={question.q}
        q={question.q}
        a1={question.a1[0]}
        a2={question.a2[0]}
        a3={question.a3[0]}
        a4={question.a4[0]}
        category={question.category}
      />

      <div></div>
    </div>
  );
}

export default App;
