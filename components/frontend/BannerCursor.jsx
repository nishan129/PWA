"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';// Ensure 'nuka-carousel' is correctly installed and imported
import Image from 'next/image';
import Link from 'next/link';

const BannerCursor = React.memo(({ activeMarket, markets = [] }) => {
    // Find the active market data based on the activeMarket title
    const activeMarketData = markets.find(market => market.title === activeMarket);
    // Extract banners from the active market data or default to an empty array
    const banners = activeMarketData?.banners || [];
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
            >
                {banners.length > 0 ? (
                    banners.map((banner, index) => (
                    <Link href={`/discount/${banner.discount}`} key={index}>
                  <div className="w-auto h-48">
                        <Image
                            key={index}
                            src={banner.imageUrl} // Fallback image if URL is undefined
                            alt={`Banner ${index}`} // Provide a meaningful alt text
                            width={5000} // Set default width
                            height={600} // Set default height
                            // loading="lazy"
                            className='w-full h-full'
                        />
                        </div>
                    </Link> 
                    ))
                ) : (
                    <p>No banners available</p> // Display a message if no banners are present
                )}
               

            </Carousel> 
    );
});

export default BannerCursor;
