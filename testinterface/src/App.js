import React from "react";
import "./App.css";
import Description from "./Description";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-text">
          <h1>Be your own therapist</h1>
          <p>with <strong>cognitive behaviotal therapy</strong></p>
          <h2>yes, it works.</h2>
        </div>
        <Description />
      </header>
    </div>
  );
}

export default App;
