"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import React from 'react';

export default function ProductImage({ productImages }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable
      draggable
      responsive={responsive}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={5000}
      showDots
      keyBoardControl
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {productImages.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image}
            alt={`Product Image ${index + 1}`}
            height={300}
            width={300}
            className="w-full h-auto object-cover"
            priority // Ensure the images load quickly
          />
        </div>
      ))}
    </Carousel>
  );
}
