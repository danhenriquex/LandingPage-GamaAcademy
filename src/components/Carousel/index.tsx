import React, { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://a-static.mlcdn.com.br/618x463/liquidificador-mondial-turbo-l-900-fr-copo-vermelho-com-filtro-05-velocidades-900w/magazineluiza/021722800/b5b64e63ef6eb1c31d776263db23d12d.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "https://m.media-amazon.com/images/I/71sFaDtowqL._AC_SY450_.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/816S1xdqVEL._AC_SY450_.jpg",
    altText: "",
    caption: "",
  },
];

const CarouselSale = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="40%" width="500px" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  );
};

export default CarouselSale;
