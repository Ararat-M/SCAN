import classes from "./header.module.scss"
import logo from "shared/assets/images/scan-icon.jpg";
import { classNames } from "shared/classNames/classNames";
import { Navigation } from "./Navigation";
import { AuthPanel } from "./AuthPanel";

export function Header() {
  return (
    <header className={classNames(classes.header, ["container"])}>
      <img className={classes.logo} src={logo} alt="logo" />
      <Navigation />
      <div className={classes.panel}>
        <AuthPanel />
      </div>
    </header>
  );
}