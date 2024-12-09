import React from 'react';

const LeftDescription: React.FC = () => {
    return (
        <div className="flex relative mt-4 w-[48%] ml-5">
            <div className="w-full">
                <h2 className="text-[20px] text-[#111928] mb-2">Description produit</h2>
                <p className="text-[#9C9C9C] text-[14px] font-normal leading-[18.2px] text-left">
                    Festi vous propose à la location un/une Jewel grand couteau/10pc pour votre événement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête danniversaire ou du personnel, ce produit a fait lobjet dune sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence VAJGC. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver toute une série dautres produits à louer de ce type dans la catégorie Art de la Table.
                </p>
            </div>
        </div>
    );
};

export default LeftDescription;