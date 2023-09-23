import { Input } from "shared/ui/Input";
import classes from "./authForm.module.scss";
import { useRef, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "react-router-dom";
import { IconFacebook, IconGoogle, IconYandex } from "shared/assets/svg"

export function AuthForm() {
  const [loginValue, setLoginValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  
  return (
    <form className={classes.form}>
        <label htmlFor="login" className={classes.label}>
          <span className={classes["lable-text"]}>Логин или номер телефона:</span>
          <Input
            id="login"
            value={loginValue}
            setValue={setLoginValue}
            validations={{
              required: true,
            }}
          />
        </label>

        <label htmlFor="pass" className={classes.label}>
          <span className={classes["lable-text"]}>Пароль:</span>
          <Input
            id="pass"
            type="password"
            value={passwordValue}
            setValue={setPasswordValue}
            validations={{
              required: true,
              minLength: 6
            }}
          />
        </label>

        <Button className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Войти</Button>

        <Link className={classes.link} to="/">Восстановить пароль</Link>

        <div className={classes["sso"]}>
          <span>Войти через: </span>
          <div className={classes["sso-panel"]}>
            <Button className={classes["sso-btn"]} theme={ButtonTheme.CLEAR}>
              <IconGoogle className={classes["sso-btn-icon"]}/>
            </Button>
            
            <Button className={classes["sso-btn"]} theme={ButtonTheme.CLEAR}>
              <IconFacebook className={classes["sso-btn-icon"]}/>
            </Button>

            <Button className={classes["sso-btn"]} theme={ButtonTheme.CLEAR}>
              <IconYandex className={classes["sso-btn-icon"]}/>
            </Button>
          </div>
        </div>
    </form>
  );
}