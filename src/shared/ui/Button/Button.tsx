import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames";
import classes from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  theme: ButtonTheme;
}

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DEACTIVATED = "deactivated",
  CLEAR = "clear"
}

export function Button({ children, theme, ...props }: ButtonProps) {
  return (
    <button {...props} className={classNames(classes[theme])}>
      {children}
    </button>
  );
}