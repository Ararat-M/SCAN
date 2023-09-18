import logo from "shared/assets/images/scan-icon-white.png"
import classes from "./footer.module.scss"
import { classNames } from "shared/lib/classNames";

export function Footer() {
  return (
    <footer className={classNames(classes.footer)}>
      <div className={classNames(classes.content, ["container"])}>
        <img src={logo} alt="logo" />
        <div className={classes.info}>
          <p>г. Москва, Цветной б-р, 40</p>
          <a href="tel:+74957712111">+7 495 771 21 11</a>
          <a href="mailto:info@skan.ru">info@skan.ru</a>
          <p className={classes.copyright}>
            Copyright. 2022
          </p>
        </div>
      </div>
    </footer>
  );
}