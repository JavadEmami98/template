import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

const Product1: React.FC<ProductCardProps> = ({ title, image ,description , price}) => (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl w-64">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <p className="text-xl font-bold mb-3">${price}</p>
      <button
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"  
      >
        خرید
      </button>
    </div>
  </div>
);

export default Product1;
