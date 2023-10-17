import { useState } from "react";
import "./Question.css";

export default function Question({
  selectedQuestions,
  randomArray,
  numOfQuestions,
  started,
  setStarted,
}) {
  // testing consoles for later use on more categories / number of Questions
  /* console.log(selectedQuestions.length);
  console.log(randomArray); */

  // setting default index state to loop through the questions
  const [index, setIndex] = useState(0);

  // derived state form index state - to reduce number of states
  const currentQ = randomArray[index];

  // choosing selected question based on 2 previous states
  const question = selectedQuestions[currentQ];

  //setting up state to show results window
  const [finished, setFinished] = useState(false);

  //setting up score (this needs to be improved later on)
  const [score, setScore] = useState(0);

  // adding new array of wrong answers
  const [answersAndQ, setAnswersAndQ] = useState([]);

  // adding switch for showing answers at the end
  const [showAnswers, setShowAnswers] = useState(false);

  //next question handler
  function nextHandler(event) {
    event.preventDefault();
    if (index < numOfQuestions - 1) {
      setIndex((prev) => prev + 1);
    } else {
      // Reset the index to 0 to loop back to the first question
      setIndex(9);
      setFinished(true);
    }
    const answer = event.target.value;
    if (answer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      // adding logic to generate array of wrong answers
      setAnswersAndQ((prev) => [
        ...answersAndQ,
        {
          question: question.question,
          youselected: event.target.value,
          correctanswer: question.answer,
        },
      ]);
    }
  }

  // default state for game start - resets on button click
  function newGame() {
    setStarted(false);
  }

  // showing answes switch function
  function showAnswersHandler() {
    setShowAnswers(true);
  }

  return (
    <div>
      {finished && !showAnswers && (
        <Finished
          score={score}
          numOfQuestions={numOfQuestions}
          newGame={newGame}
          showAnswersHandler={showAnswersHandler}
        />
      )}
      {finished && showAnswers && (
        <div className="question-completed">
          <h2>Answers: </h2>

          <div className="answers-container">
            {answersAndQ.length > 0 ? (
              answersAndQ.map((item) => (
                <Answers
                  question={item.question}
                  youselected={item.youselected}
                  correctanswer={item.correctanswer}
                  key={item.question}
                />
              ))
            ) : (
              <h2>You got it all!</h2>
            )}
          </div>

          <button className="new-game" onClick={newGame}>
            Start new Quizzie
          </button>
        </div>
      )}
      {!finished && !showAnswers && (
        <QuestionStarted
          index={index}
          randomArray={randomArray}
          question={question}
          nextHandler={nextHandler}
        />
      )}
    </div>
  );
}

function Answers({ question, youselected, correctanswer }) {
  return (
    <div className="answers-item">
      <p className="answers-question">Q: {question}</p>
      <div className="your-and-correct-container">
        <p className="answers-youranswer"> ❌ Your answer: {youselected}</p>
        <p className="answers-correctanswer">
          ✔️ Correct answer: {correctanswer}
        </p>
      </div>
    </div>
  );
}

function Finished({ score, numOfQuestions, newGame, showAnswersHandler }) {
  return (
    <div className="question-completed">
      <h2>Quizzie completed</h2>
      <p>
        You answered correctly {score} of {numOfQuestions} questions
      </p>
      <button className="new-game" onClick={newGame}>
        Start new Quizzie
      </button>
      <button className="new-game" onClick={showAnswersHandler}>
        Show answers
      </button>
    </div>
  );
}

function QuestionStarted({ index, randomArray, question, nextHandler }) {
  return (
    <div className="question">
      <div className="header">
        <img
          className="category-img"
          src={`../media/img/${question.category}.png`}
          alt="category"
        />
        <p className="question_number">
          <span>{index + 1}</span>/{randomArray.length}
        </p>
      </div>

      <div className="header">
        <div className="text">{question.question}</div>
      </div>
      <div className="answers">
        <ul>
          <button onClick={nextHandler} value={question.optionA}>
            {question.optionA}
          </button>
          <button onClick={nextHandler} value={question.optionB}>
            {question.optionB}
          </button>
          <button onClick={nextHandler} value={question.optionC}>
            {question.optionC}
          </button>
          <button onClick={nextHandler} value={question.optionD}>
            {question.optionD}
          </button>
        </ul>
      </div>
    </div>
  );
}
