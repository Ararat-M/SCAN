import { getAuthData } from "features/Auth";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import classes from "./tarrifCard.module.scss";
import checkMark from "shared/assets/images/check-mark.jpg";
import { nanoid } from "@reduxjs/toolkit";

export interface ITariffCard {
  title: string;
  description: string;
  cardHeadColor?: string;
  cardHeadBgColor?: string;
  icon?: React.ReactNode;
  price: string;
  beforePrice?: string;
  pricePerMonth?: string;
  list: string[];
  isActive?: boolean;
}

export function TarrifCard({ card }: { card: ITariffCard }) {
  const { isAuth } = useAppSelector(getAuthData);

  const modsCls = {
    [classes.active]: card.isActive && isAuth || ""
  };

  return (
    <div className={classNames(classes.card, [], modsCls)}>
      <div
        className={classes["card-header"] }
        style={{
          backgroundColor: card.cardHeadBgColor,
          color: card.cardHeadColor
        }}
      >
        <div className={classes["card-header-content"]}>
          <h3 className={classes.title}>{card.title}</h3>
          <span className={classes.description}>{card.description}</span>
        </div>
        <div className={classes["card-header-icon"]}>
          {card.icon}
        </div>
      </div>

      {card.isActive && isAuth && <div className={classes["active-pin"]}>Текущий тариф</div>}

      <div className={classes["price-info"]}>
        <div className={classes.price}>
          {card.price} ₽ {card.beforePrice && <span className={classes["before-price"]}>{card.beforePrice} ₽</span>}
        </div>
        {card.pricePerMonth && <span>или {card.pricePerMonth} ₽/мес. при рассрочке на 24 мес.</span>}
      </div>

      <div className={classes["tariff-info"]}>
        В тариф входит:
        <ul className={classes["tariff-list"]}>
          {card.list.map((card) => {
            return (
              <li key={nanoid()} className={classes["tariff-item"]}>
                <div>
                  <img src={checkMark}/>
                </div>
                <span>
                  {card}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {card.isActive && isAuth ? (
        <div className={classes["card-footer"]}>
          <Button theme={ButtonTheme.BASIC} className={classes["card-btn"]}>
            Перейти в личный кабинет
          </Button>
        </div>
      ) : (
        <div className={classes["card-footer"]}>
          <Button theme={ButtonTheme.SECONDARY} className={classes["card-btn"]}>
            Подробнее
          </Button>
        </div>
      )
      }
    </div>
  );
}