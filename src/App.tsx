import React, { useState } from "react";
import "./App.css";
import CounterWithSettings from "./CounterWithSettings/CounterWithSettings";
import { useDispatch, useSelector } from "react-redux";
import {
  setButtonDisableAC,
  setDisplayMessageAC,
  setErrorAC,
  setMaxValueAC,
  setStartValueAC,
} from "./redux/counter-reducer";
import { AppRootStateType } from "./redux/store";
import CounterWithIncrement from "./CounterWithIncrement/CounterWithIncrement";

function App() {
  const dispatch = useDispatch();

  const startValue = useSelector<AppRootStateType, number>(
    (state) => state.counter.startValue
  );
  const maxValue = useSelector<AppRootStateType, number>(
    (state) => state.counter.maxValue
  );
  const buttonDisable = useSelector<AppRootStateType, boolean>(
    (state) => state.counter.buttonDisable
  );
  const error = useSelector<AppRootStateType, boolean>(
    (state) => state.counter.error
  );
  const displayMessage = useSelector<AppRootStateType, string>(
    (state) => state.counter.displayMessage
  );

  const setStartValue = (startValue: number) => {
    dispatch(setStartValueAC(startValue));
  };
  const setMaxValue = (maxValue: number) => {
    dispatch(setMaxValueAC(maxValue));
  };
  const setButtonDisable = (value: boolean) => {
    dispatch(setButtonDisableAC(value));
  };
  const setError = (value: boolean) => {
    dispatch(setErrorAC(value));
  };
  const setDisplayMessage = (message: string) => {
    dispatch(setDisplayMessageAC(message));
  };

  const [inc, setInc] = useState<number>(startValue);
  const increase = () => {
    setInc(inc + 1);
  };
  const reset = () => {
    setInc(startValue);
  };

  return (
    <div className="App">
      <CounterWithSettings
        error={error}
        setError={setError}
        disabled={buttonDisable}
        setDisabled={setButtonDisable}
        setDisplayMessage={setDisplayMessage}
        setIncrement={setInc}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
      />
      <CounterWithIncrement
        inc={inc}
        increase={increase}
        reset={reset}
        error={error}
        displayMessage={displayMessage}
        maxValue={maxValue}
        startValue={startValue}
      />
    </div>
  );
}

export default App;
