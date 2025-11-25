import React from 'react'
import './Nav.css'
const Nav = () => {
    const [Mode, setMode] = useState("light")
  return (
    <div className='Nav dark'>
      <div className="logo"><p>React</p></div>
      <div className='links'>

        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            
        </ul>
        <button onClick={()=>{setMode("dark")}}>Dark Mode </button>
      </div>
    </div>
  )
}

export default Nav
