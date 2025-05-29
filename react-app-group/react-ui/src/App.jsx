import logo from "./logo.svg";
import "./App.css";
import { sumTwoNum, MyComponent } from "react-ts-lib";
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
          Learn React.{sumTwoNum(1, 2)}
        </a>
        <MyComponent name="frank" />
      </header>
    </div>
  );
}

export default App;
