import classes from "./main.module.scss"
import { Hero } from "./Hero";
import { classNames } from "shared/lib/classNames";
import { Advantage } from "./Advantage";

export function Main() {
  return (
    <main>
      <section className={classNames(classes.hero, ["container"])}>  
        <Hero />
      </section>

      <section className={classNames(classes.advantage, ["container"])}>  
        <Advantage />
      </section>

      <section className={classNames(classes.tariff, ["container"])}>  
        {/* <Tariff /> */}
      </section>
    </main>
  );
}