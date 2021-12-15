import React, { ChangeEvent, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

type CounterPropsType = {
  inc: number;
  increment: () => void;
  reset: () => void;
  setStartValue: (value: number) => void;
  setIncrement: (value: number) => void;
  setMaxValue: (value: number) => void;
  setError: (value: string) => void;
  disabled: boolean;
  setDisabled: (value: boolean) => void;
  error: string;

  setDisplayMessage: (message: string) => void;
};

function CounterWithSettings(props: CounterPropsType) {
  const [startValue, setstartValue] = useState<number>(0);
  const [maxValue, setMaxVal] = useState<number>(5);

  const [maxValueInputError, setmaxValueInputError] = useState<boolean>(false);
  const [startValueInputError, setstartValueInputError] =
    useState<boolean>(false);

  //console.log("startValue:", startValue, "maxValue:", maxValue);

  const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setstartValue(+e.currentTarget.value);
    if (
      Number(e.currentTarget.value) >= 0 &&
      Number(e.currentTarget.value) !== maxValue
    ) {
      props.setError("");
      setstartValueInputError(false);
      props.setDisabled(false);

      props.setDisplayMessage("Enter values and press 'set'");
      //props.setValue();
    } else {
      setstartValueInputError(true);
      props.setError("Incorrect Value!");
    }
  };
  const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxVal(+e.currentTarget.value);
    if (
      Number(e.currentTarget.value) > 0 &&
      Number(e.currentTarget.value) !== startValue
    ) {
      props.setError("");
      setmaxValueInputError(false);
      props.setDisabled(false);

      props.setDisplayMessage("Enter values and press 'set'");
      //props.setMaxValue();
    } else {
      setmaxValueInputError(true);
      props.setError("Incorrect Value!");
    }
  };

  const onButtonClick = () => {
    if (maxValue) {
      props.setStartValue(startValue);
      props.setIncrement(startValue);
      props.setMaxValue(maxValue);
      props.setDisabled(true);
      props.setDisplayMessage("");
    }
  };

  return (
    <div className={"counter"}>
      <div className={"display-counter-with-value"}>
        <div className={"display-counter-items"}>
          <span>max value:</span>
          <input
            className={
              maxValueInputError ? "counterInput inputError" : "counterInput"
            }
            type="number"
            value={maxValue}
            onChange={setMaxValue}
          />
        </div>
        <div className={"display-counter-items"}>
          <span>start value:</span>

          <input
            className={
              startValueInputError ? "counterInput inputError" : "counterInput"
            }
            type="number"
            value={startValue}
            onChange={setStartValue}
          />
        </div>
      </div>
      <div className={"buttons"}>
        <Button
          title={"set"}
          onClickHandler={onButtonClick}
          disabled={props.disabled || props.error.length > 1}
        />
      </div>
    </div>
  );
}

export default CounterWithSettings;
