import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 7 },
  { width: 550, itemsToShow: 7 },
  { width: 768, itemsToShow: 7 },
  { width: 1200, itemsToShow: 7 },
];

function CarouselItems() {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
      </Carousel>
    </>
  );
}

export default CarouselItems;
