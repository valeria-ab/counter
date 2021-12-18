import React, { useState } from "react";
import styles from  "./../common/CommonStyles.module.css";
import Button from "../common/Button/Button";
import { DisplayCounterWithSettings } from "./DisplayCounterWithSettings/DisplayCounterWithSettings";

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
  const handleSetMaxValueError = (message: string) => {
    setmaxValueInputError(true);
    props.setError(true);
    props.setDisplayMessage(message);
  };
  const handleSetStartValueError = (message: string) => {
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
            ifCorrectValue();
          } else {
            handleSetMaxValueError("max value должен быть больше 0");
          }
        } else {
          setmaxValueInputError(true);
          handleSetStartValueError(
            "start value не может быть больше max value"
          );
        }
      } else {
        setmaxValueInputError(true);
        handleSetStartValueError(
          "start value и max value не должны быть равны"
        );
      }
    } else {
      handleSetStartValueError("start value должен быть положительным числом");
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
            handleSetStartValueError(
              "start value не должен быть отрицательным числом"
            );
          }
        } else {
          handleSetMaxValueError("max value не может быть меньше  start value");
        }
      } else {
        setstartValueInputError(true);
        handleSetMaxValueError("max value и start value не должны быть равны");
      }
    } else {
      handleSetMaxValueError("max value должен быть больше нуля");
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
        handleSetMaxValueError("Incorrect Value!");
      }
      if (startValue < 0) {
        handleSetStartValueError("Incorrect Value!");
      }
    }
  };

  return (
    <div className={styles.counter}>
      <DisplayCounterWithSettings
        maxValueInputError={maxValueInputError}
        startValueInputError={startValueInputError}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        startValue={startValue}
        setStartValue={setStartValue}
      />

      <div className={styles.buttonsBlock}>
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
