import React, { useEffect, useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'
const Introduce = () => {
  const difficulty = ['easy', 'medium', 'hard']
  const [diffChange, setDiffChange] = useState("easy");
  const navigate=useNavigate()
  const TOTAL_QUESTIONS = 10;
  const startQuiz = () => {
    if (diffChange) {
      navigate(`/quiz/${diffChange}/${TOTAL_QUESTIONS}`)
    }
  }
  return (
      <div className='introduce' >
        <div className="introduce__container">
          <img src="../../../dist/assets/quiz.png" alt="" />
          <Dropdown data={difficulty} setDiffChange={setDiffChange}/>
          <div onClick={startQuiz} className='introduce__btn'> Start Quiz!</div>
        </div>
      </div>
  )
}

export default Introduce