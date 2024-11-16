import React from 'react'

function InputBox({
    value,
    className="",
    onChange,
    type="",
    placeholder=""
    
}) {
  return (
    <div>
        <input 
        type={type}
        value={value}
        className={`${className}`}
        onChange={onChange}
        placeholder={placeholder}
        />
    </div>
  )
}

export default InputBox