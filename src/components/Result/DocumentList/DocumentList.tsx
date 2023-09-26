import { Button, ButtonTheme } from "shared/ui/Button";
import { DocumentCard } from "./DocumentCard";
import classes from "./documentList.module.scss";

const card = {
  date: "13.09.2021",
  url: "https://www.stav.kp.ru/",
  source: "Комсомольская правда KP.RU",
  title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
  type: "tech",
  img: "img",
  description: "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.",
  wordCount: 2534
}

export function DocumentList() {
  return (
    <div>
      <h1 className={classes.title}>Список документов</h1>
      <div className={classes.list}>
        <DocumentCard card={card}/>
        <DocumentCard card={card}/>
      </div>
      <Button className={classes.btn} theme={ButtonTheme.SECONDARY}>Показать больше</Button>
    </div>
  );
}