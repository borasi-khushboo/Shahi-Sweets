import { useSelector } from "react-redux";
import CardIndividiualItem from "./CardIndividiualItem";
import SummaryCard from "./SummaryCard";
import WelcomeMessage from "./WelcomeMessage";


const CardContainer = () => {
  const BagItems = useSelector((state) => state.BagItems);
  let length = Object.keys(BagItems).length;
  console.log(length);

  return (
    <>

      {
        length == 0 ? <WelcomeMessage /> : <div className="cardIndividiualItem container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-10 order-lg-1 order-2">
              <div className="row justify-content-center">
                {Object.values(BagItems).map((item) => (
                  <div key={item.id} className="col-md-5 col-12">
                    <CardIndividiualItem product={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-10 order-lg-2 order-1">
              <SummaryCard />
            </div>
          </div>
        </div>
      }
    </>


  );
}


export default CardContainer;
