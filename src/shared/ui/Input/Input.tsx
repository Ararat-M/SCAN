import { Dispatch, SetStateAction, type InputHTMLAttributes, useState } from "react";
import classes from "./input.module.scss";
import { classNames } from "shared/lib/classNames";
import { type InputValidation, useInputError } from "shared/hooks/useIntupError";

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
  value: string;
  validations?: InputValidation;
  setValue: Dispatch<SetStateAction<string>>;
  type?: InputType;
}

export function Input({value, setValue, validations, ...props}: InputProps) {
  const [wasUsed, setWasUsed] = useState(false);
  
  const {isError, errorMsg} = useInputError(wasUsed, value, {
    ...validations
  })

  const additionalCls = [props.className || ""]
  const mods = {[classes.error]: isError}

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={() => !wasUsed && setWasUsed(true)}
        className={classNames(classes.input, additionalCls, mods)}
      />
      
      {isError && <span className={classes["error-msg"]}>{errorMsg}</span>}
    </>
  );
};