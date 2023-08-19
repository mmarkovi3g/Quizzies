import "./Form.css";
import { useState } from "react";
import questions from "../questions.json";

export default function Form({
  onHandleQuizzSetting,
  categoryFilters,
  setFilteredQuestions,
  filteredQuestions,
  setStarted,
  started,
}) {
  //

  //filternig questions based on category

  // toggler for choosing quizz options by default it is open, it should close when i chose quizz settings and start the quizz
  const [isOpen, setIsOpen] = useState(false);
  function toggleHandler() {
    setIsOpen((isOpen) => !isOpen);
  }
  //
  //defining state and function for handling categories
  const [chosenCategory, setChosenCategory] = useState("allcategories");

  function categoryHandler(event) {
    const categoryValue = event.target.value;
    setChosenCategory((prev) => categoryValue);

    //
    if (chosenCategory === "allcategories") {
      setFilteredQuestions((prev) => questions);
    } else {
      setFilteredQuestions((prev) => categoryFilters[chosenCategory]);
    }
  }

  //
  //defining state and function for hadling number of questions
  const [chosenNumOfQuestions, setChosenNumOfQuestions] = useState(10);
  function numOfQuestionsHandler(event) {
    setChosenNumOfQuestions((prev) => Number(event.target.value));
  }
  //
  //defining submit handler that stores number of questions and category into object
  function submitHandler(event) {
    event.preventDefault();
    const quizzSettings = {
      chosenCategory,
      chosenNumOfQuestions,
      filteredQuestions,
    };

    // loging values just in case
    /* console.log(quizzSettings); */

    // handler for moving state up into APP
    onHandleQuizzSetting(quizzSettings);

    // reseting form to default values after submit
    setChosenCategory("allcategories");
    setChosenNumOfQuestions(10);
    setIsOpen(false);
  }

  /*  console.log(chosenNumOfQuestions, chosenCategory); */

  return (
    <div className="form">
      <div className="form_header">
        <p>Choose you Quizzies settings to generate your own Quizzie: </p>
        <p className="toggler" onClick={toggleHandler}>
          {isOpen === true ? "✖️" : "➕"}
        </p>
      </div>
      {isOpen === true ? (
        <form onSubmit={submitHandler}>
          <div className="form_wrap">
            <div>
              <p>Select category: </p>
              <select value={chosenCategory} onChange={categoryHandler}>
                <option value="allcategories">All Categories</option>
                <option value="geography">Geography</option>
                <option value="sports">Sports</option>
                <option value="history"> History</option>
              </select>
            </div>

            <div>
              <p>Select number of questions: </p>
              <select
                value={chosenNumOfQuestions}
                onChange={numOfQuestionsHandler}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
            </div>
          </div>
          <button type="submit">Generate Quizzie</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
