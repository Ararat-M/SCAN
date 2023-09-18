import { type ReactNode } from "react";
import { classNames } from "shared/lib/classNames";
import classes from "./button.module.scss";

interface ButtonProps {
  children?: ReactNode;
  theme: ButtonTheme;
}

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DEACTIVATED = "deactivated"
}

export function Button({ children, theme }: ButtonProps) {
  return (
    <button className={classNames(classes[theme])}>
      {children}
    </button>
  );
}