import { useEffect, useState } from "react"

export interface InputValidation {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

export function useInputError(wasUsed: boolean, value: string, validations: InputValidation) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const requairedErr = validations.required && !value;
  const maxLengthErr = validations.maxLength && value.replaceAll(" ", "").length > validations.maxLength;
  const minLengthErr = validations.minLength && value.replaceAll(" ", "").length > 0 && value.replaceAll(" ", "").length < validations.minLength;

  useEffect(() => {
    if (wasUsed) {
      if (requairedErr) {
        setErrorMsg("Заполните поле")
        setIsError(true)
        return
      } else {
        setIsError(false)
      }

      if (minLengthErr) {
        setErrorMsg(`Минимум ${validations.minLength} символов (${value.replaceAll(" ", "").length})`)
        setIsError(true)
        return
      } else {
        setIsError(false)
      }
    }

    if (maxLengthErr) {
      setErrorMsg(`Максимум ${validations.maxLength} символов (${value.replaceAll(" ", "").length})`)
      setIsError(true)
      return
    } else {
      setIsError(false)
    }
  }, [value, wasUsed])

  return {
    isError,
    errorMsg
  }
}