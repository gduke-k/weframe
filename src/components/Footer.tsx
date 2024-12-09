import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="flex relative h-[171px] border-t border-[#39393930] mt-11">
            <div className="absolute w-[799px] h-[130px] top-0 left-4 flex items-center gap-10">
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-[133px] h-[65px]" 
                />
                <div className="flex w-[626px] h-[130px] gap-20">
                    <div className="flex flex-col justify-center h-full">
                        <span className="text-[14px] font-bold text-[#393939] leading-[22.32px]">
                            INFOS PRATIQUES
                        </span>
                        {["À propos", "Livraisons & Reprises", "Mode d’emploi", "F.A.Q"].map((item, index) => (
                            <span key={index} className="text-[12px] font-normal text-[#393939] leading-[17.36px]">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <span className="text-[14px] font-bold text-[#393939] leading-[22.32px]">
                            LÉGAL
                        </span>
                        {["Mentions légales", "CGU", "CGV", "Politique de confidentialité"].map((item, index) => (
                            <span key={index} className="text-[12px] font-normal text-[#393939] leading-[17.36px]">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <span className="text-[14px] font-bold text-[#393939] leading-[22.32px]">
                            MON COMPTE
                        </span>
                        {["Accéder à mon compte", "Ma liste d’envie", "Créer un compte", "Mot de passe oublié"].map((item, index) => (
                            <span key={index} className="text-[12px] font-normal text-[#393939] leading-[17.36px]">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="absolute w-[120px] h-[76.65px] left-[1400px] flex flex-col justify-center gap-3">
                        <span className="text-[14px] font-bold text-[#393939] leading-[17.36px]">
                            NOUS SUIVRE
                        </span>
                        <div className="flex gap-1">
                            <img 
                                src="/twitter.png" 
                                alt="Twitter" 
                                className="w-[30px] h-[30px]" 
                            />
                            <img 
                                src="/instagram.png" 
                                alt="Instagram" 
                                className="w-[30px] h-[30px]" 
                            />
                            <img 
                                src="/linkedin.png" 
                                alt="LinkedIn" 
                                className="w-[30px] h-[30px]" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;