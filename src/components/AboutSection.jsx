import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <>
      <div className="container-xxl py-5 about-section" style={{ 'marginTop': '4%' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s"
                    src="images/about-1.jpeg" />
                </div>
                <div className="col-6 text-start" style={{ 'marginTop': '15%' }}>

                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s"
                    src="images/about-2.jpeg" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s"
                    src="images/about-3.jpeg" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s"
                    src="images/about-4.jpeg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
              <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i> <span style={{ 'color': 'goldenrod' }}>Shahi Sweets</span> </h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                dolore erat amet</p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={'/about'} className="btn"> Read More...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSection;
