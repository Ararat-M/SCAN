import { Input } from "shared/ui/Input";
import classes from "./authForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "react-router-dom";
import { IconFacebook, IconGoogle, IconYandex } from "shared/assets/svg"
import { useInput } from "shared/hooks/useInput";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getAuthData } from "features/Auth/selectors/getAuthData";
import { login } from "features/Auth/services/login";

export function AuthForm() {
  const [loginInput] = useInput("", { required: true, correctPhoneNumber: true})
  const [passwordInput] = useInput("", { required: true, minLength: 6})

  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(getAuthData);

  function buttonHandler() {
    dispatch(login({
      login: loginInput.value,
      password: passwordInput.value
    }));
  }

  return (
    <form className={classes.form}>
        <label htmlFor="login" className={classes.label}>
          <span className={classes["lable-text"]}>Логин или номер телефона:</span>
          <Input
            className={classes.input}
            fluid
            id="login"
            type="login"
            value={loginInput.value}
            setValue={loginInput.setValue}
            wasUsed={loginInput.wasUsed}
            setWasUsed={loginInput.setWasUsed}
            isError={loginInput.isError}
            errorMsg={loginInput.errorMsg}
          />
        </label>

        <label htmlFor="pass" className={classes.label}>
          <span className={classes["lable-text"]}>Пароль:</span>
          <Input
            className={classes.input}
            fluid
            id="pass"
            type="password"
            value={passwordInput.value}
            setValue={passwordInput.setValue}
            wasUsed={passwordInput.wasUsed}
            setWasUsed={passwordInput.setWasUsed}
            isError={passwordInput.isError}
            errorMsg={passwordInput.errorMsg}
          />
        </label>

        {loginInput.isError || passwordInput.isError || isLoading
          ? <Button disabled className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY}>Войти</Button>
          : <Button className={classes["submit-btn"]} type="submit" theme={ButtonTheme.SECONDARY} onClick={(e) => {e.preventDefault(); buttonHandler()}}>Войти</Button>
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