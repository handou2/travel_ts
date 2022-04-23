import React from "react";
import { Carousel as AntCarousel, Image } from "antd";
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";
export default function Carousel() {
  return (
    <div>
      <AntCarousel autoplay>
        <Image src={carouselImage1} />
        <Image src={carouselImage2} />
        <Image src={carouselImage3} />
      </AntCarousel>
    </div>
  );
}
