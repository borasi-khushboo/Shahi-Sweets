import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import ProductContainer from '../components/ProductContainer'
import FaqSection from '../components/FaqSection'
import DishOfTheDay from '../components/DishOfTheDay'

const DefaultContainer = () => {
  return (
    <>

      <HomeSection />
      <AboutSection />
      <DishOfTheDay />
      <ProductContainer />
      <FaqSection />


    </>
  );
}
export default DefaultContainer;