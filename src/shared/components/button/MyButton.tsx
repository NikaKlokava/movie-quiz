import classes from "../button/MyButton.module.css";
import { memo } from "react";

export const MyButton = memo(({ text, className, ...props }: any) => {
  return (
    <button {...props} className={`${classes.button_style} ${className}`}>
      {text}
    </button>
  );
});
