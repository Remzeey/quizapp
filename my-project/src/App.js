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
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
      {/* 1. Header  */}
      <div className="mx-auto my-6 font-extrabold text-2xl">Science Quiz</div>

      {/* 2. Current Score  */}
      <div className="mx-auto my-6 font-bold text-2xl">Score: {score}</div>

      {/* 3. Show results or show the question game  */}
      <div
        className="mx-auto my-16 w-2/3 h-96 p-8 
         border-0 rounded-lg shadow-xl bg-indigo-800 text-white text-center "
      >
        {showResults ? (
          /* 4. Final Results */
          <div>
            <h1 className="text-lg mb-10 font-bold">Final Results</h1>
            <h2 className="text-lg mb-10 font-bold">
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <div
              className="bg-green-600 w-2/3 mt-11 cursor-pointer rounded-lg mx-auto text-lg mb-10 font-bold"
              onClick={() => restartGame()}
            >
              Restart game
            </div>
          </div>
        ) : (
          /* 5. Question Card  */
          <div>
            {/* Current Question  */}
            <div
              className="mb-4 text-lg font-extrabold w-full bg-clip-text 
             text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
            >
              <span className="text-white">
                Question: {currentQuestion + 1} out of {questions.length}
              </span>
              <div className="">{questions[currentQuestion].text}</div>
            </div>

            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                    className="mb-10 cursor-pointer rounded-xl bg-white text-indigo-800 hover:font-bold"
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
