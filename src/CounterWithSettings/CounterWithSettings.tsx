import React, { useState } from "react";
import styles from "./../common/CommonStyles.module.css";
import Button from "../common/Button/Button";
import { DisplayCounterWithSettings } from "./DisplayCounterWithSettings/DisplayCounterWithSettings";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../redux/store";
import {
  setMaxValueInputErrorAC,
  setStartValueInputErrorAC,
} from "../redux/counter-reducer";

type CounterPropsType = {
  startValue: number;
  maxValue: number;
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
  const dispatch = useDispatch();
  const startValueInputError = useSelector<AppRootStateType, boolean>(
    (state) => state.counter.startValueInputError
  );
  const maxValueInputError = useSelector<AppRootStateType, boolean>(
    (state) => state.counter.maxValueInputError
  );

  const setStartValueInputError = (startValueInputError: boolean) => {
    dispatch(setStartValueInputErrorAC(startValueInputError));
  };
  const setMaxValueInputError = (maxValueInputError: boolean) => {
    dispatch(setMaxValueInputErrorAC(maxValueInputError));
  };

  const ifCorrectValue = () => {
    props.setError(false);
    setStartValueInputError(false);
    setMaxValueInputError(false);
    props.setDisabled(false);
    props.setDisplayMessage("Enter values and press 'set'");
  };
  const handleSetMaxValueError = (message: string) => {
    setMaxValueInputError(true);
    props.setError(true);
    props.setDisplayMessage(message);
  };
  const handleSetStartValueError = (message: string) => {
    setStartValueInputError(true);
    props.setError(true);
    props.setDisplayMessage(message);
  };

  const setStartValue = (value: number) => {
    props.setStartValue(value);

    if (value >= 0) {
      setStartValueInputError(false);

      if (value !== props.maxValue) {
        if (value < props.maxValue) {
          if (props.maxValue > 0) {
            ifCorrectValue();
          } else {
            handleSetMaxValueError("max value должен быть больше 0");
          }
        } else {
          setMaxValueInputError(true);
          handleSetStartValueError(
            "start value не может быть больше max value"
          );
        }
      } else {
        setMaxValueInputError(true);
        handleSetStartValueError(
          "start value и max value не должны быть равны"
        );
      }
    } else {
      handleSetStartValueError("start value должен быть положительным числом");
    }
  };

  const setMaxValue = (value: number) => {
    props.setMaxValue(value);

    if (value > 0) {
      setMaxValueInputError(false);

      if (value !== props.startValue) {
        if (value > props.startValue) {
          if (props.startValue >= 0) {
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
        setStartValueInputError(true);
        handleSetMaxValueError("max value и start value не должны быть равны");
      }
    } else {
      handleSetMaxValueError("max value должен быть больше нуля");
    }
  };

  const onButtonClick = () => {
    if (props.maxValue > 0 && props.startValue >= 0) {
      props.setStartValue(props.startValue);
      props.setIncrement(props.startValue);
      props.setMaxValue(props.maxValue);
      props.setDisabled(true);
      props.setDisplayMessage("");
    } else {
      if (props.maxValue < 1) {
        handleSetMaxValueError("Incorrect Value!");
      }
      if (props.startValue < 0) {
        handleSetStartValueError("Incorrect Value!");
      }
    }
  };

  return (
    <div className={styles.counter}>
      <DisplayCounterWithSettings
        maxValueInputError={maxValueInputError}
        startValueInputError={startValueInputError}
        maxValue={props.maxValue}
        setMaxValue={setMaxValue}
        startValue={props.startValue}
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
