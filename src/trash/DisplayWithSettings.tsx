import { ChangeEvent, useState } from "react";

type DisplayWithSettingsPropsType = {
    setError: (value: string) => void;
    disabled: boolean;
    setDisabled: (value: boolean) => void;
    setDisplayMessage: (message: string) => void;
  };
  const DisplayWithSettings = (props: DisplayWithSettingsPropsType) => {
    const [startValue, setstartValue] = useState<number>(0);
    const [maxValue, setMaxVal] = useState<number>(1);
    const [maxValueInputError, setmaxValueInputError] = useState<boolean>(false);
    const [startValueInputError, setstartValueInputError] =
      useState<boolean>(false);
  
    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
      setstartValue(+e.currentTarget.value);
  
      if (Number(e.currentTarget.value) >= 0) {
        setstartValueInputError(false);
  
        if (Number(e.currentTarget.value) !== maxValue) {
          if (Number(e.currentTarget.value) < maxValue) {
            if (maxValue > 0) {
              props.setError("");
              setmaxValueInputError(false);
              setstartValueInputError(false);
              props.setDisabled(false);
              props.setDisplayMessage("Enter values and press 'set'");
            } else {
              setmaxValueInputError(true);
              props.setError("max value должен быть больше 0");
            }
          } else {
            setstartValueInputError(true);
            setmaxValueInputError(true);
            props.setError("start value не может быть больше max value");
          }
        } else {
          setstartValueInputError(true);
          setmaxValueInputError(true);
          props.setError("start value и max value не должны быть равны");
        }
      } else {
        setstartValueInputError(true);
        props.setError("start value не должен быть отрицательным числом");
      }
    };
    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxVal(+e.currentTarget.value);
  
      if (Number(e.currentTarget.value) > 0) {
        setmaxValueInputError(false);
  
        if (Number(e.currentTarget.value) !== startValue) {
          if (Number(e.currentTarget.value) > startValue) {
            if (startValue >= 0) {
              props.setError("");
              setstartValueInputError(false);
              setmaxValueInputError(false);
              props.setDisabled(false);
              props.setDisplayMessage("Enter values and press 'set'");
            } else {
              setstartValueInputError(true);
              props.setError("start value не должен быть отрицательным числом");
            }
          } else {
            setmaxValueInputError(true);
            props.setError("max value не может быть меньше  start value");
          }
        } else {
          setstartValueInputError(true);
          setmaxValueInputError(true);
          props.setError("max value и start value не должны быть равны");
        }
      } else {
        setmaxValueInputError(true);
        props.setError("max value должен быть больше нуля");
      }
    };
  
    return (
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
    );
  };
  