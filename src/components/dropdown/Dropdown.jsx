import React from 'react'
import './Dropdown.css'
const Dropdown = ({ data, setDiffChange }) => {
  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() +
      str.slice(1);
  }
  return (
    <div className='dropdown' >
      <select onChange={e => setDiffChange(e.target.value)} name="" id="">
        {
          data.map((item, index) => {
            return (
              <option key={index} value={item} onClick={(e) => setDiffChange(e.target.value)}>{capitalizeFirstLetter(item)}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Dropdown