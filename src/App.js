import { useState } from "react";
import "./App.css";

function App() {
  const[bgColor,setBgColor]=useState("")
  const colorChange=(color)=>{
    setBgColor(color)
  }
  console.log(bgColor);
  return (
    <>
    <div style={{width:"100%",height:"100vh",backgroundColor:bgColor}} className="d-flex flex-column justify-content-center align-items-center">
       
          <h1 className="heading">CHOOSE A COLOR</h1>
          <div className="btn-list d-flex  justify-content-around align-items-center mb-3">
            <button onClick={()=>colorChange("violet")} style={{backgroundColor:"violet"}} className="btn"></button>
            <button onClick={()=>colorChange("indigo")} style={{backgroundColor:"indigo"}} className="btn "></button>
            <button onClick={()=>colorChange("blue")} style={{backgroundColor:"blue"}} className="btn"></button>
            <button onClick={()=>colorChange("green")} style={{backgroundColor:"green"}} className="btn"></button>
          </div>
          <div className="btn-list d-flex  justify-content-around align-items-center ">
            <button onClick={()=>colorChange("yellow")} style={{backgroundColor:"yellow"}} className="btn"></button>
            <button onClick={()=>colorChange("orange")} style={{backgroundColor:"orange"}} className="btn"></button>
            <button onClick={()=>colorChange("red")} style={{backgroundColor:"red"}} className="btn"></button>
            <button onClick={()=>colorChange("black")} style={{backgroundColor:"black"}} className="btn"></button>
          </div>
       
    </div>
    </>
  )
}

export default App;