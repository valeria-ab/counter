import React from "react";
import "./App.css";

type CounterType = 0 | 1 | 2 | 3 | 4 | 5;
type ButtonValueType = {
  title: string;
  value: number;
  onClickHandler: () => void;

  disabled: boolean;
};

function Button(props: ButtonValueType) {
  return (
    <div className={"button"}>
      <button onClick={props.onClickHandler} disabled={props.disabled}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;
