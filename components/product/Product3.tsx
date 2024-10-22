import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  discountPercentage: number;
}

const Product3: React.FC<ProductCardProps> = ({ image, title, price, oldPrice, discountPercentage }) => {
  return (
    <div className="w-64 border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Product Image */}
      <div className="flex justify-center p-4">
        <img src={image} alt={title} className="h-32 object-contain" />
      </div>

      {/* Product Title */}
      <div className="px-4 py-2 text-gray-700 text-right font-medium text-sm">
        {title}
      </div>

      {/* Product Pricing */}
      <div className="px-4 py-2 flex justify-between items-center">
        {/* Price Section */}
        <div className="text-left">
          <div className="text-red-600 text-lg font-bold">
            {price.toLocaleString()} تومان
          </div>
          <div className="line-through text-gray-400 text-sm">
            {oldPrice.toLocaleString()} تومان
          </div>
        </div>

        {/* Discount Badge */}
        <div className="bg-red-600 text-white text-sm rounded-full px-3 py-1">
          {discountPercentage}%
        </div>
      </div>
    </div>
  );
};

export default Product3;
