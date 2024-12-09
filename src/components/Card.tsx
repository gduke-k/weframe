import Image from "next/image";

const Card = () => {
  return (
    <div className="relative w-64 bg-white rounded-lg shadow-md">
      <div className="absolute top-2 left-2">
        <Image
          src="/heart.png"
          alt="Heart icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>

      <div className="absolute top-2 right-2 bg-gray-100 text-gray-700 text-xs font-medium py-1 px-3 rounded-full">
        ART DE LA TABLE
      </div>

      <div className="p-4">
        <Image
          src="/tablebig.png"
          alt="Product"
          width={256}
          height={256}
          className="rounded-md object-cover mx-auto"
        />
      </div>
      <div className="px-4 pb-4">
        <div className="text-lg font-semibold text-gray-900">Title</div>
      
        <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
          <div>
            0,35€/Pièce <span className="text-xs">• REF: VARIGN5</span>
          </div>
          <div className="text-xl text-gray-900 font-bold">0°</div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 bg-blue-100 text-blue-700 text-sm font-semibold py-1 px-3 rounded-full">
        20 pièces
      </div>
    </div>
  );
};

export default Card;
