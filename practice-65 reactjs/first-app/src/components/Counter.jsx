import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0)
  return (
    <div className="counterNew">
      <button onClick={() => { 
        if(count>0)
        setCounter(count-1)
      else
        alert("number cant be negative! ")
      }}>-</button>
      <p>{count}</p>
      <button onClick={()=>{
        setCounter(count+1)
        if(count>=20)
            alert("number cant be greater than 20!")
      }}>+</button>

    </div>
  )
}

export default Counter