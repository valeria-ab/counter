import DisplayCounterItem, {
} from "./DisplayCounterItem";
import "./../../App.css";

type DisplayCounterWithSettingsProps = {
  maxValueInputError: boolean;
  startValueInputError: boolean;
  maxValue: number;
  startValue: number;
  setMaxValue: (value: number) => void;
  setStartValue: (value: number) => void;
};
export const DisplayCounterWithSettings = (
  props: DisplayCounterWithSettingsProps
) => {
  return (
    <div className={"display-counter-with-value"}>
      <DisplayCounterItem
        title="max value:"
        isError={props.maxValueInputError}
        value={props.maxValue}
        onChange={props.setMaxValue}
      />
      <DisplayCounterItem
        title="start value:"
        isError={props.startValueInputError}
        value={props.startValue}
        onChange={props.setStartValue}
      />
    </div>
  );
};
