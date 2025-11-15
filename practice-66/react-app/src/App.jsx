import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import './App.css'

function App() {
  
  return (
    <>
     <NavBar/>
     <div className="cardGrid">
     <Card title={"HTML"} desc={"hyper text markup language"}/>
     <Card title={"CSS"} desc={"Cascading Style sheet"}/>
     <Card title="Javascript" desc="SCripting language"/>
     <Footer/>
     </div>
    </>
  )
}

export default App
