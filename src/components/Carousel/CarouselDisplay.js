import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselItems from "./CarouselItems";

import "../../css/Carousel.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1020 },
    items: 7,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1020, min: 464 },
    items: 7,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 7,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselDisplay = ({ data }) => {
  return (
    <Carousel
      className='carsel'
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      containerClass='carousel-container'
      itemClass='carousel-item-padding-0-px'>
      <CarouselItems Name={data[0].name} Pic={data[0].ava} />
      <CarouselItems Name={data[1].name} Pic={data[1].ava} />
      <CarouselItems Name={data[2].name} Pic={data[2].ava} />
      <CarouselItems Name={data[3].name} Pic={data[3].ava} />
      <CarouselItems Name={data[4].name} Pic={data[4].ava} />
      <CarouselItems Name={data[5].name} Pic={data[5].ava} />
      <CarouselItems Name={data[6].name} Pic={data[6].ava} />
      <CarouselItems Name={data[7].name} Pic={data[7].ava} />
      <CarouselItems Name={data[8].name} Pic={data[8].ava} />
      <CarouselItems Name={data[9].name} Pic={data[9].ava} />
      <CarouselItems Name={data[10].name} Pic={data[10].ava} />
      <CarouselItems Name={data[11].name} Pic={data[11].ava} />
      <CarouselItems Name={data[12].name} Pic={data[12].ava} />
      <CarouselItems Name={data[13].name} Pic={data[13].ava} />
      <CarouselItems Name={data[14].name} Pic={data[14].ava} />
    </Carousel>
  );
};

export default CarouselDisplay;
