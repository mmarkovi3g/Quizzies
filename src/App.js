import "./App.css";
import Question from "./components/Question";
import Form from "./components/Form";
import "./App.css";
import questions from "./questions.json";
import { useState } from "react";

function App() {
  // quizz started or not state
  const [started, setStarted] = useState(false);

  // creating filtered questions based on category
  const categoryFilters = {
    allcategories: questions,
    sports: questions.filter((question) => question.category === "sports"),
    geography: questions.filter(
      (question) => question.category === "geography"
    ),
    history: questions.filter((question) => question.category === "history"),
  };

  // state for filtered questions passed to form component so i can handle changes directly
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  //

  //state for quizz settings
  const [category, setCategory] = useState(categoryFilters.allcategories);
  const [numOfQuestions, setNumOfQuestions] = useState(10);

  // initali list of random numbers
  const initialList = Array.from({ length: numOfQuestions }, () =>
    Math.floor(Math.random() * (questions.length - 1))
  );

  const [randomArray, setRandomArray] = useState(initialList);
  const [selectedQuestions, setSelectedQuestions] = useState(
    categoryFilters.allcategories
  );

  // handler function that takes object generated in form for quizz settings
  function handleQuizzSettings(item) {
    setNumOfQuestions(Number(item.chosenNumOfQuestions));
    setCategory(item.chosenCategory);

    const selectedQuestionsList = categoryFilters[item.chosenCategory];
    setSelectedQuestions(selectedQuestionsList);

    // generating random array
    const randomList = Array.from(
      { length: Number(item.chosenNumOfQuestions) },
      () => Math.floor(Math.random() * selectedQuestionsList.length)
    );
    setRandomArray(randomList);
    setStarted(true);
  }

  return (
    <div>
      <div className="title">Wellcome to Quizzies</div>
      <Form
        onHandleQuizzSetting={handleQuizzSettings}
        categoryFilters={categoryFilters}
        filteredQuestions={filteredQuestions}
        setFilteredQuestions={setFilteredQuestions}
        started={started}
        setStarted={setStarted}
      />
      <div>
        {started ? (
          <Question
            randomArray={randomArray}
            selectedQuestions={selectedQuestions}
            numOfQuestions={numOfQuestions}
          />
        ) : (
          <div className="question">
            <h2 className="title">
              Select your Quizzie settings and start new game!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
