import { Link } from "react-router-dom";
import classes from "./navigation.module.scss";

export function Navigation() {
  return (
    <nav>
      <ul className={classes.navigation}>
        <li><Link className={classes.link} to={"/"}>Главная</Link></li>
        <li><Link className={classes.link} to={"/"}>Тарифы</Link></li>
        <li><Link className={classes.link} to={"/"}>FAQ</Link></li>
      </ul>
    </nav>
  );
}