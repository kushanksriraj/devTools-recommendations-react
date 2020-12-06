import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="header"> devTools
      <p>some recommended dev tools</p>
      </div>
    
    <main>
    
    <div className="leftPanel">
      {/* <p><strong>Click to see recommendations</strong></p> */}
      <button className="leftPanelButton">code</button>
      <button className="leftPanelButton">docs</button>
      <button className="leftPanelButton">webdev</button>
      <button className="leftPanelButton">devops</button>
    </div>

    <div className="rightPanel">
      {/* This is right leftPanel */}
     
     <ul>
       <li>recommendations<span>5/5</span></li>
       <li>recommendations<span>4/5</span></li>
       <li>recommendations<span>4.5/5</span></li>
       <li>recommendations<span>3/5</span></li>
     </ul>

    </div>

   </main>
   
    </div>
  );
}
