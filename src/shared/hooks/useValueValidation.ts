import { useEffect, useState } from "react";
import { type InnError, validateInn } from "shared/lib/validateInn/validateInn";

export interface ValueValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  correctPhoneNumber?: boolean;
  correctInn?: boolean;
}

export function useValueValidation(value: string, validations: ValueValidation) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const valueLength = value.replaceAll(" ", "").length;
  const valueWithoutSpaces = value.replaceAll(" ", "");
  const correctPhoneNumberRegex = /^[0-9+]+$/;

  const error: InnError = {
    code: 0,
    message: ""
  };

  const correctInn = validations.correctInn && !validateInn(valueWithoutSpaces, error);
  const requaired = validations.required && !value;
  const minLength = validations.minLength && (valueLength > 0) && (valueLength < validations.minLength);
  const maxLength = validations.maxLength && (valueLength > validations.maxLength);
  const minValue = validations.minValue && (+value < validations.minValue);
  const maxValue = validations.maxValue && (+value > validations.maxValue);
  const correctPhoneNumber = validations.correctPhoneNumber && value[0] === "+" && (!(valueLength === 12) || !correctPhoneNumberRegex.test(value.replace(/ /g, "")));

  useEffect(() => {
    if (requaired) {
      setErrorMsg("Заполните поле");
      setIsError(true);
      return;
    }

    if (minLength) {
      setErrorMsg(`Минимум ${validations.minLength} символов (${valueLength})`);
      setIsError(true);
      return;
    }

    if (maxLength) {
      setErrorMsg(`Максимум ${validations.maxLength} символов (${valueLength})`);
      setIsError(true);
      return;
    }

    if (minValue) {
      setErrorMsg(`Минимум ${validations.minValue}`);
      setIsError(true);
      return;
    }

    if (maxValue) {
      setErrorMsg(`Максимум ${validations.maxValue}`);
      setIsError(true);
      return;
    }

    if (correctPhoneNumber) {
      setErrorMsg("Введите корректные данные");
      setIsError(true);
      return;
    }

    if (correctInn) {
      setErrorMsg(error.message);
      setIsError(true);
      return;
    }

    setIsError(false);
  }, [value]);

  return [
    isError,
    errorMsg
  ] as const;
}