import { Link } from "react-router-dom";



const HomeSection = () => {

  return (
    <>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">Welcome to Shahi Sweets</h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam
                dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                stet lorem sit clita duo justo magna dolore erat amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi aspernatur fugit distinctio voluptatum. Cum iste porro soluta accusamus dignissimos quam minus est? Ea, tempora recusandae? Vero incidunt aliquid eaque ad quos est modi voluptatem mollitia ipsum, sequi tempora ab odio inventore facilis nesciunt optio maiores, iusto alias fuga ducimus nostrum nulla saepe libero. Illo, odit.</p>

              <Link to={'/dishes'}><button className="btn shahi-button">Explore Our Dishes</button></Link>
            </div>
            <div className="col-lg-4 text-center text-lg-end overflow-hidden d-lg-block d-none">
              <img className="img-fluid" src="images/PlateOFSweets.png" alt="image" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default HomeSection;