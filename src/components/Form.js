import "./Form.css";
import { useState } from "react";

export default function Form({
  onFormSubmit,
  setNumberOfQuestions,
  NumberOfQuestions,
  isOpen,
  setIsOpen,
  categoryOfQuestions,
  setCategoryOfQuestions,
}) {
  function toggleHandler() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div className="form">
      <div className="form_header">
        <p>Choose you Quizzies settings to generate your own Quizzie: </p>
        <p className="toggler" onClick={toggleHandler}>
          {isOpen === false ? "+" : "x"}
        </p>
      </div>
      {isOpen === true ? (
        <form onSubmit={onFormSubmit}>
          <div className="form_wrap">
            <div>
              <p>Select category: </p>
              <select
                value={categoryOfQuestions}
                onChange={(event) => setCategoryOfQuestions(event.target.value)}
              >
                <option value="allcategories">All Categories</option>
                <option value="geography">Geography</option>
                <option value="sports">Sports</option>
                <option value="history"> History</option>
              </select>
            </div>

            <div>
              <p>Select number of questions: </p>
              <select
                value={NumberOfQuestions}
                onChange={(event) =>
                  setNumberOfQuestions(Number(event.target.value))
                }
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
