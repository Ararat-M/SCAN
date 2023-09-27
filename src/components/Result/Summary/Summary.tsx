import { ResultCarousel } from "./ResultCarousel";
import classes from "./summary.module.scss";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { getFilter } from "enteties/Filter";
import { useEffect } from "react";
import { getHistogram, getHistogramData, getPostsId } from "features/ObjectSearch";

export function Summary() {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(getFilter)
  const data = useAppSelector(getHistogramData)

  useEffect(() => {
    dispatch(getHistogram(filter))
    dispatch(getPostsId(filter))
  }, [])

  return (
    <div>
      <h1 className={classes.title}>Общая сводка</h1>
      <span className={classes.counter}>Найдено count вариантов</span>
      <ResultCarousel data={data.data}/>
    </div>
  );
}