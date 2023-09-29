import { SummaryCarousel } from "./SummaryCarousel";
import classes from "./summary.module.scss";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { getFilter } from "enteties/Filter";
import { useEffect } from "react";
import { getHistogram, getHistogramData, getPostsId, getPostsIdData } from "features/ObjectSearch";
import { getAccesToken } from "features/Auth";

export function Summary() {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(getFilter)
  const data = useAppSelector(getHistogramData)
  const accessToken = useAppSelector(getAccesToken);
  
  useEffect(() => {
    dispatch(getHistogram({...filter, accessToken}))
    dispatch(getPostsId({...filter, accessToken}))
  }, [])

  return (
    <div>
      <h1 className={classes.title}>Общая сводка</h1>
      <span className={classes.counter}>Найдено {data.amount} вариантов</span>
      <SummaryCarousel data={data.data}/>
    </div>
  );
}