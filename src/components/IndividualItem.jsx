import { useDispatch, useSelector } from "react-redux";
import { BagActions } from '../store/BagSlice'
import { useState } from "react";


const IndividualItem = () => {

  const [initialValue, setValue] = useState(false);
  const { currentItem } = useSelector(state => state.items);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(BagActions.addToBag({ product }));
    setValue(true);
  }
  return (
    <div className="mt-5" >
      <video className="background-video" autoPlay muted loop>
        <source src={currentItem.video} type="video/mp4" />
      </video>
      <div className="content container">
        <div className="row">
          <div className="offset-md-2 col-md-7 col-12">
            <p> <span className="gold">History Of </span>{currentItem.name}</p>
            <p> <span className="gold">City Of Origin:</span>  {currentItem.city}</p>
            <p>{currentItem.description}</p>
            <p> <span className="gold">Price: </span>  <span style={{ 'fontWeight': 'bold', 'fontSize': '20px' }}>&#x20B9;{currentItem.price}/-</span> ( {currentItem.unit})</p>
            {initialValue ? <button className="btn btn-success">Added to the Cart</button> : <button className="add-to-cart-btn" onClick={() => handleAdd(currentItem)}>Add to Card</button>}

          </div>

        </div>



      </div>



    </div>

  );
}
export default IndividualItem;