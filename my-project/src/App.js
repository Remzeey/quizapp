import React, { useState } from "react";
import { questions } from "./questions";

const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* 1. Header  */}
      <div className="mx-auto my-6 text-2xl">Science Quiz</div>

      {/* 2. Current Score  */}
      <div className="mx-auto my-6 text-2xl">Score: {score}</div>

      {/* 3. Show results or show the question game  */}
      <div className="mx-auto my-20 w-2/3 h-96 p-8 border rounded-lg shadow-lg bg-indigo-800 text-white text-center ">
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="">
            {/* Current Question  */}
            <div
              className="mb-4 font-extrabold w-full bg-clip-text 
             text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
            >
              Question: {currentQuestion + 1} out of {questions.length}
              <div className="">{questions[currentQuestion].text}</div>
            </div>

            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                    className="mb-10 cursor-pointer rounded-xl bg-white text-indigo-800"
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
