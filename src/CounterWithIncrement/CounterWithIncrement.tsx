import Button from "../common/Button/Button";
import styles from "./../common/CommonStyles.module.css";
import DisplayWithIncrement from "./DisplayWithInc/DisplayWithIncrement";

type CounterPropsType = {
  inc: number | null;
  incHandler: () => void;
  reset: () => void;
  maxValue: number;
  error: boolean;
  displayMessage: string;
  startValue: number;
};

function CounterWithIncrement(props: CounterPropsType) {
  return (
    <div className={styles.counter}>
      <DisplayWithIncrement
        value={props.inc}
        maxValue={props.maxValue}
        error={props.error}
        displayMessage={props.displayMessage}
      />
      <div className={styles.buttonsBlock}>
        <Button
          title={"inc"}
          onClickHandler={props.incHandler}
          disabled={
            props.inc === props.maxValue ||
            props.displayMessage.length > 1 ||
            props.error
          }
        />
        <Button
          title={"reset"}
          onClickHandler={props.reset}
          disabled={
            props.inc === props.startValue ||
            props.displayMessage.length > 1 ||
            props.error
          }
        />
      </div>
    </div>
  );
}

export default CounterWithIncrement;
