import { Box } from "@mui/material";
import React from "react";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { MdDeliveryDining } from "react-icons/md";

interface AddressItem {
  address: string;
}


const Cart11: React.FC<AddressItem> = ({address , }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "1rem",
      }}
    >
      <div className="w-full flex items-center justify-center flex-wrap md:grid md:grid-cols-2 md:gap-3 md:mb-6">
          <div className="w-full md:col-span-1">
            <div className="overflow-hidden cursor-pointer flex items-center justify-between border border-gray-200 rounded-lg py-3 pr-3 pl-2 md:px-4 md:py-3 w-full mb-2 md:mb-0">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <div className="flex justify-center items-center border border-gray-100 rounded-full h-[88px] w-[88px]">
                  <img
                    src="/images/ok.svg"
                    alt=""
                    loading="lazy"
                    className="h-[64px] w-[64px]"
                  />
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: "0.625rem",
                    alignItems: "flex-start",
                  }}
                  className="md:mr-3"
                >
                  <h6 className="text-sm md:text-base font-bold text-gray-900 leading-5 line-clamp-1 mb-1.5 md:mb-3">
                    {address}
                  </h6>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        width: "fit-content",
                        alignItems: "center",
                        height: "1.5rem",
                        paddingY: "0.3125rem",
                      }}
                      className="md:h-8"
                    >
                      <MdDeliveryDining
                        className="w-5 h-5"
                      />
                      <p className="text-gray-700 whitespace-nowrap text-sm text-[10px] md:text-xs !font-bold mr-1">
                        تحویل در 35 دقیقه
                      </p>
                      <span className="mx-[3px]"> | </span>
                      <span className="text-green-600 text-[12px]">رایگان</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <ArrowBackIosNewOutlinedIcon
                sx={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "rgb(175, 175, 175)",
                }}
              />
            </div>
          </div>
      </div>
    </Box>
  );
};

export default Cart11;
