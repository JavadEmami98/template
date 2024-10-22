import { Box, Button } from "@mui/material";
import React from "react";

interface CartImageComponentProps {
  title: string;
  subtitle: string;
  image: string;
}

const Cart5: React.FC<CartImageComponentProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative mt-5 w-full h-[309px] cursor-pointer overflow-hidden rounded-[8px]">
      <Box
        sx={{
          img: {
            transition: "all ease-in 300ms",
          },
          ":hover": {
            img: {
              transform: "scale(1.2)",
              transition: "all ease-in 500ms ",
            },
          },
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute w-full h-[309px] z-[-10] rounded-[8px] overflow-hidden"
        />
        <div className="p-[30px]">
          <h3 className="text-[#2e6bc6] lg:text-[15px] text-[13px] ">
            {title}
          </h3>
          <h4 className="mt-[7px] lg:text-[36px] md:text-[23px] text-[19.78px] text-[#242424]">
            {subtitle}
          </h4>
          <Button
            variant="contained"
            sx={{
                width: "96.78px !important",
                height: "42px !important",
                ml: "15px",
                fontSize: "13px",
                backgroundcolor: "#2e6bc6 !important",
                mt: "15px",
            }}
          >
            فروشگاه
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Cart5;
