import React from 'react'

export const CInput = ( 
  { 
    type = 'text',
    name = "",
    placeholder = "",
    emitFunction,
    emitOnClickButton,
    className,
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
        onClick={emitOnClickButton}
        value={value}
      />    
    </>
  )
}