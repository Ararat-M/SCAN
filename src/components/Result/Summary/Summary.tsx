import { ResultCarousel } from "./ResultCarousel";
import classes from "./summary.module.scss";

const items = [
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
  {data: "10.09.2021", count: 5, riskCount: 0},
];

export function Summary() {

  return (
    <div>
      <h1 className={classes.title}>Общая сводка</h1>
      <span className={classes.counter}>Найдено count вариантов</span>
      <ResultCarousel items={items}/>
    </div>
  );
}