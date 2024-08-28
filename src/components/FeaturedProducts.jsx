import React from 'react'
import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <div className='mt-[3em]'>
      <SectionTitle text='featured products' />
      <ProductsGrid />
    </div>
  )
}

export default FeaturedProducts