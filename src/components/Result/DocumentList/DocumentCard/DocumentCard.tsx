import { Button, ButtonTheme } from "shared/ui/Button";
import classes from "./documentCard.module.scss";
import { formatDate } from "shared/lib/formatDate/formatDate";
import { useEffect, useRef, useState } from "react";
import noImg from "shared/assets/images/no-image.png"

interface scanDoc {
  date: string;
  url: string;
  source: string;
  title: string;
  type: string;
  img: string;
  description: string;
  wordCount: number;
}

export function DocumentCard({ card }: {card: scanDoc}) {
  const [imgSrc, setImgSrc] = useState("");
  const descRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const xmlDoc = new DOMParser().parseFromString(card.description, "text/xml");
    const scandoc = xmlDoc.querySelector("scandoc");
    const html = scandoc?.textContent;

    if (html != null) {
      // Регулярное выражение для поиска src первого тега img
      const imgSrcRegex = /<img[^>]*src=["']([^"']+)["']/i;
      const match = html.match(imgSrcRegex);
  
      if (match && match.length >= 2) {
        const src = match[1];
        setImgSrc(src);
      } else {
        setImgSrc(noImg);
      }

      // Регулярное выражение для удаления всех тегов img
      const imgTagRegex = /<img[^>]*>/gi;
      const htmlWithoutImg = html.replace(imgTagRegex, '');

      // Вставляем полученную разметку
      if (descRef.current != null ) {
        descRef.current.innerHTML = htmlWithoutImg;
      }
    }

  }, [])

  return (
    <div className={classes.card}>
      <span className={classes.date}>{formatDate(card.date)}</span>
      <a className={classes.link} href={card.url}>{card.source}</a>
      <h1 className={classes.title}>{card.title}</h1>
      {card.type && <div className={classes.mark}>{card.type}</div>}
      <div style={{ backgroundImage: `url(${imgSrc})`}} className={classes.img}></div>
      <div ref={descRef} className={classes.description}></div>
      <div className={classes.footer}>
        <Button className={classes.btn} theme={ButtonTheme.BASIC}>Читать в источнике</Button>
        <span className={classes.counter}>{card.wordCount} слов</span>
      </div>
    </div>
  );
}