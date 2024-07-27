"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

export default function CategoryCarousel({ products }) {
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
      items: 2.5,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      // swipeable
      // draggable
      
      responsive={responsive}
      // ssr
      infinite
      autoPlay
      autoPlaySpeed={5000}
      keyBoardControl
      // customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </Carousel>
  );
}
