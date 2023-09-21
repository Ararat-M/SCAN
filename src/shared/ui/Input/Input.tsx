import { type InputHTMLAttributes } from "react";
import classes from "./input.module.scss";
import { classNames } from "shared/lib/classNames";

type InputType =
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'month'
        | 'number'
        | 'password'
        | 'search'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
}

export function Input({...props}: InputProps) {
  const additionalCls = [props.className || ""]

  return (
    <input
      className={classNames(classes.input, additionalCls)}
      {...props}
    />
  );
};