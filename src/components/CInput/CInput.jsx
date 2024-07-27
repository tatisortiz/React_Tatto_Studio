import React from 'react'
import "./CInput.css"

export const CInput = ( 
  { 
    type = 'text',
    name = "",
    placeholder = "",
    emitFunction,
    emitOnClickButton,
    className,
    min,
    value,
    label
  } 
) => {
  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
      </div>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={emitFunction}
        className={className}
        min={min}
        onClick={emitOnClickButton}
        value={value}
      />    
    </>
  )
}