import DisplayCounterItem from "./DisplaySettingItem/DisplayCounterItem";
import styles from "./../../common/CommonStyles.module.css";
import s from "./DisplayCounterWithSettings.module.css";

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
    <div className={`${styles.display} ${s.displayCounterWithSettings}`}>
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
