import { FaArrowRight } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
            {/* <Link to={'/'}><a className="btn btn-link text-white" href=""><FaArrowRight />Home</a></Link> */}
            <Link to={'/'} className="btn btn-link"><FaArrowRight /> Home</Link>
            <Link to={'/about'} className="btn btn-link"><FaArrowRight /> About Us</Link>
            <Link to={'/dishes'} className="btn btn-link"><FaArrowRight /> Dishes</Link>
            <Link to={'/faq'} className="btn btn-link"><FaArrowRight /> FAQ</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Near OPPO A56 Ratlam , India</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9137686541</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>shahisweets45@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">< AiFillTwitterCircle className="icons" /></a>
              <a className="btn btn-outline-light btn-social" href="">< FaFacebookMessenger className="icons" /></a>
              <a className="btn btn-outline-light btn-social" href="">< FaLinkedin className="icons" /></a>
              <a className="btn btn-outline-light btn-social" href="">< AiFillTwitterCircle className="icons" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
            <p>Subscribe our news letter so you can get latest news on time.</p>
            <div className="position-relative mx-auto" style={{ "maxWidth": "400px" }}>
              <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text"
                placeholder="Your email" />
              <button type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="" href="#">Shahi Sweets</a> | All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <p> Created By <span style={{ 'color': 'rgb(164, 164, 230)', 'fontWeight': 'bold', 'fontSize': '20px' }}>Khushboo Borasi.</span></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;