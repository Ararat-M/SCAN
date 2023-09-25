import { Input } from "shared/ui/Input";
import classes from "./searchForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames";
import { useNavigate } from "react-router";
import { Label } from "shared/ui/Lable";
import { useInput } from "shared/hooks/useInput";
import { useDateInput } from "shared/hooks/useDateInput";
import { Checkbox } from "shared/ui/CheckBox/CheckBox";
import { useState } from "react";

export function SearchForm() {
  const navigate = useNavigate();
  // inputs
  const [innInput] = useInput("", { required: true });
  const [quantityInput] = useInput("", { required: true, minValue: 1, maxValue: 1000 });
  const [tonalityInput] = useInput("any");
  // date inputs
  const [startDateInput] = useDateInput("", { required: true });
  const [endDateInput] = useDateInput("", { required: true });
  // checkboxes
  const [maxFullness, setMaxFullness] = useState(false);
  const [businessСontexts, setBusinessСontexts] = useState(false);
  const [mainRole, setMainRole] = useState(false);
  const [onlyRiskFactor, setOnlyRiskFactor] = useState(false);
  const [techNews, setTechNews] = useState(false);
  const [notice, setNotice] = useState(false);
  const [newsReports, setNewsReports] = useState(false);

  const dateNotCorrect = +startDateInput.date > +endDateInput.date;
  const formNotCorrect =  innInput.isError || quantityInput.isError || endDateInput.isError || startDateInput.isError;

  function redirectToResult() {
    navigate(`/result?inn=${innInput.value}&tonality=${tonalityInput.value}&quantity=${quantityInput.value}&start=${startDateInput.value}&end=${endDateInput.value}`)
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
          
            {dateNotCorrect && <span className={classes["input-date-error"]}>Введите корректные данные</span>}
          </div>
        </Label>
      </div>

      <div className={classes["checkbox-field"]}>
        <Checkbox 
          checked={maxFullness}
          setCheked={setMaxFullness}
          label="Признак максимальной полноты"
        />
        <Checkbox 
          checked={businessСontexts}
          setCheked={setBusinessСontexts}
          label="Упоминания в бизнес-контексте"
        />
        <Checkbox 
          checked={mainRole}
          setCheked={setMainRole}
          label="Главная роль в публикации"
        />
        <Checkbox 
          checked={onlyRiskFactor}
          setCheked={setOnlyRiskFactor}
          label="Публикации только с риск-факторами"
        />
        <Checkbox 
          checked={techNews}
          setCheked={setTechNews}
          label="Включать технические новости рынков"
        />
        <Checkbox 
          checked={notice}
          setCheked={setNotice}
          label="Включать анонсы и календари"
        />
        <Checkbox 
          checked={newsReports}
          setCheked={setNewsReports}
          label="Включать сводки новостей"
        />
      </div>

      <div className={classes["input-submit-field"]}>
        {formNotCorrect
          ? <Button disabled className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Поиск</Button>
          : <Button className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY} onClick={(e) => {e.preventDefault(); redirectToResult()}}>Поиск</Button>
        }
        <span className={classes["form-info"]}>* Обязательные к заполнению поля</span>
      </div>
    </form>
  );
}
