import classes from "./tariffCardList.module.scss";
import { nanoid } from "@reduxjs/toolkit";
import { TarrifCard, type ITariffCard } from "./TarrifCard";

interface TariffCardListProps {
  items: ITariffCard[];
}

export function TariffCardList({ items }: TariffCardListProps) {

  return (
    <ul className={classes["card-list"]}>
      {items.map((item) =>
        <li key={nanoid()}><TarrifCard card={item}/></li>
      )}
    </ul>
  );
}