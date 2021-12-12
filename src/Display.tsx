import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type DisplayPropsType = {
  value: number;
  maxValue: number;
  error: string
};

function Display(props: DisplayPropsType) {

  return (
    <div
      className={props.value === props.maxValue && props.value > 0 ? `${"display"} ${"warning"}` : "display"}
    >
      {props.error? <span  className="error">{props.error}</span> : props.value}
    </div>
  );
}

export default Display;
