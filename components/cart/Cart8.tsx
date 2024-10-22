import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import Link from 'next/link';

interface Cart8Props {
  image: string;
  title: string;
  date: string;
  description: string;
}

const Cart8: React.FC<Cart8Props> = ({ image, title, date, description }) => {
  return (
    <div>
      <div className="border border-[#00000014] overflow-hidden rounded-[30px] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="pt-4 px-6 pb-6">
            <div className="text-[16px] font-bold mt-2">
              <h2>{title}</h2>
            </div>
            <div className="text-[12px] text-[#9a9a9a] mt-2">
              <p>{date}</p>
            </div>
            <div className="p-2 text-[12px] leading-6">
              <p>{description}</p>
            </div>
            <Link href="/blogsingle">
              <div className="flex justify-end">
                <Button
                  variant="contained"
                  sx={{
                    height: '42px',
                    width: '130px',
                    backgroundColor: '#35b995 !important',
                    color: '#fff',
                    borderRadius: '30px',
                    fontSize: '14px',
                  }}
                >
                  <p>ادامه مطلب</p>
                  <ArrowBackIosNewIcon sx={{ p: '5px', mr: '2px' }} />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart8;
