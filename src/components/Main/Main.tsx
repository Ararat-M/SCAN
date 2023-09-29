import classes from "./main.module.scss";
import { MainHero } from "./MainHero";
import { classNames } from "shared/lib/classNames";
import { Advantage } from "./Advantage";
import { Tariff } from "./Tariff";

export function Main() {
  return (
    <main>
      <section className={classNames(classes.hero, ["container"])}>
        <MainHero />
      </section>

      <section className={classNames(classes.advantage, ["container"])}>
        <Advantage />
      </section>

      <section className={classNames(classes.tariff, ["container"])}>
        <Tariff />
      </section>
    </main>
  );
}