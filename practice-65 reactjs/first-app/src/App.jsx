import React, { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

const App = () => {

  const [counter, setCounter] = useState(0)
  return (
    <>
    
    <div className="counter">
      <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter + 1)
        if(counter==20){
          setCounter("reached max")
        }

      }}>Click Me</button>
    </div>
    <Counter/>
    </>
  )
}

export default App