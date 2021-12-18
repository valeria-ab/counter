import styles from "./Button.module.css";

type ButtonValueType = {
  title: string;
  onClickHandler: () => void;
  disabled: boolean;
};

function Button(props: ButtonValueType) {
  return (
    <div>
      <button
        className={styles.button}
        onClick={props.onClickHandler}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
