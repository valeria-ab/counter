import React, { useState } from "react";
import { parentPort } from "worker_threads";
import logo from "../logo.svg";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

type CounterPropsType = {
  inc: number;
  increment: () => void;
  reset: () => void;
  maxValue: number;
  error: string;
  displayMessage: string;
  startValue: number;
};

function Counter(props: CounterPropsType) {
  return (
    <div className={"counter"}>
      <Display
        value={props.inc}
        maxValue={props.maxValue}
        error={props.error}
        displayMessage={props.displayMessage}
      />
      <div className={"buttons"}>
        <Button
         
          title={"inc"}
          onClickHandler={props.increment}
          disabled={
            props.inc === props.maxValue || props.displayMessage.length > 1
          }
        />
        <Button
  
          title={"reset"}
          onClickHandler={props.reset}
          disabled={
            props.inc === props.startValue || props.displayMessage.length > 1 || props.error.length > 1
          }
        />
      </div>
    </div>
  );
}

export default Counter;
