import { useState } from "react"
import { type DateValidation, useDateValidation } from "./useDateValidation";

export function useDateInput(
  initilaValue = "",
  validations: DateValidation = {}
  ) {
  const [value, setValue] = useState(initilaValue);
  const [wasUsed, setWasUsed] = useState(false);
  const [isError, errorMsg] = useDateValidation(new Date(value), validations);

  return [{
    value,
    setValue,
    isError,
    errorMsg,
    wasUsed,
    setWasUsed,
    date: new Date(value)
  }]
}