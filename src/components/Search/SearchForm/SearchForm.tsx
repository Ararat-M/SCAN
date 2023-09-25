import { Input } from "shared/ui/Input";
import classes from "./searchForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useState } from "react";
import { useValueValidation } from "shared/hooks/useValueValidation";
import { classNames } from "shared/lib/classNames";
import { useDateValidation } from "shared/hooks/useDateValidation";
import { useNavigate } from "react-router";

export function SearchForm() {
  const navigate = useNavigate();

  const [innValue, setInnValue] = useState("");
  const [tonalityValue, setTonalityValue] = useState("any");
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

  const [startDateValueIsError, startDateValueErrorMsg] = useDateValidation(new Date(startDateValue), {
    required: true,
    maxDate: new Date(endDateValue)
  });
  const [endDateValueIsError, endDateValueErrorMsg] = useDateValidation(new Date(endDateValue), {
    required: true,
    minDate: new Date(startDateValue)
  });

  const dateNotCorrect = +new Date(startDateValue) > +new Date(endDateValue);
  const formNotCorrect =  innIsError || quantityIsError || dateNotCorrect || startDateValueIsError || endDateValueIsError;

  function redirectToResult() {
    navigate(`/result?inn=${innValue}&tonality=${tonalityValue}&quantity=${quantityValue}`)
  }

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

        <select className={classNames(classes.input, [classes["input-select"]])} value={tonalityValue} onChange={(e) => setTonalityValue(e.currentTarget.value)}>
          <option disabled>Выберите тональность</option>
          <option value="any">Любая</option>
        </select>

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

        <div className={classes["input-date-field"]}>
          <Input
            className={classNames(classes.input, [classes["input-date"]])}
            type="date"
            value={startDateValue}
            setValue={setStartDateValue}
            isError={startDateValueIsError}
            errorMsg={startDateValueErrorMsg}
            />

          <Input
            className={classNames(classes.input, [classes["input-date"]])}
            type="date"
            value={endDateValue}
            setValue={setEndDateValue}
            isError={endDateValueIsError}
            errorMsg={endDateValueErrorMsg}
          />
          
          {dateNotCorrect && <span>Введите корректные данные</span>}
        </div>
      </div>

      <div className={classes["checkbox-field"]}>
        
      </div>

      {formNotCorrect
        ? <Button disabled className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Поиск</Button>
        : <Button className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY} onClick={(e) => {e.preventDefault(); redirectToResult()}}>Поиск</Button>
      }
    </form>
  );
}
