import React from 'react';
import { IoTicket } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineSportsMotorsports } from "react-icons/md";


interface Product6Props {
  title: string;
  offer: number;
  users: string; 
  topping: string; 
  peyk: number; 
  rate: number;
}

const Product6: React.FC<Product6Props> = ({ title, offer, users, topping, peyk, rate }) => {
  return (
    <div>
      <div className='flex flex-col border border-[#3a3d420f] pb-[1.5rem] bg-[#fff] rounded-lg overflow-hidden cursor-pointer h-[21.3125rem] hover:shadow-[rgba(58,61,66,0.06)_0px_1px_0px,_rgba(0,0,0,0.3)_0px_8px_32px_-16px] shadow-[rgba(58,61,66,0.06)_0px_1px_0px,_rgba(0,0,0,0.05)_0px_2px_8px_-2px]'>
        <div className='relative flex justify-center items-end flex-grow h-[9.6875rem] min-h-[9.6875rem] max-h-[9.6875rem]'>
          <img src="/images/ghaza.jpg" alt="" loading='lazy' className='w-full h-full object-cover' />
          <div className='flex items-center justify-center absolute right-0 left-0 m-auto w-[5.5rem] h-[5.5rem] bg-[#fff] rounded-[0.75rem] translate-y-5'>
            <img src="/images/loghme.jpg" alt="" className='border rounded-xl border-[#3a3d420f] w-[80px] h-[80px]' />
          </div>
          <div className="flex items-center absolute top-5 right-0 left-auto max-w-[calc(100%-26px)] p-1 pr-2 pl-3 bg-white rounded-l-full rounded-r-none">
            <IoTicket className='text-[#008542] w-4 h-4' />
            <span className='mr-[0.28125rem] text-[#008542] text-nowrap text-ellipsis text-[0.75rem] font-medium overflow-hidden pt-[0.125rem]'>
              کباب کوبیده مخصوص یک سیخ رایگان با خرید حداقل ۳۰۰ هزار تومان
            </span>
          </div>
          <div className='absolute right-0 bottom-0 bg-white rounded-tl-xl'>
            <span className='text-[#e00096] leading-5 text-[0.875rem] font-bold w-auto h-auto py-1 px-3'>
              {offer}%
            </span>
          </div>
        </div>
        <div className='flex justify-between flex-grow flex-col'>
          <div className='flex flex-col items-center mt-[1.75rem]'>
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap overflow-wrap-normal font-bold text-lg leading-7 w-auto h-auto p-0 mb-2 inline-block text-[#3A3D42] text-center">
              {title}
            </h2>
            <div className='flex items-center mb-2'>
              <div className='flex items-center ml-2'>
                <FaStar className='w-[12px] h-[12px] ml-1 align-middle text-yellow-400' />
                <span className='text-[#3a3d42] font-bold leading-4 text-[0.75rem]'>{rate}</span>
              </div>
              <p className="font-normal text-xs leading-4 w-auto h-auto p-0 m-0 inline-block text-[#A6AAAD] text-left">
                {users}
              </p>
            </div>
            <h3 className="font-normal text-xs leading-4 w-auto h-auto p-0 mb-3 inline-block text-[#A6AAAD] text-left">
              {topping}
            </h3>
          </div>
          <div className="flex justify-center content-start items-start flex-row">
            <div className="flex items-center p-[0.6875rem] text-left bg-white rounded-[4.5rem] shadow-[rgba(58,61,66,0.06)_0px_1px_0px,rgba(0,0,0,0.05)_0px_2px_8px_-2px]">
              <MdOutlineSportsMotorsports className='ml-2 w-5 h-5' />
              <p className="font-normal text-xs leading-4 w-auto h-auto p-0 ml-2 inline-block text-[#3A3D42] text-left">
                ارسال اکسپرس
              </p>
              <span className='text-[1rem] text-[#3a3d42] font-bold leading-4 ml-1'>{peyk}</span>
              <span className='text-[1rem] text-[#3a3d42] font-normal leading-4'>تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product6;
