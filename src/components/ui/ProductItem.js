import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

export default function ProductItem({product}) {
  return (
    <div className='relative bg-white flex gap-y-1 flex-col items-center text-center text-sm font-semibold p-3'>
        <button className='absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white text-brand-color rounded-lg border border-gray-200 shadow-md transition-colors hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color'>
            <AiOutlinePlus size={16}/>
        </button>
      <img src={product.image} alt={product.title} />
      <div className='text-brand-color'>{product.price}</div>
      <div className='text-gray-900'>{product.title}</div>
      <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}
