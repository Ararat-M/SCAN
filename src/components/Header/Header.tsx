import classes from "./header.module.scss";
import logo from "shared/assets/images/scan-icon.jpg";
import { classNames } from "shared/lib/classNames/classNames";
import { Navigation } from "./Navigation";
import { AuthPanel } from "./AuthPanel";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getAuthData } from "features/Auth";
import { UserPanel } from "./UserPanel";
import { BurgerMenu } from "components/BurgerMenu";
import { Link } from "react-router-dom";

export function Header() {
  const { isAuth } = useAppSelector(getAuthData);

  return (
    <header className={classes.header}>
      <div className={classNames(classes.content, ["container"])}>
        <Link to={"/"}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>

        <div className={classes.nav}>
          <Navigation />
        </div>

        {isAuth ? (
          <div className={classNames(classes["panel-user"], [classes.panel])}>
            <UserPanel />
          </div>
        ) : (
          <div className={classNames(classes["panel-auth"], [classes.panel])}>
            <AuthPanel />
          </div>
        )}

        <div className={classes.burger}>
          <BurgerMenu/>
        </div>
      </div>
    </header>
  );
}