import { classNames } from "shared/lib/classNames";
import { ResultHero } from "./ResultHero";
import classes from "./result.module.scss";
import { Summary } from "./Summary";
import { DocumentList } from "./DocumentList";
import { getFilter } from "enteties/Filter";
import { getAccesToken } from "features/Auth";
import { getHistogramData, getHistogram, getPostsId, getPostsIdData } from "features/ObjectSearch";
import { useEffect } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useAppSelector } from "shared/hooks/useAppSelector";

export function Result() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getFilter);
  const histogram = useAppSelector(getHistogramData);
  const { postsId } = useAppSelector(getPostsIdData);
  const accessToken = useAppSelector(getAccesToken);

  useEffect(() => {
    dispatch(getHistogram({ ...filter, accessToken }));
    dispatch(getPostsId({ ...filter, accessToken }));
  }, []);

  return (
    <>
      <section className={classNames(classes.hero, ["container"])}>
        <ResultHero></ResultHero>
      </section>

      <section className={classNames(classes.summary, ["container"])}>
        <Summary histogram={histogram}></Summary>
      </section>

      <section className={classNames(classes.documents, ["container"])}>
        <DocumentList ids={postsId}></DocumentList>
      </section>
    </>
  );
}