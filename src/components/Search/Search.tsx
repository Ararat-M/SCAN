import { classNames } from "shared/lib/classNames";
import { SearchForm } from "./SearchForm";
import classes from "./search.module.scss";
import { IconDocuments, SearchBg } from "shared/assets/svg";

export function Search() {
  return (
    <div className={classNames(classes.search, ["container"])}>
      <div className={classes.head}>
        <div>
          <h1 className={classes.title}>Найдите необходимые<br/> данные в пару кликов.</h1>
          <p className={classes.description}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
        </div>
      </div>
      
      <div className={classes["documents-icon"]}>
        <IconDocuments/>
      </div>

      <div className={classes["form-container"]}>
        <SearchForm />
      </div>

      <SearchBg className={classes.bg} />
    </div>
  );
}