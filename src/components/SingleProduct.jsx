import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BagActions } from '../store/BagSlice';
import { itemActions } from '../store/itemsSlice';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import WishListActions from '../store/WishList';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [initialValue, setValue] = useState(false);
  const [heartClicked, setHeartClicked] = useState(true);

  const toggleHeartClick = () => {

    if (heartClicked) {
      dispatch(WishListActions.actions.addToWishList({ product }));
      setHeartClicked(false);
    }
    else {
      console.log("delete")
      dispatch(WishListActions.actions.removeFromWishList({ id: product.id }));
      setHeartClicked(true);

    }

  };

  const handleButton = (product) => {
    dispatch(itemActions.getCurrentItem({ product }));

  }
  const handleAddButton = (product) => {
    dispatch(BagActions.addToBag({ product }));
    setValue(true);
  }


  return (
    <div className="product-box">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="heart" onClick={toggleHeartClick}>
          {heartClicked ? <MdFavoriteBorder className="heart-icon" /> : <MdFavorite className="heart-icon clicked" />}
        </div>
      </div>
      <div className="product-info">
        <h3 style={{ 'color': 'blue' }}> <b> {product.name}</b></h3>
        <p>({product.unit})</p>
        <p>Price : <span style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '16px' }}>&#x20B9;{product.price}/-</span>  <del style={{ 'color': 'red' }}>&#x20B9;{product.mrp}/-</del></p>

        <div className="button-container">
          {initialValue ? <button className="btn btn-success">Added to the Cart</button> : <button className="add-to-cart-btn" onClick={() => handleAddButton(product)}>Add to Cart</button>}

          <Link to={'/view'}><button className="view-more-btn" onClick={() => handleButton(product)}> Read More </button></Link>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;