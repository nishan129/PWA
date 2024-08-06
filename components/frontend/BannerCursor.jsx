import React from 'react';
import { Carousel } from 'nuka-carousel'; // Ensure 'nuka-carousel' is correctly installed and imported
import Image from 'next/image';

const BannerCursor = React.memo(({ activeMarket, markets = [] }) => {
    // Find the active market data based on the activeMarket title
    const activeMarketData = markets.find(market => market.title === activeMarket);
    // Extract banners from the active market data or default to an empty array
    const banners = activeMarketData?.banners || [];

    return (
        <div className="mt-2 lg:mt-12">
            <Carousel
                wrapAround
                autoplay
                dots
                showDots
                autoplayInterval={6500}
                pauseOnHover
                speed={300} // Adjust speed for smoother transitions
            >
                {banners.length > 0 ? (
                    banners.map((banner, index) => (
                        <Image
                            key={index}
                            src={banner.imageUrl} // Fallback image if URL is undefined
                            alt={`Banner ${index}`} // Provide a meaningful alt text
                            width={5000} // Set default width
                            height={600} // Set default height
                            loading="lazy"
                            className='w-full h-full'
                        />
                    ))
                ) : (
                    <p>No banners available</p> // Display a message if no banners are present
                )}
            </Carousel>
        </div>
    );
});

export default BannerCursor;
