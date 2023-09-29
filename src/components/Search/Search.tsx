import { classNames } from "shared/lib/classNames";
import { SearchForm } from "./SearchForm";
import classes from "./search.module.scss";
import { IconDocuments, SearchBg, IconPaper } from "shared/assets/svg";
import { useMediaQuery } from "react-responsive";

export function Search() {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  return (
    <div className={classNames(classes.search, ["container"])}>
      <div className={classes.head}>
        <div>
          <h1 className={classes.title}>Найдите необходимые<br/> данные в пару кликов.</h1>
          <p className={classes.description}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
        </div>
      </div>

      <div className={classes["documents-icon"]}>
        {isMobile ? <IconPaper/> : <IconDocuments/>}
      </div>

      <div className={classes["form-container"]}>
        <SearchForm />
      </div>

      <SearchBg className={classes.bg} />
    </div>
  );
}