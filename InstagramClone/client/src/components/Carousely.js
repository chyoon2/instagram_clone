import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Carousel.css";
import { avatar } from "../api/faker";
import CarouselItem from "./CarouselItems";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 7,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 7,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Carousely = () => {
  return (
    <Carousel
      className='carsel'
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      containerClass='carousel-container'
      itemClass='carousel-item-padding-0-px'>
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
      {avatar()}
    </Carousel>
  );
};
//REFACTOR WHEN USING AN API/DB OTHER THAN FAKER

export default Carousely;
