import { Input } from "shared/ui/Input";
import classes from "./searchForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useState } from "react";
import { useValueValidation } from "shared/hooks/useValueValidation";
import { classNames } from "shared/lib/classNames";


export function SearchForm() {
  const [innValue, setInnValue] = useState("");
  const [tonalityValue, setTonalityValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");

  const [innIsError, innErrorMsg] = useValueValidation(innValue, {
    required: true,
    correctPhoneNumber: true
  });
  const [quantityIsError, quantityErrorMsg] = useValueValidation(quantityValue, {
    required: true,
    minValue: 1,
    maxValue: 1000
  });
  const [startDateIsError, startDateErrorMsg] = useValueValidation(startDateValue, {
    required: true,
  });
  const [endDateValueIsError, endDateValueErrorMsg] = useValueValidation(endDateValue, {
    required: true,
    minValue: +startDateValue,
  });

  const formNotCorrect =  innIsError || quantityIsError;

  return (
    <form className={classes.form}>
      <div className={classes["input-field"]}>
        <Input
          className={classes.input}
          required
          id="inn"
          type="text"
          value={innValue}
          setValue={setInnValue}
          isError={innIsError}
          errorMsg={innErrorMsg} 
        />

        <Input
          className={classes.input}
          id="tonality"
          type="text"
          value={tonalityValue}
          setValue={setTonalityValue}
        />

        <Input
          className={classNames(classes.input, [classes["input-quantity"]])}
          required
          id="quantity"
          type="number"
          value={quantityValue}
          setValue={setQuantityValue}
          isError={quantityIsError}
          errorMsg={quantityErrorMsg}
          placeholder="от 1 до 100"
        />
      </div>

      <div className={classes["checkbox-field"]}>
        
      </div>

      {formNotCorrect
        ? <Button disabled className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Поиск</Button>
        : <Button className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Поиск</Button>}
    </form>
  );
}
