import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type DisplayPropsType = {
  value: number;
  maxValue: number;
  error: string;
  displayMessage: string;
};

function Display(props: DisplayPropsType) {
  let span;

  //console.log("value:", props.value, "maxValue:", props.maxValue);

  if (props.error) {
    span = <span className={`${"error"} ${"regular"}`}>{props.error}</span>;
  } else {
    if (!props.displayMessage) {
      span = (
        <span className={props.value === props.maxValue ? "warning" : ""}>
          {props.value}
        </span>
      );
    } else {
      span = <span className="regular">{props.displayMessage}</span>;
    }
  }

  return (
    <div className={"display"}>
      {span}

      {/* {
      props.error 
      ?  <span className="error">{props.error}</span>
      :  <span className="regular">Enter values and press 'set'</span>
      } */}
    </div>
  );
}

export default Display;
