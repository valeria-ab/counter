import React from "react";
import styles from "./../../common/CommonStyles.module.css";
import s from "./DisplayCounterWithInc.module.css";

type DisplayPropsType = {
  value: number | null;
  maxValue: number;
  error: boolean;
  displayMessage: string;
};

function DisplayWithIncrement(props: DisplayPropsType) {
  return (
    <div className={`${styles.display} ${s.displayCounterWithIncrement}`}>
      {props.displayMessage ? (
        <span className={props.error ? `${s.error} ${s.regular}` : s.regular}>
          {props.displayMessage}
        </span>
      ) : (
        <span className={props.value === props.maxValue ? s.warning : ""}>
          {props.value}
        </span>
      )}
    </div>
  );
}

export default DisplayWithIncrement;
