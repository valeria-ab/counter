import "./../App.css";
import Button from "../common/Button/Button";
import DisplayWithIncrement from "../CounterWithIncrement/DisplayWithInc/DisplayWithIncrement";

type CounterPropsType = {
  inc: number;
  increase: () => void;
  reset: () => void;
  maxValue: number;
  error: boolean;
  displayMessage: string;
  startValue: number;
};

function Counter(props: CounterPropsType) {
  return (
    <div className={"counter"}>
      <DisplayWithIncrement
        value={props.inc}
        maxValue={props.maxValue}
        error={props.error}
        displayMessage={props.displayMessage}
      />

      <ButtonBlock
        increase={props.increase}
        inc={props.inc}
        maxValue={props.maxValue}
        error={props.error}
        displayMessage={props.displayMessage}
        reset={props.reset}
        startValue={props.startValue}
      />
    </div>
  );
}

type ButtonBlockPropsType = {
  increase: () => void;
  inc: number;
  maxValue: number;
  error: boolean;
  displayMessage: string;
  reset: () => void;
  startValue: number;
};
const ButtonBlock = (props: ButtonBlockPropsType) => {
  return (
    <div className={"buttons"}>
      <Button
        title={"inc"}
        onClickHandler={props.increase}
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
  );
};
export default Counter;
