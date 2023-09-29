import { type ReactNode } from "react";
import classes from "./label.module.scss";

interface LabelProps {
  children: ReactNode;
  text: string;
  required?: boolean;
  id?: string;
  isError?: boolean;
}

export function Label({ children, text, required, id, isError }: LabelProps) {
  return (
    <label htmlFor={id} >
      <span className={classes["label-text"]}>
        {text}{required && <span className={isError ? classes["label-error-mark"] : ""}>*</span>}
      </span>
      {children}
    </label>
  );
}