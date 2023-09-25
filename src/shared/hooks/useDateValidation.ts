import { useEffect, useState } from "react"

export interface DateValidation {
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export function useDateValidation(Date: Date, validations: DateValidation) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const requaired = validations.required && Date.toString() === "Invalid Date";
  const minDate = validations.minDate && (Date < validations.minDate);
  const maxDate = validations.maxDate && (Date > validations.maxDate);

  useEffect(() => {
    if (requaired) {
      setErrorMsg("Заполните дату")
      setIsError(true)
      return
    }

    if (minDate) {
      setIsError(true)
      return
    }
    
    if (maxDate) {
      setIsError(true)
      return
    }

    setIsError(false)
    setErrorMsg("")
  }, [Date])

  return [
    isError,
    errorMsg
  ] as const
}