import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);
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
        <form>
          <div className="form_wrap">
            <div>
              <p>Select category: </p>
              <select>
                <option>Geography</option>
                <option>Sports</option>
                <option>History</option>
              </select>
            </div>

            <div>
              <p>Select number of questions: </p>
              <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <button>Generate Quizzie</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
