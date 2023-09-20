import classes from "./advantage.module.scss";
import clockIcon from "shared/assets/images/clock-icon.jpg"
import searchIcon from "shared/assets/images/search-icon.jpg"
import shieldIcon from "shared/assets/images/shield-icon.jpg"
import arrowLeft from "shared/assets/images/arrow-left.jpg"
import arrowRight from "shared/assets/images/arrow-right.jpg"
import { AdvantageCard } from "./AdvantageCard";
import AliceCarousel from 'react-alice-carousel';
import { Button, ButtonTheme } from "shared/ui/Button";
import { useRef } from "react";
import AdvantageBG from "shared/assets/images/advantage-bg.jpg";

const cardList = [
  <AdvantageCard 
    imgSrc={clockIcon} 
    text="Высокая и оперативная скорость обработки заявки"
  />,
  <AdvantageCard 
    imgSrc={searchIcon} 
    text={<>Огромная комплексная база<br/> данных, обеспечивающая<br/>y объективный ответ на запрос</>}
  />,
  <AdvantageCard 
    imgSrc={shieldIcon} 
    text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
  />
];

export function Advantage() {
  const carouselRef = useRef<AliceCarousel>(null)

  return (
    <div
      className={classes.advantage}
      style={{
        backgroundImage: `url(${AdvantageBG})`
      }}
    >
      <h2 className={classes.title}>почему именно мы</h2>
      <div className={classes.carousel}>
        <Button theme={ButtonTheme.CLEAR} onClick={() => carouselRef.current?.slidePrev()}> 
          <img src={arrowLeft} alt="left" />
        </Button>

        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          items={cardList.map((card) => card)}
          responsive={{
            0: {
              items: 1
            },
            920: {
              items: 1
            },
            1440: {
              items: 3
            }
          }}
        />

        <Button theme={ButtonTheme.CLEAR} onClick={() => carouselRef.current?.slideNext()}>
          <img src={arrowRight} alt="right" />
        </Button>
        {/* <div
          style={{
            position: "absolute"
          }}
        >
          <AdvantageBG />
        </div> */}
      </div>
    </div>
  );
}