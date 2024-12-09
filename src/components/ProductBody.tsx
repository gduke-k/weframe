import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import LeftDescription from './LeftDescription';
import RightDescription from './RightDescription';

const ProductBody: React.FC = () => {
    return (
        <div className='relative flex flex-wrap overflow-hidden w-100'>
            <LeftCard/>
            <RightCard/>
            <LeftDescription/>
            <RightDescription/>
        </div>
    );
};

export default ProductBody;