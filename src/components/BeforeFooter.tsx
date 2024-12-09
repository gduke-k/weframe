import React from 'react';
import Image from 'next/image';
import sofa from '../../public/sofa.png';
import subs from '../../public/subs.png'; 

const BeforeFooter: React.FC = () => {
    return (
        <div className="flex relative ml-2 t-2 flex-wrap gap-2">
            <div>
                <Image 
                    src={sofa} 
                    alt="Sofa Image" 
                    className="rounded-[20px] object-cover"
                />
            </div>
            <div className="relative w-[790px] h-[300px] rounded-[20px] bg-[#FFF3F9]">
                <div className="absolute w-[726px] h-[53px] top-8 left-8">
                    <p className="text-[43px] font-medium leading-[53.32px] underline decoration-transparent">
                        S’inscrire & économiser 10%
                    </p>
                </div>
                <div className="absolute w-[753px] h-[71px] top-24 left-8 text-[#BDA2B0]">
                    <p>
                        Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didnt. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
                    </p>
                </div>
                {/* Search Box */}
                <div className="absolute flex items-center top-[188px] left-[34px]">
                    <input 
                        type="text" 
                        placeholder="john@doe.com" 
                        className="w-[565px] h-[58px] rounded-[8px] pl-4 outline-none border-[#F5E1EB] bg-[#FFFFFF] text-[#A68A98] text-[18px] font-[300] leading-[18px] text-left"
                    />
                    <button>
                    <Image 
                        src={subs} 
                        alt="Subscription Icon" 
                        className="ml-2" // Margin left for spacing
                    />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeforeFooter;