import React from 'react'
import './index.css'

const Button = (props) => {
  
  return (
    <div className='ButtonContainer'>
      <button className='button'><span>{props.text}</span></button>
    </div>
  )
}

export default Button