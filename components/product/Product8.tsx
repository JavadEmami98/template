"use client";
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";


interface Product8Props {
    image: string;
    discount: number;
    oldPrice: string | number;
    price: string | number;
  }

const Product8: React.FC<Product8Props> = ({ image, discount, oldPrice, price }) => {
    const [isClicked, setIsClicked] = useState(true); 

    const handleClick = () => {
        setIsClicked(!isClicked);
      };
    
  return (
    <div>
        <div className='flex flex-col items-center h-full overflow-hidden select-none cursor-pointer w-[110px] flex-none mx-1'>
            <div className='w-full flex flex-col items-center rounded-t-2xl rounded-b-sm border-box bg-white   px-2 pt-1 pb-2'>
                <div className='w-[96px] h-[96px] relative mx-auto'>
                    <div className='box-border block max-w-full'>
                        <img src={image} alt="" className='w-[96px] overflow-hidden h-[96px] object-cover absolute m-auto'/>
                    </div>
                    <div className='w-auto h-5 text-center text-[11px] font-semibold leading-none text-white border border-white rounded-[100px] py-1 px-2 max-w-10 top-[52px] left-[50px] absolute bg-[#ff3151]'>{discount}%</div>
                </div>
                <div className='h-5 flex flex-col items-end justify-end cursor-pointer select-none mt-1 w-full z-50'>
                    <div className='flex items-center text-[#888888] leading-[8px]'>
                        <p className='body-price-tag-2 line-through text-[8px] font-normal'>{oldPrice}</p>
                        <span className='typo-body-1 text-[8px] font-normal mr-1'>تومان</span>
                    </div>
                    <div className='flex items-center text-[#111111] leading-3 mt-1'>
                        <p className='body-price-tag tracking-tight text-xs font-normal'>{price}</p>    
                        <span className='typo-body-3 font-normal text-[11px] mr-1'>تومان</span>
                    </div> 
                </div>
              
            </div> 
           {isClicked ? (
        <div   onClick={handleClick} className="w-full bg-white border-t-2 p-0 overflow-hidden h-7 flex items-center justify-center rounded-b-2xl rounded-t-sm text-center mt-[2px]">
          <div className="w-full px-0.5 bg-white">
            <button
              className="flex items-center justify-center h-8 typo-subtitle-3 px-6 rounded-full font-semibold w-full"
            
            >
              <IoMdAdd className="w-5 h-5 text-[#ff3151]" />
            </button>
          </div>
        </div>
      ) : (
        <div onClick={handleClick} className="w-full bg-white overflow-hidden h-7 flex items-center justify-center rounded-b-2xl rounded-t-sm text-center mt-[2px]">
          <div className="w-full px-0.5 bg-[#FF3151]">
            <div className="w-full flex justify-between items-center">
              <button
                className="flex items-center justify-center h-8 w-8 typo-subtitle-3 rounded-xl font-semibold"
              
              >
                <IoMdAdd className="w-5 h-5 text-[#fff]" />
              </button>
              <div className="text-sm font-semibold text-center leading-tight tracking-tight pt-1 text-white">
                1
              </div>
              <button className="flex items-center justify-center h-8 w-8 typo-subtitle-3 rounded-xl font-semibold">
                <AiOutlineDelete className="w-5 h-5 text-[#fff]" />
              </button>
            </div>
          </div>
        </div>
      )} 
        </div>

    </div>
  )
}

export default Product8;