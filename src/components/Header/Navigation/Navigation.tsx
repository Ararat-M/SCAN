import { Link } from "react-router-dom";
import classes from "./navigation.module.scss";

export function Navigation() {
  return (
    <nav>
      <ul className={classes.navigation}>
        <li><Link to={"/"}>Главная</Link></li>
        <li><Link to={"/"}> Тарифы</Link></li>
        <li><Link to={"/"}>FAQ</Link></li>
      </ul>
    </nav>
  );
}