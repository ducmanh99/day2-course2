import React from 'react'
import './style.css'

const Input = (props) => {
  return (
    <div className='listInput'>
        <input className='input' type="text" placeholder={props.text}/>
        
    </div>
  )
}

export default Input