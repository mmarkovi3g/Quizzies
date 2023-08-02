import "./Question.css";

export default function Form() {
  return (
    <div className="form">
      <form>
        <p>Choose you Quizzies settings to generate your own Quiz: </p>

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
    </div>
  );
}
