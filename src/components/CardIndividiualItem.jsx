
import { IoAdd, IoRemove } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { BagActions } from "../store/BagSlice";
import { Link } from "react-router-dom";


const CardIndividiualItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(BagActions.addToBag({ product }));
  };

  const handleRemoveButton = () => {
    dispatch(BagActions.removeFromBag({ product }));
  };
  const handleDeleteButton = () => {
    dispatch(BagActions.deleteFromBag({ product }));

  }

  return (
    <div className="CardItem">
      <div className="CardItem-img">
        <img src={product.image} alt="" />
      </div>

      <div>
        <p> <h4>{product.name}</h4> ({product.unit})</p>
        <p style={{ "color": "green", "font-weight": "bold" }}>In Stock</p>
        <p>MRP. <span style={{ 'color': 'red' }}>&#x20B9;{product.mrp}/-</span></p>
        <p>Offer Price. <span style={{ 'color': 'rgb(4, 98, 4)', 'fontWeight': 'bold', 'fontSize': '17px' }}> &#x20B9;{product.price * product.quantity}/-</span> </p>
        <p>Quantity: <span className="green"><IoRemove onClick={handleRemoveButton} style={{ 'color': "white", 'fontWeight': 'bold' }} /> {product.quantity} <IoAdd onClick={handleAddButton} /></span></p>
        <button className="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default CardIndividiualItem;



