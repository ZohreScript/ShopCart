import React from 'react';
import useShop from '../Context/ShopContext';
import { useState, useEffect } from 'react';


const ProductCard = ({ name, imageUrl, price }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <div
        className="relative shadow-2xl items-end w-[240px] h-[340px] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div
          className={`${isInCart ? 'bg-red-500' : 'bg-green-500'} absolute flex justify-center items-center top-4 right-4 w-8 h-8 rounded-full cursor-pointer transform transition-all hover:scale-125`}
          data-isincart={isInCart}
          onClick={handleClick}
        >
          <p className="text-white text-xl font-bold">{isInCart ? '-' : '+'}</p>
        </div>
        <div className="absolute bottom-0 w-full left-0 bg-black bg-opacity-50 p-4">
          <p className="text-white text-2xl text-left font-bold">{name}</p>
          <p className="text-white text-sm text-left text-opacity-70">{price}.00$</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;