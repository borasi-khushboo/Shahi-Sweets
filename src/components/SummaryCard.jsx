import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BagActions } from '../store/BagSlice';


const SummaryCard = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const BagItems = useSelector((state) => state.BagItems);
  const totalItems = Object.values(BagItems).reduce((total, item) => total + item.quantity, 0);
  const totalPrice = Object.values(BagItems).reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalMRPPrice = Object.values(BagItems).reduce((total, item) => total + (item.mrp * item.quantity), 0);
  const totalUniqueItems = Object.keys(BagItems).length;

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    dispatch(BagActions.emptyBag());
    console.log(BagItems);
  };
  return (
    <div>
      <div className="card summary-card">
        <div className="card-body">
          <h3 className="card-title">Bill Details</h3>
          <p className="card-text">Total Unique Items: {totalUniqueItems}</p>
          <p className="card-text">Total Quantity of Items: {totalItems}</p>
          <p className="card-text">Delivery Charges: &#x20B9;65/-</p>
          <p className="card-text" style={{ "color": "blue" }}>Saved on MRP: &#x20B9;{totalMRPPrice - totalPrice}/-</p>
          <p className="card-text">Grand Total:  <span style={{ 'color': 'green', 'fontWeight': 'bolder', 'fontSize': '18px' }}>&#x20B9;{totalPrice + 65}/-</span> </p>
          <button className="btn btn-success" onClick={handlePlaceOrder}>Place Order </button>
        </div>
      </div>
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Congratulations 🎉🎉🎉🎉!</h5>
                <button type="button" className="close btn " onClick={handleCloseModal} aria-label="Close">
                  X
                </button>
              </div>
              <div className="modal-body">
                <video className="text-center" autoPlay muted loop style={{ "width": '200px', "height": "200px" }}>
                  <source src="videos/Laddu.mp4" type="video/mp4" />
                </video>
                <p>Your order has been placed successfully  &#128077; !</p>
              </div>
              <div className="modal-footer">
                <Link to={'/'}><button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
