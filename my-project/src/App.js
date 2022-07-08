import React, { useState } from 'react';
import { questions } from "./questions";


const App = () => {
 const [showResult,setShowResult] = useState(false)
 const [score,setScore] = useState(0)
 const [question, setquestion] = useState(0)


  return (
    <div className='min-h-screen flex flex-col'>
      <div>

        <div className='text-lg'>Welcome to quick science trivia</div>

        <div>{score}</div>

        {showResult ?

         (<div className='my-64 mx-auto '>

            <div></div>
            <div></div>
            <div></div>

         </div>) :

         (<div>

            <div></div>
            <div></div>
            <div></div>

         </div>) 

        }
      </div>

    </div>
  )
}

export default App