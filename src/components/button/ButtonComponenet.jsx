import React from 'react'

function ButtonComponenet({
    label="",
    className="",
    onClick
}) {
  return (
    <div>
        <button 
        className={`${className}`}
        onClick={onClick}
        >
            {label}
        </button>
    </div>
  )
}

export default ButtonComponenet