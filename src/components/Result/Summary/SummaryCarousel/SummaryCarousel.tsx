import classes from "./summaryCarousel.module.scss";
import arrowLeft from "shared/assets/images/arrow-left.jpg";
import arrowRight from "shared/assets/images/arrow-right.jpg";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { type HistogramSchema, getHistogramData } from "features/ObjectSearch";
import { useMediaQuery } from "react-responsive";
import { Loader } from "shared/ui/Loader/Loader";
import Carousel from "nuka-carousel";
import { nanoid } from "@reduxjs/toolkit";

interface SummaryCarouselProps extends Pick<HistogramSchema, "data"> {

}

export function SummaryCarousel({ data }: SummaryCarouselProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  const { isLoading } = useAppSelector(getHistogramData);

  return (
    <div className={classes.carousel}>
      <div className={classes["summary-container"]}>
        <div className={classes["summary-legend"]}>
          <div className={classes["summary-legend-period"]}>Период</div>
          <div className={classes["summary-legend-total"]}>Всего</div>
          <div className={classes["summary-legenda-risk"]}>Риски</div>
        </div>
        {!isLoading ? (
          <Carousel
            className={classes.root}
            renderCenterLeftControls={({ previousSlide }) =>
              <Button theme={ButtonTheme.CLEAR} onClick={previousSlide}>
                <img src={arrowLeft} alt="left" />
              </Button>
            }
            renderCenterRightControls={({ nextSlide }) =>
              <Button className={classes["test-btn"]} theme={ButtonTheme.CLEAR} onClick={nextSlide}>
                <img src={arrowRight} alt="right" />
              </Button>
            }
            slidesToShow={isMobile ? 1 : data.length < 8 ? data.length : 8}
            defaultControlsConfig={{
              pagingDotsStyle: { display: "none" },
              nextButtonStyle: { display: "none" },
              containerClassName: classes["carousel-container"]
            }}
          >
            {data.map((item) =>
              <div key={nanoid()} className={classes["summary-item"]}>
                <div>{item.date}</div>
                <div>{item.totalValue}</div>
                <div>{item.riskValue}</div>
              </div>
            )}
          </Carousel>
        ) : (
          <div className={classes.loader}>
            <Loader />
            <span>Загружаем данные </span>
          </div>
        )}
      </div>
    </div>
  );
}