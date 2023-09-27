import { Button, ButtonTheme } from "shared/ui/Button";
import { DocumentCard } from "./DocumentCard";
import classes from "./documentList.module.scss";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { getScanDoc, getScanDocData } from "features/Documnet";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getPostsIdData } from "features/ObjectSearch";


export function DocumentList() {
  const dispatch = useAppDispatch();
  const postsIdData = useAppSelector(getPostsIdData);
  const { scanDocArr } = useAppSelector(getScanDocData)

  const [cardRenderLimit, setCardRenderLimit] = useState(2)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(10)
  
  useEffect(() => {
    if (!postsIdData.isLoading) {
      const dataPart = [];
      
      for (let i = startIndex; i < endIndex && i < postsIdData.postsId.length; i++) {
        dataPart.push(postsIdData.postsId[i])
      }
      
      dispatch(getScanDoc({ids: dataPart}));
    }
  }, [endIndex, postsIdData]);

  function btnHandler() {
    setStartIndex(startIndex + 10);
    setCardRenderLimit(endIndex);
    
    if (endIndex < postsIdData.postsId.length) {
      setEndIndex(endIndex + 10);
    }
  }

  return (
    <div>
      <h1 className={classes.title}>Список документов</h1>
      <div className={classes.list}>
        {scanDocArr.map((scanDoc, index) => 
          index < cardRenderLimit && <DocumentCard card={scanDoc} />
        )}
      </div>
      <Button 
        className={classes.btn}
        theme={ButtonTheme.SECONDARY}
        onClick={btnHandler}
      >
        Показать больше
      </Button>
    </div>
  );
}
