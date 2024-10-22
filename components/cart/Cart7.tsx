import React from 'react';

interface ItemProps {
    imgSrc: string;
    title: string;
    date: string;
  }
  
  const Cart7: React.FC<ItemProps> = ({ imgSrc, title, date }) => {
    return (
      <div className="flex items-center p-4 border rounded-xl w-full">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="rounded-[20px] p-[8px] object-cover"
        />
        <div className="flex flex-col p-2">
          <div className="text-[13px] mb-4">
            <h3>{title}</h3>
          </div>
          <div className="text-[10px] text-[#00000061]">
            <p>{date}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart7;
  