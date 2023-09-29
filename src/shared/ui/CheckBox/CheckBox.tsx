import { classNames } from "shared/lib/classNames";
import classes from "./checkbox.module.scss";
import { type Dispatch, type SetStateAction, type InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  setCheked: Dispatch<SetStateAction<boolean>>;
}

export function Checkbox({ label, checked, setCheked, ...props }: CheckboxProps) {
  const mods = {
    [classes.checked]: checked ?? false
  };

  return (
    <label htmlFor={props.id} className={classNames(classes.checkbox, [], mods)}>
      <input
        type="checkbox"
        checked={checked}
        id={props.id}
        name={props.name}
        onChange={() => { setCheked((prev) => !prev); }}
      />
      <span className={classes.label}>
        {label}
      </span>
    </label>
  );
}