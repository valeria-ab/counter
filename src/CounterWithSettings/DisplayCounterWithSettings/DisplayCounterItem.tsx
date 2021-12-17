import { ChangeEvent } from "react";


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
    <div className={"display-counter-item"}>
      <span>{props.title}</span>

      <input
        className={props.isError ? "counterInput inputError" : "counterInput"}
        type="number"
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
};

export default DisplayCounterItem;
