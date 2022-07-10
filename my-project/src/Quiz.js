import React, { useState } from "react";
import { questions } from "./questions";
import Navbar from "./component/Navbar";

const Quiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(questions);
  const [correct, setCorrect] = useState(false);
  const [notCorrect, setNotCorrect] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const quit = () => {
    setShowResults(true);
  };

  /* A possible answer was clicked */
  const optionClicked = async (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
      setCorrect(true);
      await sleep(1000);
      setCorrect(false);
    }

    if (!isCorrect) {
      setNotCorrect(true);
      await sleep(1000);
      setNotCorrect(false);
    }

    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    // This generates an array of new questions on every restart
    let oldQuestions = question,
      newQuestions = [],
      i = oldQuestions.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      newQuestions.push(oldQuestions[j]);
      oldQuestions.splice(j, 1);
    }

    setQuestion(newQuestions);

    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* 1. Header  */}
      <div className="mx-auto my-6 font-extrabold text-2xl">Science Quiz</div>

      {/* 2. Current Score  */}
      <div className="mx-auto my-6 font-bold text-2xl">Score: {score}</div>

      {/* 3. Show results or show the question game  */}
      <div
        className="mx-auto mt-4 mb-56 w-2/3 max-h-fit p-8 
         border-0 rounded-lg shadow-xl bg-indigo-800 text-white text-center "
      >
        {showResults ? (
          /* 4. Final Results */
          <div>
            <h1 className="text-lg mb-10 font-bold">Final Results</h1>
            <h2 className="text-lg mb-10 font-bold">
              {score} out of {question.length} correct - (
              {(score / question.length) * 100}%)
            </h2>
            <div
              className="bg-green-600 w-2/3 mt-4 cursor-pointer 
              transition duration-150 delay-100 ease-in-out hover:scale-110 rounded-lg mx-auto text-lg mb-10 font-bold"
              onClick={() => restartGame()}
            >
              Restart quiz
            </div>
          </div>
        ) : (
          /* 5. Question Card  */
          <div>
            {/* Current Question  */}
            <div className="mb-4 font-extrabold w-full text-white ">
              <span className="text-pink-400">
                Question: {currentQuestion + 1} out of {question.length}
              </span>
              <div>{question[currentQuestion].text}</div>
            </div>

            {/* List of possible answers  */}
            <ul>
              {question[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                    className={`mb-10 cursor-pointer bg-white text-indigo-700 rounded-xl  hover:font-bold
                      ${correct && option.isCorrect ? "bg-green-700 " : ""}
                      ${notCorrect && option.isCorrect ? "bg-green-700 " : ""}
                    
                    `}
                    // ${correct && !option.isCorrect ? "bg-red-500 " : ""}
                    // ${notCorrect && !option.isCorrect ? "bg-red-500 " : ""}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
            <div
              className="bg-red-600 w-2/3 mt-4 cursor-pointer 
              transition duration-150 delay-100 ease-in-out hover:scale-110 rounded-lg mx-auto text-lg mb-10 font-bold"
              onClick={() => quit()}
            >
              Quit
            </div>
          </div>
        )}
      </div>
      <div className="bg-indigo-800 w-full text-center text-white font-bold ">
        Copyright © Created by Remzeey and Pearl{" "}
      </div>
    </div>
  );
};
export default Quiz;
