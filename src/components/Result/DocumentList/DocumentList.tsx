import { Button, ButtonTheme } from "shared/ui/Button";
import { DocumentCard } from "./DocumentCard";
import classes from "./documentList.module.scss";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { getScanDoc, getScanDocData, scanDocActions } from "features/Document";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getAccesToken } from "features/Auth";
import { Loader } from "shared/ui/Loader/Loader";
import { postsIdActions } from "features/ObjectSearch/slice/postsIdSlice";

export function DocumentList({ ids }: { ids: string[] }) {
  // компонент не рендериться если массив пуст
  if (ids.length === 0) return null;

  const dispatch = useAppDispatch();
  const scanDocData = useAppSelector(getScanDocData);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [amountToRender, setAmountToRender] = useState(2);

  const accessToken = useAppSelector(getAccesToken);

  useEffect(() => {
    return () => {
      dispatch(scanDocActions.clear());
      dispatch(postsIdActions.clear());
    };
  }, []);

  useEffect(() => {
    const partData: string[] = [];

    for (let i = startIndex; i < endIndex && i < ids.length; i++) {
      partData.push(ids[i]);
    }

    dispatch(getScanDoc({ ids: partData, accessToken }));
  }, [endIndex]);

  function btnHandler() {
    if (startIndex < ids.length) {
      setStartIndex(endIndex);
      setAmountToRender(endIndex);
      setEndIndex(prev => prev + 10);
    }
  }

  if (scanDocData.isLoading && scanDocData.scanDocArr.length <= 0) {
    return <Loader />; // ждем первую порцию документов с api
  } else if (scanDocData.scanDocArr.length <= 0) {
    return null; // не рендерим компонент если список документов пуст
  }

  return (
    <div>
      <h1 className={classes.title}>Список документов</h1>

      <ul className={classes.list}>
        {scanDocData.scanDocArr.map((scanDoc, index) => {
          return (
            index < amountToRender && (
              <li key={scanDoc.id} className={classes.item}>
                <DocumentCard card={scanDoc} />
              </li>
            )
          );
        })}
      </ul>

      {endIndex < ids.length && (
        !scanDocData.isLoading ? (
          <Button
            disabled={scanDocData.isLoading}
            className={classes.btn}
            theme={ButtonTheme.SECONDARY}
            onClick={btnHandler}
          >
            Показать больше
          </Button>
        ) : (
          <div style={{ marginTop: "60px" }}>
            <Loader />
          </div>
        )
      )}
    </div>
  );
}
