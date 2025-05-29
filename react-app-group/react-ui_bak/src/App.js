import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-dom-lib";
import { add } from "react-func-lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          label="Click Me"
          onClick={() => {
            alert("Clicked!" + add(1, 2));
          }}
        />
      </header>
    </div>
  );
}

export default App;
