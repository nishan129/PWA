import React from 'react';
import { Carousel } from 'nuka-carousel';  // Ensure that 'nuka-carousel' is correctly installed and imported

const images = [
  "https://th.bing.com/th/id/OIP.UX73HEX01x5FQEnCzm9fGAFaC0?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.UX73HEX01x5FQEnCzm9fGAFaC0?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.UX73HEX01x5FQEnCzm9fGAFaC0?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.UX73HEX01x5FQEnCzm9fGAFaC0?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.UX73HEX01x5FQEnCzm9fGAFaC0?rs=1&pid=ImgDetMain"
];

const BannerCursor = React.memo(() => {
  return (
    <div className="mt-2 lg:mt-12">
        <Carousel
      wrapAround
      autoplay
      dots
      showDots
      autoplayInterval={6500}
      pauseOnHover
      speed={100}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`banner-${index}`}
          loading="lazy"
          style={{ width: '100%', height: 'auto' }}
        />
      ))}
    </Carousel>
    </div>
  );
});

export default BannerCursor;
