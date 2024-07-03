
import { useSelector } from "react-redux";
import DishOfTheDaySingle from "./DishOfTheDaySingle";


const DishOfTheDay = () => {

  let newObj = {};

  const { products } = useSelector(state => state.items);

  let randomNumber = Math.floor(Math.random() * 12) + 1;
  products.map((item) => {
    if (item.id == randomNumber) {
      newObj = item;
      return;
    }

  })



  return (
    <div className="container dish-container " style={{ "marginTop": "100px" }}>
      <h1 className="text-center">Dish of the Day  </h1>
      <DishOfTheDaySingle newObj={newObj} />
    </div>
  );
}
export default DishOfTheDay;