import logo from "./logo.svg";
import "./App.css";
import TestTitle from "./components/TestTitle";

const test = "Serengia";

import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>src/App.js</code>and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestTitle />
      </header>
    </div>
  );
}

export default App;
