import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Carousel.css";
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
      itemClass='carousel-item-padding-10-px'>
      <div>
        {" "}
        <i class='far fa-heart fa-7x' />
      </div>
      <div>
        <i class='far fa-heart fa-7x' />
      </div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 1</div>
      <div>
        <i class='far fa-heart fa-7x' />
      </div>
      <div>
        <i class='far fa-heart fa-7x' />
      </div>
      <div>
        {" "}
        <i class='far fa-heart fa-7x' />
      </div>
    </Carousel>
  );
};

export default Carousely;
