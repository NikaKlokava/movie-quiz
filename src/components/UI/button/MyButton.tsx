import classes from "../button/MyButton.module.css";
import { memo } from "react";

const MyButton = memo(({ text, ...props }: any) => {
  return (
    <button {...props} className={classes.button_style}>
      {text}
    </button>
  );
});

export default MyButton;
