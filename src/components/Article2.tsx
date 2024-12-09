import React, { useState } from 'react';

const Article2: React.FC = () => {
    const [currentIndex] = useState(0);
    const images = [
        "/Card_Product2.png",
        "/Card_Product2.png",
        "/Card_Product2.png"
    ];

    return (
        <div className='relative flex flex-wrap p-[30px] overflow-hidden'>
            <div className="flex justify-between items-center h-[43px] gap-0 w-full">
                <span className="text-[#393939] text-[24px] font-[500] leading-[43.4px] text-left">
                    Articles similaires
                </span>
                <span className="text-[#393939] text-[12px] font-[500] leading-[19.84px] text-left underline uppercase">
                    Voir toute la collection
                </span>
            </div>
            <div className="relative mt-4">
                <div className="flex overflow-hidden">
                    <div 
                        className="flex transition-transform duration-300" 
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} 
                    >
                        {images.map((src, index) => (
                            <div key={index} className="mx-1 flex-shrink-0 w-[calc(100%/3)]"> 
                                <img src={src} alt={`Card Product ${index + 1}`} className="w-full h-auto" /> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article2;