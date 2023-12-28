import React from 'react'
import useShop from "../Context/ShopContext";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "./ProductCard";

const Cart = () => {
  const { products, total } = useShop();

  return (
    <>
      <p className='font-semibold items-start text-left text-lg m-3'>Your cart total is {total}.00$</p>
      <div className='grid grid-cols-2 gap-10'>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
   
    </>
  );
}

export default Cart;
