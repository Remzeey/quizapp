import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="text-center p-4 mt-24 mb-16">
        <h1 className="text-2xl font-bold mb-8 ">Welcome to Science Quiz</h1>
        <p className="text-xl mt-24 leading-10">
          Take our quick quiz, to help you grade <br></br> your knowledge about
          general science.<br></br>Our quiz comprises of various questions
          <br></br> from Easy, Medium, Hard. You get instant corrections.
          <br></br> These Sets of questions would help build your understanding.
          <br></br>
          You can begin the quiz.
        </p>
      </div>
      <div
        className=" mx-auto 
      transition duration-150 delay-100 ease-in-out hover:scale-110 text-center w-24 h-8 rounded-lg shadow-lg font-bold bg-green-600 text-white"
      >
        <Link to="/quiz">Start quiz</Link>
      </div>
      <div className="bg-indigo-800 mt-52 w-full text-center text-white font-bold ">
        Copyright © Created by Remzeey and Pearl{" "}
      </div>
    </div>
  );
};

export default App;
