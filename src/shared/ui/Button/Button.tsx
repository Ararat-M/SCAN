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
  CLEAR = "clear",
  BASIC = "basic"
}

export function Button({ children, theme, className, ...props }: ButtonProps) {

  const additionalCls = [
    className || ""
  ]

  return (
    <button {...props} className={classNames(classes[theme], [...additionalCls])}>
      {children}
    </button>
  );
}