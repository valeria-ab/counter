import React from "react";
import "./../App.css";

type DisplayPropsType = {
  value: number;
  maxValue: number;
  error: boolean;
  displayMessage: string;
};

function DisplayWithIncrement(props: DisplayPropsType) {
  return (
    <div className={"display"}>
      {props.displayMessage ? (
        <span className={props.error ? "error regular" : "regular"}>
          {props.displayMessage}
        </span>
      ) : (
        <span className={props.value === props.maxValue ? "warning" : ""}>
          {props.value}
        </span>
      )}
    </div>
  );
}

export default DisplayWithIncrement;
