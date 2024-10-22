import { Box, Typography } from "@mui/material";
import React from "react";

// Define the item type
interface CartItem {
  title: string;
  image: string;
}

// Sample items array
const items: CartItem[] = [
  {
    title: "Product X",
    image: "/images/cart1.jpg",
  },
  {
    title: "Product Y",
    image: "/images/cart1.jpg",
  },
  {
    title: "Product Y",
    image: "/images/cart1.jpg",
  },
  // Add more items as needed
];

const Cart3: React.FC = () => {
  return (
    <>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            height: "200px",
            width: "100%",
            border: "1px solid #00000014",
            borderRadius: "30px",
            overflow: "hidden",
            cursor: "pointer",
            position: "relative",
            mb: "16px", // Add margin for spacing between items
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-[198px] object-cover w-full z-0 relative"
            loading="lazy"
          />
          <Box
            sx={{
              display: "flex",
              backgroundImage: "linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.78) 100%)",
              height: "60%",
              zIndex: "2",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.78) 100%)",
                height: "60%",
                zIndex: "1",
                position: "absolute",
                bottom: "0",
                width: "100%",
              }}
            >
              <Typography
                component={"div"}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: "0",
                  p: "8px 12px",
                  mb: "8px",
                  color: "#FFFFFF",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Cart3;
