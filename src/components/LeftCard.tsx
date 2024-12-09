import React from 'react';

const LeftCard: React.FC = () => {
    return (
        <div className="flex relative w-[48%] h-[635px] ml-5 rounded-md bg-[#F8F6F4]">
            <div className="absolute top-4 left-4 flex flex-col gap-4">
                <img src="/tablesmall.png" alt="Table Small" className="w-[40px] h-[40px]" />
                <img src="/tablesmall.png" alt="Table Small" className="w-[40px] h-[40px] opacity-50" />
                <img src="/tablesmall.png" alt="Table Small" className="w-[40px] h-[40px] opacity-50" />
                <img src="/tablesmall.png" alt="Table Small" className="w-[40px] h-[40px] opacity-50" />
            </div>
            <div className="flex items-center justify-center absolute inset-0">
                <img src="/machine.png" alt="Machine" className="object-contain" />
            </div>
        </div>
    );
};

export default LeftCard;