import { Button, ButtonTheme } from "shared/ui/Button";
import classes from "./documentCard.module.scss";
import { formatDate } from "shared/lib/formatDate/formatDate";
import { useEffect, useRef, useState } from "react";
import noImg from "shared/assets/images/no-image.png"
import { load } from "cheerio";

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
    console.log(xmlDoc);
    
    const scandoc = xmlDoc.querySelector("scandoc");
    const html = scandoc?.textContent;
    
    if (html != null) {
      // Загрузка HTML с помощью Cheerio
      const $ = load(html);

      // Найти все теги img
      const imgTags = $("img");

      // Получить последний тег img и значение его атрибута src
      const lastImgTag = imgTags.last();
      const src = lastImgTag.attr("src");

      if (src) {
        setImgSrc(src);
      } else {
        // поиск src первого тега img c помощью regex
        const imgSrcRegex = /<img[^>]*src=["']([^"']+)["']/i;
        const match = html.match(imgSrcRegex);

        if (match) {
          const src = match[1];
          setImgSrc(src);
        } else {
          setImgSrc(noImg);
        }
      }

      // Регулярное выражение для удаления всех тегов img, table и figure
      const combinedRegex = /<img[^>]*>|<table[^>]*>|<figure[^>]*>/gi;
      const clearHtml = html.replace(combinedRegex, '');

      // Вставляем полученную разметку
      if (descRef.current != null ) {
        descRef.current.innerHTML = clearHtml;
      }
    }
  }, [])

  return (
    <div className={classes.card}>
      <div className={classes.meta}>
        <span className={classes.date}>{formatDate(card.date)}</span>
        {card.url ? (
          <a className={classes.link} href={card.url}>{card.source}</a>
        ) : (
          <span>{card.source}</span>
        )
        }
      </div>
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