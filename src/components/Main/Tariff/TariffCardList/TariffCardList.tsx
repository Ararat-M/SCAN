import { type ReactNode } from "react";
import classes from "./tariffCardList.module.scss";
import checkMark from "shared/assets/images/check-mark.jpg"
import { Button, ButtonTheme } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames";

export interface TariffCard {
  title: string;
  description: string;
  cardHeadColor?: string;
  cardHeadBgColor?: string;
  icon?: ReactNode;
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
        const modsCls = {
          [classes.active]: item.isActive || ""
        }

        return (
          <li className={classNames(classes.card, [], modsCls)}>
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
              <div className={classes["card-header-icon"]}>
                {item.icon}
              </div>
            </div>

            {item.isActive && <div className={classes["active-pin"]}>Текущий тариф</div>}

            <div className={classes["price-info"]}>
              <div className={classes.price}>
                {item.price} ₽ {item.beforePrice && <span className={classes["before-price"]}>{item.beforePrice} ₽</span>}
              </div>
              {item.pricePerMonth && <span>или {item.pricePerMonth} ₽/мес. при рассрочке на 24 мес.</span>}
            </div>

            <div className={classes["tariff-info"]}>
              В тариф входит:
              <ul className={classes["tariff-list"]}>
                {item.list.map((item) => {
                  return (
                    <li className={classes["tariff-item"]}>
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
            
            {item.isActive 
              ? (
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
          </li>
        )
      })}
    </ul>
  );
}