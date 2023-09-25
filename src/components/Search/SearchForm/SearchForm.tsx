import { Input } from "shared/ui/Input";
import classes from "./searchForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useState } from "react";
import { useValueValidation } from "shared/hooks/useValueValidation";
import { classNames } from "shared/lib/classNames";
import { useDateValidation } from "shared/hooks/useDateValidation";
import { useNavigate } from "react-router";
import { Label } from "shared/ui/Lable";
import { useInput } from "shared/hooks/useInput";
import { useDateInput } from "shared/hooks/useDateInput";

export function SearchForm() {
  const navigate = useNavigate();

  const [innInput] = useInput("", { required: true });
  const [quantityInput] = useInput("", { required: true, minValue: 1, maxValue: 1000 });
  const [tonalityInput] = useInput("any");

  const [startDateInput] = useDateInput("", { required: true });
  const [endDateInput] = useDateInput("", { required: true });
  
  const dateNotCorrect = +startDateInput.date > +endDateInput.date;
  const formNotCorrect =  innInput.isError || innInput.isError || endDateInput.isError || startDateInput.isError;

  function redirectToResult() {
    navigate(`/result?inn=${innInput.value}&tonality=${tonalityInput.value}&quantity=${quantityInput.value}`)
  }

  return (
    <form className={classes.form}>
      <div className={classes["input-field"]}>
        <Label id="inn" text="ИНН компании" required isError={innInput.isError && innInput.wasUsed}>
          <Input
            className={classes.input}
            required
            id="inn"
            type="text"
            value={innInput.value}
            setValue={innInput.setValue}
            wasUsed={innInput.wasUsed}
            setWasUsed={innInput.setWasUsed}
            isError={innInput.isError}
            errorMsg={innInput.errorMsg} 
          />
        </Label>
        
        <Label id="tonality" text="Тональность">
          <select id="tonality"
            className={classNames(classes.input, [classes["input-select"]])}
            value={tonalityInput.value}
            onChange={(e) => tonalityInput.setValue(e.currentTarget.value)}
          >
            <option disabled>Выберите тональность</option>
            <option value="any">Любая</option>
          </select>
        </Label>

        <Label id="quantity" text="Количество документов в выдаче" required isError={quantityInput.isError && quantityInput.wasUsed}>
          <Input
            className={classNames(classes.input, [classes["input-quantity"]])}
            required
            id="quantity"
            type="number"
            placeholder="от 1 до 1000"
            value={quantityInput.value}
            setValue={quantityInput.setValue}
            wasUsed={quantityInput.wasUsed}
            setWasUsed={quantityInput.setWasUsed}
            isError={quantityInput.isError}
            errorMsg={quantityInput.errorMsg} 
          />
        </Label>

        <Label 
          text="Диапазон поиска"
          required
          isError={(startDateInput.isError && startDateInput.wasUsed) || (endDateInput.isError && endDateInput.wasUsed)}
        >
          <div className={classes["input-date-field"]}>
            <Input
              className={classNames(classes.input, [classes["input-date"]])}
              type="date"
              value={startDateInput.value}
              setValue={startDateInput.setValue}
              wasUsed={startDateInput.wasUsed}
              setWasUsed={startDateInput.setWasUsed}
              isError={startDateInput.isError || dateNotCorrect}
              errorMsg={startDateInput.errorMsg} 
            />

            <Input
              className={classNames(classes.input, [classes["input-date"]])}
              type="date"
              value={endDateInput.value}
              setValue={endDateInput.setValue}
              wasUsed={endDateInput.wasUsed}
              setWasUsed={endDateInput.setWasUsed}
              isError={endDateInput.isError || dateNotCorrect}
              errorMsg={endDateInput.errorMsg} 
            />
          
            {dateNotCorrect && <span>Введите корректные данные</span>}
          </div>
        </Label>
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
