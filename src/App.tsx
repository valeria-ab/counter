import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CounterWithSettings from "./CounterWithSettings";

function App() {
  const [startValue, setStartValue] = useState<number>(0);
  const [inc, setIncrement] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [displayMessage, setDisplayMessage] = useState<string>(
    "Enter values and press 'set'"
  );
  const [disabled, setDisabled] = useState<boolean>(false);

  const increment = () => {
    setIncrement(inc + 1);
  };
  const reset = () => {
    setIncrement(startValue);
  };

  return (
    <div className="App">
      <CounterWithSettings
        inc={inc}
        setStartValue={setStartValue}
        increment={increment}
        reset={reset}
        setIncrement={setIncrement}
        setMaxValue={setMaxValue}
        setError={setError}
        disabled={disabled}
        setDisabled={setDisabled}
        error={error}
        setDisplayMessage={setDisplayMessage}
      />
      <Counter
        displayMessage={displayMessage}
        inc={inc}
        increment={increment}
        reset={reset}
        maxValue={maxValue}
        error={error}
        startValue={startValue}
      />
    </div>
  );
}

export default App;
