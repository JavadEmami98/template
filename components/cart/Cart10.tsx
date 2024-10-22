import { Box } from "@mui/material";
import React from "react";

interface Cart10Props {
  image: string;
  title: string;
}

const Cart10: React.FC<Cart10Props> = ({ image, title }) => {
  return (
    <div className="cursor-pointer max-w-[136px] w-full flex-col inline-flex bg-gray-50 rounded-lg mb-2 md:p-3">
      <div className="w-full h-full mx-auto mt-4 mb-0 flex flex-col items-center">
        <Box
          sx={{
            overflow: "hidden",
            boxSizing: "border-box",
            display: "inline-block",
            position: "relative",
            width: "3.5rem",
            height: "3.5rem",
          }}
        >
          <img src={image} alt="" loading="lazy" />
        </Box>
        <p className="text-xs md:text-base text-center font-medium text-gray-800 md:mt-4 leading-5 tracking-[-0.72px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Cart10;
