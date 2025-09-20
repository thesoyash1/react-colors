import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <div 
      className="main-div" 
      style={{ backgroundColor: color }}
    >
      <div className="btnGroup">
        <button className="colorBtn" onClick={()=> setColor(prevColor => "red")}>Red</button>
        <button className="colorBtn" onClick={()=> setColor(prevColor => "black")}>Black</button>
        <button className="colorBtn" onClick={()=> setColor(prevColor => "orange")}>Orange</button>
        <button className="colorBtn" onClick={()=> setColor(prevColor => "olive")}>Olive</button>
        <button className="colorBtn" onClick={()=> setColor(prevColor => "blue")}>Blue</button>
        <button className="colorBtn"onClick={()=> setColor(prevColor => "pink")}> Pink</button>
        <button className="colorBtn" onClick={()=> setColor(prevColor => "green")}>Green</button>
      </div>
    </div>
  )
}

export default App;
