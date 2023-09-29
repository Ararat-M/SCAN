import { TariffCardList, type TariffCard } from "./TariffCardList";
import classes from "./tariff.module.scss";
import { IconLamp, IconLaptop, IconTarger } from "shared/assets/svg";

const cardList: TariffCard[] =  [
  {
    title: "Beginner",
    description: "Для небольшого исследования",
    icon: <IconLamp />,
    price: "799",
    cardHeadBgColor: "var(--secondary-orange)",
    beforePrice: "1 200",
    pricePerMonth: "150",
    list: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7"
    ],
    isActive: true
  },
  {
    title: "Pro",
    description: "Для HR и фрилансеров",
    icon: <IconTarger />,
    cardHeadBgColor: "var(--secondary-cyan)",
    price: "1 299",
    beforePrice: "2 600",
    pricePerMonth: "279",
    list: [
      "Все пункты тарифа Beginner",
      "Экспорт истории",
      "Рекомендации по приоритетам"
    ]
  },
  {
    title: "Business",
    description: "Для корпоративных клиентов",
    icon: <IconLaptop />,
    cardHeadColor: "var(--primary-white)",
    cardHeadBgColor: "var(--primary-black)",
    price: "2 379",
    beforePrice: "3 700",
    list: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка"
    ]
  },
]

export function Tariff() {
  return (
    <>
      <h2 className={classes.title}>наши тарифы</h2>
      <div className={classes["tarrif-list"]}>
        <TariffCardList items={cardList}/>
      </div>
    </>
  );
}