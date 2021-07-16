import React, { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselIndicators,
  CarouselItem,
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
  {
    src: "https://a-static.mlcdn.com.br/618x463/mouse-gamer-redragon-m608-inquisitor-rgb-3200-dpi-6-botoes/multicontroldistribuidora/6008a0f9210adc0189b1e51b/b07e751f0079ae815cc29320cd2e362c.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "https://images9.kabum.com.br/produtos/fotos/130379/placa-de-video-msi-nvidia-geforce-rtx-3070-gaming-x-trio_1603911655_g.jpg",
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
        // onExiting={() => setAnimating(false)}
        // onExited={() => setAnimating(false)}
        onClick={() => next()}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="30%" width="400px" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      keyboard={false}
    >
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
