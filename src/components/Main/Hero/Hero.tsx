import { getAuthState } from "features/Auth/selectors/getAuthState";
import classes from "./hero.module.scss";
import heroImage from "shared/assets/images/hero-image.jpg";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { Button, ButtonTheme } from "shared/ui/Button";

export function Hero() {
  const authData = useAppSelector(getAuthState)

  return (
    <div 
      className={classes.hero}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div>
        <h1 className={classes.title}>сервис по поиску<br/>публикаций<br/>о компании<br/>по его ИНН</h1>
        <p className={classes.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        {authData.isAuth && 
          <Button theme={ButtonTheme.SECONDARY} className={classes["hero-btn"]}>Запросить данные</Button>
        }
        </div>
    </div>
  );
}