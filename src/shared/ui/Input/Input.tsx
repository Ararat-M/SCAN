import { Dispatch, SetStateAction, type InputHTMLAttributes, useState, useEffect } from "react";
import classes from "./input.module.scss";
import { classNames } from "shared/lib/classNames";
import { type InputValidation, useInputValidation } from "shared/hooks/useInputValidation";

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
        | "login";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  type?: InputType;
  validations?: InputValidation;
  isError?: boolean;
  errorMsg?: string;
}

export function Input({value, label, setValue, validations, isError = false, errorMsg, type="text", ...props}: InputProps) {
  const [wasUsed, setWasUsed] = useState(false);

  const additionalCls = [props.className || ""]
  const mods = {[classes.error]: isError && wasUsed}

  useEffect(() => {
    if (type === "login" && value[0] === "+") {
      const valueWithoutSpaces = value.replaceAll(" ", '');
  
      const valueWithMask = `${valueWithoutSpaces.substring(0, 2)} ${valueWithoutSpaces.substring(2, 5)} ${valueWithoutSpaces.substring(5, 8)} ${valueWithoutSpaces.substring(8, 10)} ${valueWithoutSpaces.substring(10, valueWithoutSpaces.length)}`;
  
      setValue(valueWithMask.trim())
    }
  }, [value])

  return (
    <>
      {label ? (
        // Рендер с label
        <label className={classes.label} htmlFor={props.id}>
          <span>
            {label}
            {props.required && <span style={isError ? {color: "red"} : {}}> *</span>}
          </span>
          
          <input
            id={props.id}
            type={type}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            onBlur={() => !wasUsed && setWasUsed(true)}
            className={classNames(classes.input, additionalCls, mods)}
            {...props}
          />
          
          {isError && wasUsed && <span className={classes["error-msg"]}>{errorMsg}</span>}
        </label>
      ) : (
        // Рендер без label
        <>
          <input
            id={props.id}
            type={type}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            onBlur={() => !wasUsed && setWasUsed(true)}
            className={classNames(classes.input, additionalCls, mods)}
            {...props}
          />
          
          {isError && wasUsed && <span className={classes["error-msg"]}>{errorMsg}</span>}
        </>
      )}
    </>
  );
};