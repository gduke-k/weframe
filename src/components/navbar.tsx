import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/logo.png';
import searchIcon from '../../public/search.png';
import lightbulbIcon from '../../public/lightbulb.png';
import heartIcon from '../../public/heart.png';
import panier from '../../public/Panier.png';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const navItems = [
    'Art de la table',
    'Mobilier',
    'Nappage',
    'Matériel de salle',
    'Cuisine',
    'Barbecue',
    'Tente',
    'Chauffage',
    'Podium - Piste de danse',
    'Son et lumière',
    'Packs',
    'Consommables',
  ];

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="relative flex items-center bg-white border-b-2 border-grey-500">
      <div className="absolute top-8 left-7">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="absolute top-7 left-44 w-[768px] h-12 bg-[#F9FAFB] rounded-l-md flex items-center pl-4 gap-2">
        <input 
          type="text" 
          placeholder="Rechercher un produit" 
          className="text-[#667482] text-sm font-normal h-full w-full bg-transparent border-none outline-none" 
        />
        <button className="bg-none border-none cursor-pointer">
          <Image src={searchIcon} alt="Search Icon" />
        </button>
      </div>
      <div className="absolute top-7 right-0 flex items-center gap-4 pr-8">
        <div className="flex items-center gap-2">
          <Image src={lightbulbIcon} alt="Inspirations Icon" />
          <span className="text-sm font-medium text-[#3B4347]">Inspirations</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={heartIcon} alt="Favorites Icon" />
          <span className="text-sm font-medium text-[#3B4347]">Mes favoris</span>
          <div className="w-7 h-4 rounded-full bg-[#CAD2D566] flex items-center justify-center">
            24
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={panier} alt="Panier Icon" />
          <div className="w-10 h-10 bg-[#EAEDEE] rounded-full ml-2"></div>
          <div className="w-7 h-4 rounded-full flex items-center justify-center">FR</div>
        </div>
      </div>
      <div className="mt-[120px] ml-11 flex gap-12 items-center">
        {navItems.map((label, index) => (
          <div 
            key={index} 
            onClick={() => handleNavClick(index)} 
            className={`text-center text-[14px] leading-[21px] bg-transparent cursor-pointer ${activeIndex === index ? 'border-b-4 border-[#0093D0] text-[#0093D0]' : 'text-gray-500'}`}
          >
            {label}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;