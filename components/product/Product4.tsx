import React from 'react';

interface ProductCartProps {
  image: string;        
  description: string;  
  price: string;          
}

const Product4: React.FC<ProductCartProps> = ({ image, description, price }) => {
  return (
    <div className="max-w-[305px] min-h-[293px] overflow-hidden bg-white">
      <div className='max-w-[160px] max-h-[160px] mx-auto w-full'>
        <img className="w-full p-[5px] object-cover" src={image} alt="Product" />
      </div>
      <h2 className="text-sm leading-6 m-4 text-[#4c4c4c] text-center overflow-hidden">{description}</h2>
      <div className='flex mx-auto justify-center items-center'>
        <p className="text-sm font-bold text-[#191919]">{price}</p>
        <p className='text-[#6b7074] text-xs mr-2 leading-6'>تومان</p>
      </div>
      <button
        className="mt-4 mx-[87.5px] bg-[#ef4056] text-white font-semibold text-sm rounded-[5px] w-[130px] leading-8"
      >
        مشاهده و خرید 
      </button>
    </div>
  );
};

export default Product4;
