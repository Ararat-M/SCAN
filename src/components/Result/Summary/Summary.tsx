import { type HistogramSchema } from "features/ObjectSearch";
import { SummaryCarousel } from "./SummaryCarousel";
import classes from "./summary.module.scss";

export function Summary({ histogram }: { histogram: HistogramSchema }) {
  return (
    <div>
      <h1 className={classes.title}>Общая сводка</h1>
      <span className={classes.counter}>Найдено {histogram.amount} вариантов</span>
      <div className={classes.histogram}>
        <SummaryCarousel data={histogram.data}/>
      </div>
    </div>
  );
}