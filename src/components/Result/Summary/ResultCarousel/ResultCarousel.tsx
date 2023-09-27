import classes from "./resultCarousel.module.scss";
import arrowLeft from "shared/assets/images/arrow-left.jpg"
import arrowRight from "shared/assets/images/arrow-right.jpg"
import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { HistogramSchema, getHistogramData } from "features/ObjectSearch";

interface ResultCarouselProps extends Pick<HistogramSchema, "data"> {
  
}

export function ResultCarousel({ data }: ResultCarouselProps) {
  const { isLoading } = useAppSelector(getHistogramData)
  
  const carouselRef = useRef<AliceCarousel>(null);
  
  return (
    <div className={classes.carousel}>
        <Button theme={ButtonTheme.CLEAR} onClick={() => carouselRef.current?.slidePrev()}> 
          <img src={arrowLeft} alt="left" />
        </Button>
        <div className={classes["summary-container"]}>
          <div className={classes["summary-legend"]}>
            <div>Период</div>
            <div>Всего</div>
            <div>Риски</div>
          </div>
          {!isLoading ? (
            <AliceCarousel
              infinite
              paddingLeft={147}
              ref={carouselRef}
              mouseTracking
              disableDotsControls
              disableButtonsControls
              items={data.map((item) => <div className={classes["summary-item"]}>
                <div>{item.date}</div>
                <div>{item.totalValue}</div>
                <div>{item.riskValue}</div>
                </div>)}
              responsive={{
                0: {
                  items: 8
                }
              }}
            />
          ) : (
            <div className={classes.loader}>
              Loading....
            </div>
          )}
        </div>
        <Button theme={ButtonTheme.CLEAR} onClick={() => carouselRef.current?.slideNext()}> 
          <img src={arrowRight} alt="right" />
        </Button>
      </div>
  );
}