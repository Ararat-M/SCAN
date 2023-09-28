import { createPortal } from "react-dom";
import classes from "./burgerMenu.module.scss";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconBurgerMenu } from "shared/assets/svg";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "react-router-dom";
import { IconExit } from "shared/assets/svg/IconExit";
import logo from "shared/assets/images/scan-icon-white.png"
import { classNames } from "shared/lib/classNames";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getAuthData } from "features/Auth";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { authActions } from "features/Auth/slice/authSlice";

export function BurgerMenu() {
  const dispatch = useAppDispatch()

  const [isOpen, setIsOpen] = useState(false);

  const { isAuth } = useAppSelector(getAuthData)
  
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (wrapperRef.current && isOpen) {
      disablePageScroll(wrapperRef.current);
    }

    if (wrapperRef.current && !isOpen) {
      enablePageScroll(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        enablePageScroll(wrapperRef.current);
      }
    }
  }, [isOpen, setIsOpen])

  const logoutHandler = useCallback(() =>  {
    dispatch(authActions.logout())
  }, [dispatch])

  return (
    <>
      <Button theme={ButtonTheme.CLEAR} className={classes["btn-open"]} onClick={() => setIsOpen(true)}>
        <IconBurgerMenu></IconBurgerMenu>
      </Button>

      {createPortal(
        <div style={!isOpen ? { display: "none" }: {display: "block"} } ref={wrapperRef} className={classNames(classes.wrapper, ["container"])}>
          <div className={classes.head}>
            <Link onClick={() => setIsOpen(false)} to={"/"} >
              <img className={classes.logo} src={logo} alt="icon" />
            </Link>
            <Button onClick={() => setIsOpen(false)} theme={ButtonTheme.CLEAR}>
              <IconExit />
            </Button>
          </div>
          
          <ul className={classes.nav}>
            <li><Link onClick={() => setIsOpen(false)} to={"/"}>Главная</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to={"/"}>Тарифы</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to={"/"}>FAQ</Link></li>
          </ul>

          <div className={classes["btn-panel"]}>
            {isAuth ? (
              <Link to={"/"}>
                <Button onClick={logoutHandler} className={classes["btn-logout"]} theme={ButtonTheme.PRIMARY}>Выйти</Button>
              </Link>
            ) : (
              <>
                <Link to={"/auth"}>
                  <Button onClick={() => setIsOpen(false)} theme={ButtonTheme.DEACTIVATED}>Зарегистрироваться</Button>
                </Link>
                <Link to={"/auth"}>
                  <Button onClick={() => setIsOpen(false)} className={classes["btn-sign-in"]} theme={ButtonTheme.PRIMARY}>Войти</Button>
                </Link>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}