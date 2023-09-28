import { Button, ButtonTheme } from "shared/ui/Button";
import { AuthForm } from "./AuthForm";
import classes from "./auth.module.scss";
import { AuthBg } from "shared/assets/svg/AuthBg"
import { classNames } from "shared/lib/classNames";
import { useState } from "react";

function makeBtnActive(isActive: boolean) {
  return ({[classes.active]: isActive})
}

export function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={classNames(classes.auth, ["container"])}>
      <h1 className={classes.title}>
        Для оформления подписки на тариф, необходимо авторизоваться.
      </h1>
      
      <AuthBg className={classes.bg}/>
      
      <div className={classes["form-container"]}>
        <div className={classes["btn-panel"]}>
          <Button 
            className={classNames(classes.btn, [], {...makeBtnActive(!isRegister)})} 
            theme={ButtonTheme.CLEAR}
            onClick={() => setIsRegister(false)}
          >
            Войти
          </Button>
          <Button
            className={classNames(classes.btn, [],  {...makeBtnActive(isRegister)})}
            theme={ButtonTheme.CLEAR}
            onClick={() => {setIsRegister(true)}}
          >
            Зарегистрироваться
          </Button>
        </div>
        
        <AuthForm/>
      </div>
    </div>
  );
}