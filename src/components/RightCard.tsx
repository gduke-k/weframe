import React, { useState } from 'react';

const RightCard: React.FC = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex flex-col relative w-[48%] h-[635px] ml-4">
            <div className="relative flex justify-between items-start w-full pl-3 text-[30px] font-normal leading-[37.5px] text-gray-900">
                <span>Cheese – appareil à raclette 1/2 roue</span>
                <img src="/heart.png" alt="Heart" className="ml-2 w-[30px] h-[30px]" />
            </div>
            <div className="relative flex items-center w-full pl-2 mt-1">
                <span className="text-[24px] font-normal leading-[30px] decoration-gray-900 text-gray-900">
                    39,50€
                </span>
                <span className="text-[14px] font-normal leading-[17.5px] text-gray-400 ml-1">
                    /pièce
                </span>
            </div>
            <div className="w-full border-t border-[#9C9C9C] opacity-40 mt-2"></div>
            <div className="flex mt-2 ml-2">
                <img src="/20cm.png" alt="20 cm" className="mr-2" />
                <img src="/50cm.png" alt="50 cm" />
                <div className="flex items-center ml-auto">
                    <span className="text-[#9C9C9C] text-[12px]">RÉF : VABGN5</span>
                </div>
            </div>
            
            <div className="w-full border-t border-[#9C9C9C] opacity-40 mt-2"></div>
            <div className="h-[410px] mt-2 pl-3 text-[#5D5D5D] text-[14px] leading-[18px]">
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
                <br />
                Réglable en hauteur
                <br />
                Appareil à raclette professionnel
                <br />
                Boîtier de chauffe horizontal réglable en hauteur
                <br />
                <br />
                220V
                <br />
                900W
            </div>
            
            <div className="w-full border-t border-[#9C9C9C] opacity-40 mt-2"></div>

            <div className="flex items-center rounded-md justify-between mt-4 ml-4">
                <div className="flex items-center border-b-4 bg-white justify-between w-[150px] h-[50px]">
                    <button 
                        onClick={decreaseCount} 
                        className="p-4 text-[28px]"
                    >
                        -
                    </button>
                    <span className="text-[16px]">{count}</span>
                    <button 
                        onClick={increaseCount} 
                        className="p-4 text-[28px]"
                    >
                        +
                    </button>
                </div>
                <button className="flex w-[100%] h-[47px] bg-[#5CD2DD] text-white text-[16px] rounded-md justify-center items-center ml-4 mr-4">
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default RightCard;