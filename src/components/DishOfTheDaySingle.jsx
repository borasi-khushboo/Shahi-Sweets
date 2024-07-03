import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BagActions } from "../store/BagSlice";
import { useState } from "react";

const DishOfTheDaySingle = ({ newObj }) => {
  const dispatch = useDispatch();
  const [isFetched, SetisFetched] = useState(false);
  const handleReadMore = () => {
    SetisFetched(!isFetched);
  }
  const [initialValue, setValue] = useState(false);
  const handleAddButton = (product) => {
    dispatch(BagActions.addToBag({ product }));
    setValue(true);

  }

  const shortDescription = newObj.description?.slice(0, 300);
  return <>
    <div className="row justify-content-center align-items-center">

      <div className="video col-md-5 col-10">
        <video autoPlay muted loop style={{ "borderRadius": "5px" }}>
          <source src={newObj.video} type="video/mp4" />
        </video>
      </div>
      <div className="dish-content col-md-5 col-10">
        <h1>{newObj.name}</h1>
        <div onClick={handleReadMore}>
          {
            isFetched ? (<p>{newObj.description} <span className="read-less" >Read Less</span></p>) : <p>{shortDescription}<span className="read-more" >Read More...</span></p>
          }
        </div>

        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
        <p>Price: <span style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '20px' }}>&#x20B9;{newObj.price}/-</span> ({newObj.unit})</p>
        {
          initialValue ? <button className="btn btn-success">Added to the cart</button> : <button className="btn btn-info" onClick={() => handleAddButton(newObj)}>Add to Cart</button>
        }

      </div>

    </div>
  </>
}

export default DishOfTheDaySingle;