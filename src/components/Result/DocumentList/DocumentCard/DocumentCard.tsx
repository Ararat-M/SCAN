import { Button, ButtonTheme } from "shared/ui/Button";
import classes from "./documentCard.module.scss";
import { formatDate } from "shared/lib/formatDate/formatDate";

interface scanDoc {
  date: string;
  url: string;
  source: string;
  title: string;
  type: string;
  img: string;
  description: string;
  wordCount: number;
}

export function DocumentCard({ card }: {card: scanDoc}) {
  return (
    <div className={classes.card}>
      <span className={classes.date}>{formatDate(card.date)}</span>
      <a className={classes.link} href={card.url}>{card.source}</a>
      <h1 className={classes.title}>{card.title}</h1>
      {card.type && <div className={classes.mark}>{card.type}</div>}
      <div className={classes.img}><img src={card.img} alt="card-img" /></div>
      <p className={classes.description}></p>
      <div className={classes.footer}>
        <Button className={classes.btn} theme={ButtonTheme.BASIC}>Читать в источнике</Button>
        <span className={classes.counter}>{card.wordCount} слов</span>
      </div>
    </div>
  );
}