import React, { useState } from 'react';

const Article: React.FC = () => {
    const [currentIndex] = useState(0);
    const images = [
        "/Card_Product.png",
        "/Card_Product.png",
        "/Card_Product.png",
        "/Card_Product.png",
        "/Card_Product.png",
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
                        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }} // Adjust for 4 images
                    >
                        {images.map((src, index) => (
                            <div key={index} className="mx-1 flex-shrink-0 w-[calc(100%/4)]"> {/* Ensure each image takes up 1/4 of the container */}
                                <img src={src} alt={`Card Product ${index + 1}`} className="w-full h-auto" /> {/* Make images responsive */}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Retaining button UI without functionality */}
                <button 
                    className="absolute h-[46px] w-[46px] left-[-30px] top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] p-2 rounded shadow"
                >
                    &#10094; {/* Left Arrow */}
                </button>
                <button 
                    className="absolute h-[46px] w-[46px] right-[-30px] top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] p-2 rounded shadow"
                >
                    &#10095; {/* Right Arrow */}
                </button>
            </div>
        </div>
    );
};

export default Article;