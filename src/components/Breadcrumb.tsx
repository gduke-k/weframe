// components/Breadcrumb.tsx
import React from 'react';

const Breadcrumb: React.FC = () => {
    return (
        <nav className="relative flex items-center ml-2 p-3">
            <span className="text-sm font-medium leading-[21px]">
                Home
            </span>
            <span className="w-2 h-2 bg-[#9C9C9C] rounded-full mx-2 opacity-30"></span>
            <span className="h-[21px] font-geist text-sm font-medium leading-[21px] text-[#9c9c9c]">
                Art de la table
            </span>
        </nav>
    );
};

export default Breadcrumb;