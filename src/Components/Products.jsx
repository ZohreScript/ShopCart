import React from 'react'
import {ShopData} from "../../Data/ShopData"
import ProductCard from '../Components/ProductCard'

function Products() {
  return (
    <>

      <p className='font-semibold items-start text-left text-lg m-3'>Welcome to my Clothing Shop</p>
      <div className='grid grid-cols-2 gap-10'>
      {ShopData.map((data, index) => (
        <ProductCard key={index} {...data} />
      ))}
      </div>
    </>
  );
}

export default Products