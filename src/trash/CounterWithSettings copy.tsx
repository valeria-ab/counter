import React, { useState } from "react";
import "./../App.css";
import Button from "../common/Button/Button";
import DisplayCounterItem from "../CounterWithSettings/DisplayCounterWithSettings/DisplaySettingItem/DisplayCounterItem";

type CounterPropsType = {
  setStartValue: (value: number) => void;
  setIncrement: (value: number) => void;
  setMaxValue: (value: number) => void;
  setError: (value: boolean) => void;
  disabled: boolean;
  setDisabled: (value: boolean) => void;
  error: boolean;
  setDisplayMessage: (message: string) => void;
};

function CounterWithSettings(props: CounterPropsType) {
  const [startValue, setstartValue] = useState<number>(0);
  const [maxValue, setMaxVal] = useState<number>(1);

  const [maxValueInputError, setmaxValueInputError] = useState<boolean>(false);
  const [startValueInputError, setstartValueInputError] =
    useState<boolean>(false);

  const ifCorrectValue = () => {
    props.setError(false);
    setstartValueInputError(false);
    setmaxValueInputError(false);
    props.setDisabled(false);
    props.setDisplayMessage("Enter values and press 'set'");
  };
  const handleError = (message: string) => {
    setstartValueInputError(true);
    props.setError(true);
    props.setDisplayMessage(message);
  };

  const setStartValue = (value: number) => {
    setstartValue(value);

    if (value >= 0) {
      setstartValueInputError(false);

      if (value !== maxValue) {
        if (value < maxValue) {
          if (maxValue > 0) {
            // props.setError(false);
            // setmaxValueInputError(false);
            // setstartValueInputError(false);
            // props.setDisabled(false);
            // props.setDisplayMessage("Enter values and press 'set'");
            ifCorrectValue();
          } else {
            setmaxValueInputError(true);
            props.setError(true);
            props.setDisplayMessage("max value должен быть больше 0");
          }
        } else {
          setstartValueInputError(true);
          setmaxValueInputError(true);
          props.setError(true);
          props.setDisplayMessage("start value не может быть больше max value");
        }
      } else {
        setstartValueInputError(true);
        setmaxValueInputError(true);
        props.setError(true);
        props.setDisplayMessage("start value и max value не должны быть равны");
      }
    } else {
      setstartValueInputError(true);
      props.setError(true);
      props.setDisplayMessage("start value должен быть положительным числом");
    }
  };

  const setMaxValue = (value: number) => {
    setMaxVal(value);

    if (value > 0) {
      setmaxValueInputError(false);

      if (value !== startValue) {
        if (value > startValue) {
          if (startValue >= 0) {
            ifCorrectValue();
          } else {
            setstartValueInputError(true);
            handleError("start value не должен быть отрицательным числом");
          }
        } else {
          setmaxValueInputError(true);
          handleError("max value не может быть меньше  start value");
        }
      } else {
        setstartValueInputError(true);
        setmaxValueInputError(true);
        handleError("max value и start value не должны быть равны");
      }
    } else {
      setmaxValueInputError(true);
      handleError("max value должен быть больше нуля");
    }
  };

  const onButtonClick = () => {
    if (maxValue > 0 && startValue >= 0) {
      props.setStartValue(startValue);
      props.setIncrement(startValue);
      props.setMaxValue(maxValue);
      props.setDisabled(true);
      props.setDisplayMessage("");
    } else {
      if (maxValue < 1) {
        setmaxValueInputError(true);
        props.setError(true);
        props.setDisplayMessage("Incorrect Value!");
      }
      if (startValue < 0) {
        setstartValueInputError(true);
        props.setError(true);
        props.setDisplayMessage("Incorrect Value!");
      }
    }
  };

  return (
    <div className={"counter"}>
      <div className={"display-counter-with-value"}>
        <DisplayCounterItem
          title="max value:"
          isError={maxValueInputError}
          value={maxValue}
          onChange={setMaxValue}
        />
        <DisplayCounterItem
          title="start value:"
          isError={startValueInputError}
          value={startValue}
          onChange={setStartValue}
        />
      </div>
      <div className={"buttons"}>
        <Button
          title={"set"}
          onClickHandler={onButtonClick}
          disabled={props.disabled || props.error}
        />
      </div>
    </div>
  );
}

export default CounterWithSettings;
