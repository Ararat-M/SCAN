import { Dispatch, SetStateAction, type InputHTMLAttributes, useEffect } from "react";
import classes from "./input.module.scss";
import { classNames } from "shared/lib/classNames";

function innAndPhoneNumberMask(value: string) {
  const valueWithoutSpaces = value.replaceAll(" ", "");
  
  const valueWithMask = `${valueWithoutSpaces.substring(0, 2)} ${valueWithoutSpaces.substring(2, 5)} ${valueWithoutSpaces.substring(5, 8)} ${valueWithoutSpaces.substring(8, 10)}${valueWithoutSpaces.substring(10, valueWithoutSpaces.length)}`;

  return valueWithMask.trim();
}

type InputType =
        | "date"
        | "datetime-local"
        | "email"
        | "month"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | "radio-button"
        | "login"
        | "inn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  wasUsed: boolean;
  setWasUsed: Dispatch<SetStateAction<boolean>>;
  type?: InputType;
  isError?: boolean;
  errorMsg?: string;
  fluid?: boolean;
}

export function Input({
  value,
  setValue,
  wasUsed,
  setWasUsed,
  isError = false,
  errorMsg,
  type="text",
  fluid,
  ...props
}: InputProps) {
  const additionalCls = [props.className || ""]
  const mods = {[classes.error]: isError && wasUsed}

  useEffect(() => {
    if (type === "login" && value[0] === "+") setValue(innAndPhoneNumberMask);
  
    if (type === "inn") setValue(innAndPhoneNumberMask);
  }, [value, type])

  return (
    <div style={fluid ? { width: "100%" } : { }} className={classes["input-wrapper"]}>
      <input
        style={fluid ? { width: "100%" } : { }}
        {...props}
        type={type}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={(e) => !wasUsed && setWasUsed(true)}
        className={classNames(classes.input, additionalCls, mods)}
      />
      
      {isError && wasUsed && <span className={classes["error-msg"]}>{errorMsg}</span>}
    </div>
  );
};