import "./App.css";
import Question from "./components/Question";
import Form from "./components/Form";
import "./App.css";
import questions from "./questions.json";
import { useState } from "react";

function App() {
  //filternig questions based on category
  const allQuestions = questions;
  const sports = questions.filter((question) => question.category === "sports");
  const geography = questions.filter(
    (question) => question.category === "geography"
  );
  const history = questions.filter(
    (question) => question.category === "history"
  );

  //as default value i used here all categories to display all the questions it is passed down into the Form as prop
  const [categoryOfQuestions, setCategoryOfQuestions] =
    useState("allcategories");

  //default state for number of questions it is passed down as prop to the form so it can generate number of questions on user input
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  // default state for function that generates random array of numbers based on array of questions length
  const [randomPitanja, setRandomPitanja] = useState([]);

  //easy state to generate quizz questions if it started or not
  const [started, setStarted] = useState(false);

  //state for form so it can be expanded on + buuton or closed on X button (it also close automaticaly on quizz start)
  const [isOpen, setIsOpen] = useState(false);

  //basicaly it generates question from JSON file based on upper filter( ) methods
  const [filteredQuestions, setFilteredQuestions] = useState(allQuestions);

  // setting handler for quiz start point
  function handleSubmit(event) {
    event.preventDefault(); //prevent HTTP behaviour
    setNumberOfQuestions(numberOfQuestions); // get num of Q from form and generate Number

    // filtering categories - it could be done better later on
    if (categoryOfQuestions === "allcategories") {
      setFilteredQuestions(allQuestions);
    } else if (categoryOfQuestions === "sports") {
      setFilteredQuestions(sports);
    } else if (categoryOfQuestions === "geography") {
      setFilteredQuestions(geography);
    } else if (categoryOfQuestions === "history") {
      setFilteredQuestions(history);
    }

    //generating that array of numbers so the questions would always be different
    setRandomPitanja(
      Array.from({ length: numberOfQuestions }, () =>
        Math.floor(Math.random() * filteredQuestions.length)
      )
    );

    setStarted(true);
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div>
      <div className="title">Wellcome to Quizzies</div>
      <Form
        onFormSubmit={handleSubmit}
        numberOfQuestions={numberOfQuestions}
        setNumberOfQuestions={setNumberOfQuestions}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categoryOfQuestions={categoryOfQuestions}
        setCategoryOfQuestions={setCategoryOfQuestions}
      />
      {started ? (
        <Question questions={filteredQuestions} randomPitanja={randomPitanja} />
      ) : (
        <h2 className="message">Choose your settings and start the Quizzie</h2>
      )}
    </div>
  );
}

export default App;
