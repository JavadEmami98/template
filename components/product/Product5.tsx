import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

interface ProductCardHorizontalProps {
  imageUrl: string;
  title: string;
  storeName: string;
  remainingItems: number;
  rating: number;
  currentPrice: number;
  oldPrice: number;
  discountPercentage: number;
  peyk: number;
}

const Product5: React.FC<ProductCardHorizontalProps> = ({
  imageUrl,
  title,
  storeName,
  remainingItems,
  rating,
  currentPrice,
  oldPrice,
  discountPercentage,
  peyk
}) => {
  return (
    <div style={{
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 0px 1.5px rgba(0, 0, 0, 0.3)"
    }}
     className="flex flex-col gap-3 w-full border border-gray-200 rounded-lg shadow-sm p-2">
      <div className='flex justify-between w-full items-start'>
        <div className='flex'>
      <div className="w-[72px] h-[72px]">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="flex-1 pr-2">
        <div className="flex items-center justify-between">
          <span className="text-[#404040] whitespace-nowrap font-semibold text-sm">{title}</span>
        </div>
        <div className="text-[#53565c] mt-1 text-xs">{storeName}</div>
        <div className="text-[#404040] font-medium text-xs mt-1">{remainingItems} عدد باقی‌مانده</div>
      </div>
       </div>
       <div className="flex gap-1 items-center min-w-[40px] h-[20px] p-2 bg-[#13141f0d] rounded-[4px] text-xs">
            <StarRateIcon sx={{width:"14px",height:"14px",color:"#404040"}}/>
            <span className='text-[12px] text-[#404040]'>{rating}</span>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#f2f2f2]'></div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-1 items-center'>
            <SportsMotorsportsIcon sx={{color:"#FF00A4"}}/>
            <span className='text-[12px] text-[#404040]'>{peyk}</span>
            <span className='text-[12px] text-[#404040]'>تومان</span>
        </div>
        <div className="flex items-center gap-[2px]">
        <div className="bg-[#FF00A4] text-white text-xs rounded-[4px] font-bold px-[2px]">
            {discountPercentage}%
        </div>
        <div className="line-through mx-1 text-[#A3A3A3] text-xs">
            {oldPrice.toLocaleString()} تومان
          </div> 
        <div className="text-[#404040] font-bold text-[17px]">
          {currentPrice.toLocaleString()} <span className='text-[12px] text-[#404040] font-normal'>تومان</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Product5;
