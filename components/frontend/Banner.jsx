import React, { useState } from 'react';
import Image from 'next/image';
import banner from "../../public/banner.png";
import ExploreProduct from './explor';

export default function Banner({ activeMarket }) {
    const [showExplore, setShowExplore] = useState(false);

    const handleClick = () => {
        setShowExplore(true);
    };

    return (
        <>
            {activeMarket === "FMCG" && (
                <div>
                    <div onClick={handleClick} className='mb-2'>
                        <Image 
                            src={banner}
                            className='rounded-lg'
                            alt="Banner Image"
                        />
                    </div>
                    {showExplore && <ExploreProduct />}
                </div>
            )}
        </>
    );
}
