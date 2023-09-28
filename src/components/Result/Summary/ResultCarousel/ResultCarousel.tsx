import classes from "./resultCarousel.module.scss";
import arrowLeft from "shared/assets/images/arrow-left.jpg"
import arrowRight from "shared/assets/images/arrow-right.jpg"
import { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { HistogramSchema, getHistogramData } from "features/ObjectSearch";
import { useMediaQuery } from "react-responsive";

interface ResultCarouselProps extends Pick<HistogramSchema, "data"> {
  
}

export function ResultCarousel({ data }: ResultCarouselProps) {
  const [items] = useState([
    <div style={{ backgroundColor: 'blue' }}>1</div>,
    <div style={{ backgroundColor: 'green' }}>2</div>,
  ]);
  
  const [responsive] = useState({
    0: {
      items: 1
    },
    1440: {
      items: 8
    }
  });
  const isMobile = useMediaQuery({ query: '(max-width: 1440px)' })
  
  const { isLoading } = useAppSelector(getHistogramData)
  
  const carouselRef = useRef<AliceCarousel>(null);
  
  return (
    <div className={classes.carousel}>
        <Button theme={ButtonTheme.CLEAR} onClick={() => carouselRef.current?.slidePrev()}> 
          <img src={arrowLeft} alt="left" />
        </Button>
        <div className={classes["summary-container"]}>
          <div className={classes["summary-legend"]}>
            <div className={classes["summary-legend-period"]}>Период</div>
            <div className={classes["summary-legend-total"]}>Всего</div>
            <div className={classes["summary-legenda-risk"]}>Риски</div>
          </div>
          {!isLoading ? (
            <AliceCarousel
              infinite
              paddingLeft={isMobile ? 10 : 140}
              ref={carouselRef}
              mouseTracking
              disableDotsControls
              disableButtonsControls
              items={data.map((item) => <div className={classes["summary-item"]}>
                  <div>{item.date}</div>
                  <div>{item.totalValue}</div>
                  <div>{item.riskValue}</div>
                </div>)}
              responsive={responsive}
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