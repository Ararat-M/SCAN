import classes from "./resultHero.module.scss";
import { ResultHeroBg } from "shared/assets/svg/ResultHeroBg";

export function ResultHero() {
  return (
    <div className={classes.hero}>
      <div>
        <h1 className={classes.title}>Ищем. Скоро<br/> будут результаты</h1>
        <p className={classes.description}>Поиск может занять некоторое время,<br/> просим сохранять терпение.</p>
      </div>

      <div className={classes.bg}>
        <ResultHeroBg />
      </div>
    </div>
  );
}