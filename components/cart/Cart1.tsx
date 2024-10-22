import { Box, Typography } from "@mui/material";
import React from "react";

interface CartItemProps {
  title: string;
  image: string;
  description: string;
}

const Cart1: React.FC<CartItemProps> = ({ title, image, description }) => {
  return (
    <Box
      sx={{
        height: "283px",
        width: "100%",
        border: "1px solid #00000014",
        borderRadius: "30px",
        overflow: "hidden",
        cursor: "pointer",
        mb: "16px",
      }}
    >
      <img
        src={image}
        alt={title}
        className="h-[190px] object-cover w-full"
        loading="lazy"
      />
      <Box sx={{ display: "flex", flexDirection: "column", p: "16px" }}>
        <Typography component={"div"} sx={{ fontSize: "14px", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography component={"div"} sx={{ mt: "8px", fontSize: "13px", color: "#0000008a" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart1;
