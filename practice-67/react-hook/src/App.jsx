import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[todoName, setTodoName]=useState("")
  const [todos, setTodos] = useState([])

  return (
    <>
      <div>
      <div className='Todo'>
        <input  name=""  value={todoName} placeholder='Enter your Todo here...' onChange={(e)=>{setTodoName(e.target.value)}}/>
        <button onClick={()=>{
          setTodos([...todos, todoName])
          console.log(todos)
          setTodoName("")
        }}>+Add</button>

      </div>
        <div className='todolist'>
          <ul>
            {todos.map(todo=>(

              <li>{todo}</li>
            ))
          }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
