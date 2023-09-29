import { Button, ButtonTheme } from "shared/ui/Button";
import { DocumentCard } from "./DocumentCard";
import classes from "./documentList.module.scss";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { getScanDoc, getScanDocData, scanDocActions } from "features/Document";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getPostsIdData } from "features/ObjectSearch";
import { getAccesToken } from "features/Auth";
import { Loader } from "shared/ui/Loader/Loader";


export function DocumentList() {
  const dispatch = useAppDispatch();
  const postsIdData = useAppSelector(getPostsIdData);
  const scanDocData = useAppSelector(getScanDocData)
  const accessToken = useAppSelector(getAccesToken);
  
  const [cardRenderLimit, setCardRenderLimit] = useState(2)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(10)
  
  useEffect(() => {
    if (!postsIdData.isLoading) {
      const dataPart = [];
      
      for (let i = startIndex; i < endIndex && i < postsIdData.postsId.length; i++) { 
        dataPart.push(postsIdData.postsId[i])
      }
      
      dispatch(getScanDoc({ids: dataPart, accessToken}));
    }
  }, [endIndex, postsIdData.isLoading]);

  useEffect(() => {
    return () => {
      dispatch(scanDocActions.clear());
    }
  }, []);

  function btnHandler() {
    setStartIndex(startIndex + 10);
    setCardRenderLimit(endIndex);
    
    if (endIndex < postsIdData.postsId.length) {
      setEndIndex(endIndex + 10);
    }
  }

  if (scanDocData.isLoading && scanDocData.scanDocArr.length <= 0) {
    return <Loader /> // ждем первую порцию документов с api
  } else if (scanDocData.scanDocArr.length <= 0) {
    return null // не рендерим компонент если список документов пуст
  }

  return (
    <div>
      <h1 className={classes.title}>Список документов</h1>
      
      <ul className={classes.list}>
        {scanDocData.scanDocArr.map((scanDoc, index) => {
          return (
            index < cardRenderLimit &&
            <li key={scanDoc.id} className={classes.item}>
              <DocumentCard card={scanDoc} />
            </li>
          )
        })} 
      </ul>
      {true && (
        <Button
          disabled={scanDocData.isLoading}
          className={classes.btn}
          theme={ButtonTheme.SECONDARY}
          onClick={btnHandler}
        >
          Показать больше
        </Button>
      )}
    </div>
  );
}
