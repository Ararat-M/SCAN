import classes from "./resultCarousel.module.scss";
import arrowLeft from "shared/assets/images/arrow-left.jpg"
import arrowRight from "shared/assets/images/arrow-right.jpg"
import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button, ButtonTheme } from "shared/ui/Button";

interface info {
  data: string;
  count: number;
  riskCount: number;
}

interface ResultCarouselProps {
  items: info[];
}

export function ResultCarousel({items}: ResultCarouselProps) {
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
          <AliceCarousel
            infinite
            paddingLeft={147}
            ref={carouselRef}
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items.map((item) => <div className={classes["summary-item"]}>
              <div>{item.data}</div>
              <div>{item.count}</div>
              <div>{item.riskCount}</div>
              </div>)}
            responsive={{
              0: {
                items: 8
              }
            }}
          />
        </div>
        <Button theme={ButtonTheme.CLEAR} onClick={() => carouselRef.current?.slideNext()}> 
          <img src={arrowRight} alt="right" />
        </Button>
      </div>
  );
}