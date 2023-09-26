import { classNames } from "shared/lib/classNames";
import { ResultHero } from "./ResultHero";
import classes from "./result.module.scss";
import { Summary } from "./Summary";
import { DocumentList } from "./DocumentList";

export function Result() {
  return (
    <>
      <section className={classNames(classes.hero, ["container"])}>
        <ResultHero></ResultHero>
      </section>

      <section className={classNames(classes.summary, ["container"])}>
        <Summary></Summary>
      </section>

      <section className={classNames(classes.documents, ["container"])}>
        <DocumentList></DocumentList>
      </section>
    </>
  );
}