import { ReactNode } from "react";
import classes from "./advantageCard.module.scss";

interface AdvantageCardProps {
  imgSrc: string;
  text: string | ReactNode;
}

export function AdvantageCard({ imgSrc, text }: AdvantageCardProps) {
  return (
    <div className={classes.card}>
      <img className={classes.img} src={imgSrc} alt="card-img"/>
      <p className={classes.text}>{text}</p>
    </div>
  );
}