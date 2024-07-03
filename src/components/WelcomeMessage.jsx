import { Link } from "react-router-dom";


function WelcomeMessage() {
  return (
    <div className=" text-center welcome-container">

      <img src="https://media.tenor.com/WN09MfEh7FAAAAAi/cute-food.gif" style={{ 'height': '250px' }} />
      <h1>You don't have any items in your cart</h1>
      <p>Your favourite dishes are just a click away</p>
      <Link to={'/dishes'}><button className="btn btn-success">Explore Our Sweet Dishes</button></Link>
    </div>
  );
}
export default WelcomeMessage;