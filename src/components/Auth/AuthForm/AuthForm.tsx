import { Input } from "shared/ui/Input";
import classes from "./authForm.module.scss";
import { useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "react-router-dom";
import { IconFacebook, IconGoogle, IconYandex } from "shared/assets/svg"
import { useInputValidation } from "shared/hooks/useInputValidation";

export function AuthForm() {
  const [loginValue, setLoginValue] = useState("")
  const [loginIsError, loginErrorMsg] = useInputValidation(loginValue, {
    required: true,
    correctPhoneNumber: true
  })

  const [passwordValue, setPasswordValue] = useState("")
  const [passwordIsError, passwordErrorMsg] = useInputValidation(passwordValue, {
    required: true,
    minLength: 6
  })
  
  console.log(loginIsError || passwordIsError)

  return (
    <form className={classes.form}>
        <label htmlFor="login" className={classes.label}>
          <span className={classes["lable-text"]}>Логин или номер телефона:</span>
          <Input
            id="login"
            type="login"
            value={loginValue}
            setValue={setLoginValue}
            isError={loginIsError}
            errorMsg={loginErrorMsg}
          />
        </label>

        <label htmlFor="pass" className={classes.label}>
          <span className={classes["lable-text"]}>Пароль:</span>
          <Input
            id="pass"
            type="password"
            value={passwordValue}
            setValue={setPasswordValue}
            isError={passwordIsError}
            errorMsg={passwordErrorMsg}
          />
        </label>

        {loginIsError || passwordIsError
          ? <Button disabled={true} className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Войти</Button>
          : <Button className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Войти</Button>
        }

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