'use client'
import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import React from "react";

interface Cart8ItemProps {
  title: string;
  image: string;
  description: string;
}

const Cart4: React.FC<Cart8ItemProps> = ({ title, image, description }) => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #00000014",
        borderRadius: "30px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <img src={image} alt={title} className="h-[200px] object-cover w-full z-0 relative" loading="lazy" />
      <Box sx={{ display: "flex", zIndex: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", position: "absolute", top: "20px", right: "10px", color: "#FFFFFF" }}>
          <StarIcon sx={{ p: "4px", mb: "3px" }} />
          <Typography sx={{ fontSize: "12px" }}>5</Typography>
        </Box>
        <Box
          sx={{
            background: "linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0, 0.78) 100%)",
            height: "60%",
            zIndex: 1,
            position: "absolute",
            top: "17.8%",
            width: "100%",
          }}
        >
          <Typography
            component={"div"}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              position: "absolute",
              bottom: 0,
              p: "8px 12px",
              mb: "8px",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: "16px", fontSize: "12px", mt: "8px" }}>
        <Typography sx={{ color: "#000000de", fontSize: "12px" }}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default Cart4;
