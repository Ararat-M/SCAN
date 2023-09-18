import { Button, ButtonTheme } from "shared/ui/Button";
import classes from "./authPanel.module.scss";

export function AuthPanel() {
  return (
    <>
      <ul className={classes.list}>
        <li className={classes.item}><Button theme={ButtonTheme.DEACTIVATED}>Зарегистрироваться</Button></li>
        <li className={classes.item}><Button theme={ButtonTheme.PRIMARY}>Войти</Button></li>
      </ul>
    </>
  );
}