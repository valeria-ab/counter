import React, { useState } from "react";
import "./App.css";
import CounterWithSettings from "./CounterWithSettings/CounterWithSettings";
import { useDispatch, useSelector } from "react-redux";
import {
  setButtonDisableAC,
  setCurrentValueAC,
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
  const currentValue = useSelector<AppRootStateType, number | null>(
    (state) => state.counter.currentValue
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
  const setCurrentValue = (currentValue: number) => {
    dispatch(setCurrentValueAC(currentValue));
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

  const incHandler = () => {
    if (typeof currentValue === "number") {
      dispatch(setCurrentValueAC(currentValue + 1));
    }
  };
  const reset = () => {
    dispatch(setCurrentValueAC(startValue));
  };

  return (
    <div className="App">
      <CounterWithSettings
        startValue={startValue}
        maxValue={maxValue}
        error={error}
        setError={setError}
        disabled={buttonDisable}
        setDisabled={setButtonDisable}
        setDisplayMessage={setDisplayMessage}
        setIncrement={setCurrentValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
      />
      <CounterWithIncrement
        inc={currentValue}
        incHandler={incHandler}
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
