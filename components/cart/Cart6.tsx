import { Avatar } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


interface Cart6Props {
  image: string;        
  description: string;   
  avatarImage: string;  
  author: string;        
  time: string;          
}

const Cart6: React.FC<Cart6Props> = ({ image, description, avatarImage, author, time }) => {
  return (
    <div>
      <div
        style={{
          boxShadow: '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        }}
        className='flex flex-col justify-between max-w-[280px] min-h-[315px]  rounded-[3px] overflow-hidden'
      >
        <img src={image} alt="" className='h-[180px]'/>
        <p className='text-[14px] text-[#6a7075] py-2 px-4 text-right leading-6'>
          {description}
        </p>
        <div className='flex justify-between items-center mb-5 mx-5'>
          <div className='flex items-center'>
            <Avatar alt="" src={avatarImage} className='w-[30px] h-[30px]' />
            <p className='pr-[10px] text-[#afb6bc] text-[11px]'>{author}</p>
          </div>
          <div className='flex items-center'>
            <AccessTimeIcon sx={{ color: "#afb6bc", width: "15px" }} />
            <p className='pr-[10px] text-[#afb6bc] text-[12px]'>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart6