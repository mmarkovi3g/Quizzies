import "./App.css";
import Question from "./components/Question";
import Form from "./components/Form";
import "./App.css";
import questions from "./questions.json";
import { useState } from "react";

function App() {
  // quizz started or not state - default is false to show message to choose settings
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

  // just a piece of code to check number of questions
  console.log(questions.length);

  // state for filtered questions passed to form component so i can handle changes directly - set to full JSON file on default
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  //states for quizz settings
  /* const [category, setCategory] = useState(categoryFilters.allcategories); */
  const [numOfQuestions, setNumOfQuestions] = useState(10);

  // initial list of random numbers - if there is not any choosen category
  const initialList = Array.from({ length: numOfQuestions }, () =>
    Math.floor(Math.random() * (questions.length - 1))
  );

  //state for random Array of numbers (which get aligned with number of questions in the list)
  const [randomArray, setRandomArray] = useState(initialList);

  //state for selected category of questions (could improve this to get diferent categories combined)
  const [selectedQuestions, setSelectedQuestions] = useState(
    categoryFilters.allcategories
  );

  // handler function that takes object generated in form for quizz settings and questions generating
  function handleQuizzSettings(item) {
    // here, order is important
    // create temporary number of questions acording to form input
    setNumOfQuestions(Number(item.chosenNumOfQuestions));
    /*  setCategory(item.chosenCategory); */

    //set QuestionsList according to selected category from form
    const selectedQuestionsList = categoryFilters[item.chosenCategory];
    setSelectedQuestions(selectedQuestionsList);

    // generating random array after creation of number and category
    const randomList = Array.from(
      { length: Number(item.chosenNumOfQuestions) },
      () => Math.floor(Math.random() * selectedQuestionsList.length)
    );
    setRandomArray(randomList);

    // triger started state to start the quizzie
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
      />
      <div>
        {started ? (
          <Question
            randomArray={randomArray}
            selectedQuestions={selectedQuestions}
            numOfQuestions={numOfQuestions}
            started={started}
            setStarted={setStarted}
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
