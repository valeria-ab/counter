import Button from "../common/Button";
import "./../App.css";
import DisplayWithIncrement from "./DisplayWithIncrement";

type CounterPropsType = {
  inc: number;
  increase: () => void;
  reset: () => void;
  maxValue: number;
  error: boolean;
  displayMessage: string;
  startValue: number;
};

function CounterWithIncrement(props: CounterPropsType) {
  return (
    <div className={"counter"}>
      <DisplayWithIncrement
        value={props.inc}
        maxValue={props.maxValue}
        error={props.error}
        displayMessage={props.displayMessage}
      />
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
    </div>
  );
}

export default CounterWithIncrement;
