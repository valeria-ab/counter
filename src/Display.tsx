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
    span = <span className="error">{props.error}</span>;
  } else {
    if (!props.displayMessage && props.value >= 0) {
      span = <span>{props.value}</span>;
    } else {
      span = <span className="regular">{props.displayMessage}</span>;
    }
  }

  return (
    <div
      className={
        props.value === props.maxValue && props.value > 0
          ? `${"display"} ${"warning"}`
          : "display"
      }
    >
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
