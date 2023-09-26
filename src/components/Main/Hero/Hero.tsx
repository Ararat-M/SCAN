import { getAuthData } from "features/Auth/selectors/getAuthData";
import classes from "./hero.module.scss";
import heroImage from "shared/assets/images/hero-image.jpg";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "react-router-dom";

export function Hero() {
  const authData = useAppSelector(getAuthData)

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
          <Link to={"/search"}>
            <Button theme={ButtonTheme.SECONDARY} className={classes["hero-btn"]}>Запросить данные</Button>
          </Link>
        }
        </div>
    </div>
  );
}