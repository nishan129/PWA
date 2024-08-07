import React, { useState } from 'react';
import Image from 'next/image';
import banner from "../../public/banner.jpg";
import ExploreProduct from './explor';

export default function Banner() {
    const [showExplore, setShowExplore] = useState(false);

    const handleClick = () => {
        setShowExplore(true);
    }

    return (
        <div>
            <div onClick={handleClick}>
                <Image 
                    src={banner}
                    className='rounded-lg'
                    alt="Banner Image"
                />
            </div>
            {showExplore && <ExploreProduct />}
        </div>
    );
}
