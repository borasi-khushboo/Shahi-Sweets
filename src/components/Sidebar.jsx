import React from 'react';
import { useSelector } from 'react-redux';
import SideBarIndividiual from './SideBarIndividiual';
import { Link } from 'react-router-dom';



const SidebarCart = ({ isOpen, toggleSidebar }) => {
  const BagItems = useSelector((state) => state.BagItems);
  const WishListItems = useSelector((state) => state.WishList);
  WishListItems.map((item) => {
    console.log(item);
  })
  console.log(WishListItems.length);
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>✖</button>
      <h2>Favourite Dishes</h2>


      {WishListItems.length === 0 ? (
        <div>

          <p>Your cart is empty.</p>
          <img src="videos/Grocery cart Loader.gif" className='empty_card'></img>
          <Link to={'/dishes'}><button className="btn btn-info">Explore Our Dishes</button></Link>
        </div>
      ) : (


        <ul>

          {WishListItems.map((item) => (
            <SideBarIndividiual key={item.id} item={item} />
          ))}
        </ul>

      )}
    </div>
  );
};

export default SidebarCart;
