// components/Carousel.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './carrusel.css'


const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        showStatus={false}
      >
        <div>
          <img src="/images/fotodp.jpg" />
        </div>
        <div>
          <img src="/images/fotodp2.jpg"/>
        </div>
        <div>
          <img src="/images/fotodp3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
