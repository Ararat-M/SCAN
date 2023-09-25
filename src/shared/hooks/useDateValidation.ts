import { useEffect, useState } from "react"

export interface DateValidation {
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export function useDateValidation(Date: Date, validations: DateValidation) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [date, setDate] = useState(Date);


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
      setErrorMsg("")
      return
    }
    
    if (maxDate) {
      setIsError(true)
      setErrorMsg("")
      return
    }

    setIsError(false)
  }, [Date])

  return [
    isError,
    errorMsg
  ] as const
}