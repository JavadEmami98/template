import React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

interface DivarItemProps {
  title: string;
  condition: string;
  price: string;
  agency: string;
  imageUrl: string;
}

const Divar: React.FC<DivarItemProps> = ({ title, condition, price, agency, imageUrl }) => {
  return (
    <div className="flex justify-between h-[168px] rounded-[4px] p-4 border border-[#C1C1C1] mb-4">
      <div className="flex justify-between flex-col w-full">
        <div className="mb-2 text-[#000000de] text-base font-medium">
          <p>{title}</p>
        </div>
        <div className="flex flex-col text-[#0000008f] text-sm leading-6">
          <p>{condition}</p>
          <p className="pl-5">{price}</p>
          <div className="flex justify-between items-center">
            <p className="text-xs">{agency}</p>
            <ChatBubbleOutlineOutlinedIcon sx={{ ml: '5px', color: '#0000008f', p: '2px' }} />
          </div>
        </div>
      </div>
      <div className="h-[136px]">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="object-cover h-[136px] min-w-[136px] rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default Divar;
