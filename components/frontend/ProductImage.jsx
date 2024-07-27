
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

export default function ProductImage({ productImages }) {
  console.log(productImages)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
      <Carousel
      // swipeable={true}
      // draggable={true}
      // showDots={true}
      responsive={responsive}
      // // ssr={true} // means to render carousel on server-side.
      // // infinite={true}
      // // autoPlay={true}
      // autoPlaySpeed={1000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={true}
      // dotListClass="custom-dot-list-style px-8"
      // itemClass="carousel-item-padding-40-px relative text-green-500"
      >
        {productImages.map((image, index) => (
          <div key={index} className="relative text-green-500">
            <Image
              src={image}
              alt={`Product Image`}
              height={150}
              width={150}
              className="w-full h-64 relative text-green-500"
            />
          </div>
        ))}
      </Carousel>
  );
}
