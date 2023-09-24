import { useEffect, useState } from "react"

export interface InputValidation {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  correctPhoneNumber?: boolean;
}

export function useInputValidation(value: string, validations: InputValidation, wasUsed = true) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const valueLength = value.replaceAll(" ", '').length;
  const correctPhoneNumberRegex = /^[0-9+]+$/;

  const requairedErr = wasUsed && validations.required && !value;
  const minLengthErr = wasUsed && validations.minLength && (valueLength > 0) && (valueLength < validations.minLength);
  const correctPhoneNumber = wasUsed && validations.correctPhoneNumber && value[0] === "+" && (!(valueLength === 12) || !correctPhoneNumberRegex.test(value.replace(/ /g, "")))
  const maxLengthErr = validations.maxLength && (valueLength > validations.maxLength);

  useEffect(() => {
    if (requairedErr) {
      setErrorMsg("Заполните поле")
      setIsError(true)
      return
    }

    if (minLengthErr) {
      setErrorMsg(`Минимум ${validations.minLength} символов (${valueLength})`)
      setIsError(true)
      return
    }

    if (maxLengthErr) {
      setErrorMsg(`Максимум ${validations.maxLength} символов (${valueLength})`)
      setIsError(true)
      return
    }

    if (correctPhoneNumber) {
      setErrorMsg("Введите корректные данные")
      setIsError(true)
      return
    }

    setIsError(false)
  }, [value, wasUsed])

  return [
    isError,
    errorMsg
  ] as const
}