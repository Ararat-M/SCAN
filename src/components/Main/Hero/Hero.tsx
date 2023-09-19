import classes from "./hero.module.scss";
import heroImage from "shared/assets/images/hero-image.jpg";
import { Button, ButtonTheme } from "shared/ui/Button";

export function Hero() {
  console.log(typeof heroImage)
  return (
    <div 
      className={classes.hero}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% -27px"
      }}
    >
      <div>
        <h1 className={classes.title}>сервис по поиску<br/>публикаций<br/>о компании<br/>по его ИНН</h1>
        <p className={classes.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        <Button theme={ButtonTheme.SECONDARY}>Запросить данные</Button>
      </div>
    </div>
  );
}