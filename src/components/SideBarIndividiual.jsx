import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BagActions } from '../store/BagSlice'
import { WishListActions } from '../store/WishList';

const SideBarIndividiual = ({ item }) => {
  const dispatch = useDispatch();

  const handleOnclik = (product) => {
    dispatch(BagActions.addToBag({ product }));
    dispatch(WishListActions.removeFromWishList({ id: product.id }));
  }

  return (
    <li key={item.id}>

      <img src={item.image} alt={item.name} />
      <div>

        <h4>{item.name}</h4>
        <p>({item.unit})</p>
        <p >Price: <span style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '16px' }}>&#x20B9;{item.price}/-</span></p>
        <button className='btn btn-success' onClick={() => handleOnclik(item)}>Add to Cart</button>

      </div>
    </li>
  );
};

export default SideBarIndividiual;
