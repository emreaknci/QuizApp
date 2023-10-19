import React from 'react'
import './Modal.css'
import { useNavigate } from 'react-router-dom'
const Modal = ({ score }) => {
  const navigate=useNavigate()
  
  return (
    <div className='modal'>
      <div className='modal__title'>Score: {score}</div>
      <div onClick={()=>navigate('/')} className='modal__btn'> Start Again!</div>
    </div>
  )
}

export default Modal