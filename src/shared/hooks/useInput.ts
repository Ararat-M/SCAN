import { useState } from "react"
import { type ValueValidation, useValueValidation } from "./useValueValidation";

export function useInput(
  initilaValue = "",
  validations: ValueValidation = {}
  ) {
  const [value, setValue] = useState(initilaValue);
  const [wasUsed, setWasUsed] = useState(false);
  const [isError, errorMsg] = useValueValidation(value, validations);

  return [{
    value,
    setValue,
    isError,
    errorMsg,
    wasUsed,
    setWasUsed
  }]
}