import classes from "../button/MyButton.module.css";
import { memo } from "react";

// type Props = {
//   text: string;
//   className: string;
//   ...props: any
// };

export const MyButton = memo(({ text, className, ...props }: any) => {
  return (
    <button {...props} className={`${classes.button_style} ${className}`}>
      {text}
    </button>
  );
});
