import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface Cart9Props {
  image: string;
  title: string;
  date: string;
  description: string;
}

const Cart9: React.FC<Cart9Props> = ({ image, title, date, description }) => {
  return (
    <div>
      <div className="border border-[#00000014] overflow-hidden rounded-[30px] mb-4 w-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="object-cover w-full max-h-[405px]"
        />
        <div className="pt-4 pb-6 px-6">
          <div className="mb-2 text-[18px] font-bold">
            <h2>{title}</h2>
          </div>
          <div className="text-[12px] text-[#9a9a9a] leading-5">
            <p>{date}</p>
          </div>
          <div className="p-2 text-[12px] leading-8">
            <p>{description}</p>
          </div>
          <div className="flex justify-end">
            <Button
              variant="contained"
              sx={{
                height: "42px",
                width: "130px",
                backgroundColor: "#35b995 !important",
                color: "#fff",
                borderRadius: "30px",
                fontSize: "14px",
              }}
            >
              <p>ادامه مطلب</p>
              <ArrowBackIosNewIcon sx={{ p: "5px", mr: "2px" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart9;
