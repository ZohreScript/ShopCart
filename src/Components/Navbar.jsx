import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import imageUrl from '../assets/4.jpg'
import useShop from '../Context/ShopContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Navbar() {
  const { products } = useShop();

  useEffect(() => {
    if (products.length === 1) {
      toast('Cart is ready to payment');
    }
  }, [products]);

  return (
<div className="container grid gap-y-10 m-5 justify-center font-semibold font-serif text-gray-800 p-4">
      <h1 className="text-3xl">useReducer Hook Project</h1>
      <nav className="flex justify-evenly items-center">
        <Link
          to="/"
          className="hover:text-amber-800 text-amber-600 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/Cart"
          className="hover:text-amber-800 text-amber-600 font-semibold"
        >
          Cart
        <span  className='w-6 h-6 text-center inline-flex items-center justify-center bg-amber-700 text-white p-1 m-1 rounded-full'>
          {products.length}</span>
        </Link>
      </nav>
      <ToastContainer />
    </div>
  )
}

export default Navbar