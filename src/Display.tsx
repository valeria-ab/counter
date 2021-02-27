import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type DisplayPropsType = {
    value:number
}

function Display(props: DisplayPropsType) {

  return (
      <div
          className={props.value===5 ? `${"display"} ${"five-red"}` : "display"}
      >
          {props.value}
      </div>



  );
}

export default Display;
