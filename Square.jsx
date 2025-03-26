import React from 'react'

const Square = (props) => {
  let text = props.value === "Click Me" ? "Click Me" : `Value: ${props.value}`;
  return (
    <>
   
    <div>
     
      <button className="square" value={props.value} onClick={props.handleClick}>{text}</button>
    </div>
    </>
  )
}

export default Square;
