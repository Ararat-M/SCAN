import classes from "./header.module.scss"
import logo from "shared/assets/images/scan-icon.jpg";
import { classNames } from "shared/lib/classNames/classNames";
import { Navigation } from "./Navigation";
import { AuthPanel } from "./AuthPanel";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getAuthData } from "features/Auth";
import { UserPanel } from "./UserPanel";

export function Header() {
  const { isAuth } = useAppSelector(getAuthData)

  return (
    <header className={classes.header}>
      <div className={classNames(classes.content, ["container"])}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.nav}>
          <Navigation />
        </div>
        <div className={classes.panel}>
          {isAuth ? (
            <UserPanel />
          ) : (
            <AuthPanel />
          )}
        </div>
      </div>
    </header>
  );
}