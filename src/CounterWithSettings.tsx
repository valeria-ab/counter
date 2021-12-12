import React, { ChangeEvent, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

type CounterPropsType = {
  value: number;
  increment: () => void;
  reset: () => void;
  setValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  setError: (value: string) => void;
  disabled: boolean;
  setDisabled: (value: boolean) => void;
  error: string;
};

function CounterWithSettings(props: CounterPropsType) {
  const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) > 0) {
      props.setError("");
      props.setDisabled(false);
      props.setValue(+e.currentTarget.value);
    } else {
      props.setError("Incorrect Value!");
    }
  };
  const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) > 0) {
      props.setError("");
      props.setDisabled(false);
      props.setMaxValue(+e.currentTarget.value);
    } else {
      props.setError("Incorrect Value!");
    }
  };

  const onButtonClick = () => props.setDisabled(true);

  return (
    <div className={"counter"}>
      <div className={"display-counter-with-value"}>
        <div className={"display-counter-items"}>
          <span>max value:</span>
          <input
            className={props.error ? "counterInput inputError" : "counterInput"}
            type="number"
            placeholder="0"
            onChange={setMaxValue}
          />
        </div>
        <div className={"display-counter-items"}>
          <span>start value:</span>

          <input
            className="counterInput"
            type="number"
            placeholder="0"
            onChange={setStartValue}
          />
        </div>
      </div>
      <div className={"buttons"}>
        <Button
          title={"set"}
          value={props.value}
          onClickHandler={onButtonClick}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
}

export default CounterWithSettings;
