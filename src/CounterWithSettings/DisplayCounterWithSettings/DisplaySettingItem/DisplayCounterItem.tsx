import { ChangeEvent } from "react";
import s from "./DisplayCounterItem.module.css";

type DisplayCounterItemProps = {
  title: string;
  isError: boolean;
  value: number;
  onChange: (value: number) => void;
};
const DisplayCounterItem = (props: DisplayCounterItemProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(+e.currentTarget.value);
  };
  return (
    <div className={s.displayCounterItem}>
      <span>{props.title}</span>

      <input
        className={
          props.isError ? `${s.counterInput} ${s.inputError}` : s.counterInput
        }
        type="number"
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
};

export default DisplayCounterItem;
