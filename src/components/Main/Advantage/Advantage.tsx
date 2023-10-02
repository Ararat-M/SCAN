import classes from "./advantage.module.scss";
import clockIcon from "shared/assets/images/clock-icon.jpg";
import searchIcon from "shared/assets/images/search-icon.jpg";
import shieldIcon from "shared/assets/images/shield-icon.jpg";
import arrowLeft from "shared/assets/images/arrow-left.png";
import arrowRight from "shared/assets/images/arrow-right.png";
import { AdvantageCard } from "./AdvantageCard";
import { Button, ButtonTheme } from "shared/ui/Button";
import AdvantageBG from "shared/assets/images/advantage-bg.jpg";
import Carousel from "nuka-carousel";
import { nanoid } from "@reduxjs/toolkit";
import { useMediaQuery } from "react-responsive";

const cardList = [
  // eslint-disable-next-line react/jsx-key
  <AdvantageCard
    imgSrc={clockIcon}
    text="Высокая и оперативная скорость обработки заявки"
  />,
  // eslint-disable-next-line react/jsx-key
  <AdvantageCard
    imgSrc={searchIcon}
    text={<>Огромная комплексная база<br/> данных, обеспечивающая<br/>y объективный ответ на запрос</>}
  />,
  // eslint-disable-next-line react/jsx-key
  <AdvantageCard
    imgSrc={shieldIcon}
    text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
  />,
  // eslint-disable-next-line react/jsx-key
  <AdvantageCard
    imgSrc={clockIcon}
    text="Высокая и оперативная скорость обработки заявки"
  />,
  // eslint-disable-next-line react/jsx-key
  <AdvantageCard
    imgSrc={searchIcon}
    text={<>Огромная комплексная база<br/> данных, обеспечивающая<br/>y объективный ответ на запрос</>}
  />,
  // eslint-disable-next-line react/jsx-key
  <AdvantageCard
    imgSrc={shieldIcon}
    text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
  />
];

export function Advantage() {
  const isDekstop1059 = useMediaQuery({ query: "(max-width: 1059px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 719px)" });

  return (
    <div className={classes.advantage}style={{ backgroundImage: `url(${AdvantageBG})` }}>
      <h2 className={classes.title}>почему именно мы</h2>

      <Carousel
        className={classes["carousel-stage"]}
        renderCenterLeftControls={({ previousSlide }) =>
          <Button theme={ButtonTheme.CLEAR} onClick={previousSlide}>
            <img src={arrowLeft} alt="left" />
          </Button>
        }
        renderCenterRightControls={({ nextSlide }) =>
          <Button theme={ButtonTheme.CLEAR} onClick={nextSlide}>
            <img src={arrowRight} alt="right" />
          </Button>
        }
        slidesToShow={isMobile ? 1 : isDekstop1059 ? 2 : 3}
        defaultControlsConfig={{
          pagingDotsStyle: { display: "none" },
          nextButtonStyle: { display: "none" },
          containerClassName: classes["carousel-container"]
        }}
      >
        {cardList.map((card) => <div key={nanoid()}>{card}</div>)}
      </Carousel>
    </div>
  );
}