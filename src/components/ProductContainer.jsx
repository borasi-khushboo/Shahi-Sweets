import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux'
import SingleProduct from './SingleProduct';

const ProductContainer = () => {
  const { products } = useSelector(state => state.items);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className='text-center product-container'>Sweet Dishes</h1>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} arrows={true}>
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default ProductContainer;