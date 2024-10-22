import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";

interface Cart5ItemProps {
  title: string;
  image: string;
  description: string;
}

const Cart2: React.FC<Cart5ItemProps> = ({ title, image ,description }) => {
  return (
    <div className="w-full">
      <Box className="h-[258px] p-1 rounded-[30px] relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full object-cover w-full absolute bottom-0 right-0"
          loading="lazy"
        />
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,.98));",
            height: "70%",
            zIndex: "1",
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: "0",
              bottom: "0",
              color: "#FFF",
              boxSizing: "border-box",
              p: "16px",
              width: "100%",
            }}
          >
            {title && (
              <div className="flex mb-2 bg-[#ffffff26] border border-white rounded-[16px] text-white text-[11px] h-8 px-3 py-[9px] max-w-fit">
                {title}
              </div>
            )}

            <div className="flex justify-between items-center h-[37px] text-white text-[18px]  font-bold w-full cursor-pointer">
              <p> {description} </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: "36px",
                  height: "34px",
                  ":hover": { background: "#ff6161" },
                }}
              >
                <ArrowBackIosNewIcon sx={{ p: "5px" }} />
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Cart2;
