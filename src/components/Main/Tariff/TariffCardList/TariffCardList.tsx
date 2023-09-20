import { type ReactNode } from "react";
import classes from "./tariffCardList.module.scss";
import checkMark from "shared/assets/images/check-mark.jpg"

export interface TariffCard {
  title: string;
  description: string;
  cardHeadColor?: string;
  cardHeadBgColor?: string;
  img?: string | ReactNode;
  price: string;
  beforePrice?: string;
  pricePerMonth?: string;
  list: string[];
  isActive?: boolean;
}

interface TariffCardListProps {
  items: TariffCard[];
}

export function TariffCardList({ items }: TariffCardListProps) {
  return (
    <ul className={classes["card-list"]}>
      {items.map((item) => {
        return (
          <li className={classes.card}>
            <div 
              className={classes["card-header"]} 
              style={{
                backgroundColor: item.cardHeadBgColor,
                color: item.cardHeadColor
              }}
            >
              <div className={classes["card-header-content"]}>
                <h3 className={classes.title}>{item.title}</h3>
                <span className={classes.description}>{item.description}</span>
              </div>
            </div>

            {item.isActive && <div className={classes["active-pin"]}>Текущий тариф</div>}

            <div className={classes["price-info"]}>
              <div className={classes.price}>
                {item.price} ₽ {item.beforePrice && <span className={classes["before-price"]}>{item.beforePrice} ₽</span>}
              </div>
              {item.pricePerMonth && <span>или {item.pricePerMonth} ₽/мес. при рассрочке на 24 мес.</span>}
            </div>

            <div className={classes["tarrif-info"]}>
              В тариф входит:
              <ul className={classes["tarrif-list"]}>
                {item.list.map((item) => {
                  return (
                    <li className={classes["tarrif-item"]}>
                      <div className={classes["item-check-mark"]}>
                        <img src={checkMark}/>
                      </div>
                      <span>
                        {item}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  );
}