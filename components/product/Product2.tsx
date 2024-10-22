import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

const Product2: React.FC<ProductCardProps> = ({ title, image ,description , price}) => (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-64">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-white mb-2">{description}</p>
      <p className="text-xl font-bold mb-3">${price}</p>
      <button
        className="w-full bg-white text-blue-500 py-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        خرید
      </button>
    </div>
  </div>
);

export default Product2;
