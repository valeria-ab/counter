import React from "react";
import "./../App.css";

type ButtonValueType = {
  title: string;
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
