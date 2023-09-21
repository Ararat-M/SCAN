import { Button, ButtonTheme } from "shared/ui/Button";
import classes from "./authPanel.module.scss";
import { Link } from "react-router-dom";

export function AuthPanel() {
  return (
    <>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link to={"/"}>
            <Button theme={ButtonTheme.DEACTIVATED}>
              Зарегистрироваться
            </Button>
          </Link>
        </li>
        <li className={classes.item}>
          <Link to={"/auth"}>
            <Button theme={ButtonTheme.PRIMARY}>Войти</Button>
          </Link>
        </li>
      </ul>
    </>
  );
}