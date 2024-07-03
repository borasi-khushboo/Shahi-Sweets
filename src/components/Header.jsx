import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarCart from './Sidebar';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const BagItems = useSelector((state) => state.BagItems);
  let length = Object.keys(BagItems).length;
  const WishList = useSelector((state) => state.WishList);


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className='shahi'>Shahi <span className='sweet'>Sweets</span>  <img src="images/logo.png" alt="" className='logo-img ' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }}>
              <Link to={'/'} className='Link'> <Nav.Link href="#action1" className='nav-item'> Home </Nav.Link></Link>
              <Link to={'/about'} className='Link'> <Nav.Link href="#action2" className='nav-item'>About US</Nav.Link></Link>
              <Link to={'/dishes'} className='Link'> <Nav.Link href="#action3" className='nav-item'>Dishes</Nav.Link></Link>
              <Link to={'/faq'} className='Link'><Nav.Link href="#action4" className='nav-item'>FAQ</Nav.Link></Link>
              <Link to={'/DishOfDay'} className='Link'>  <Nav.Link href="#action5" className='nav-item'>Dish Of the Day</Nav.Link></Link>
            </Nav>
            <div className="d-flex logos">
              <li><CgProfile /></li>
              <li className='nav-item'>
                <Link to={'/card'} ><FaShoppingCart /></Link>
                <span className="bag-item-count">{length}</span>
              </li>
              <li onClick={toggleSidebar}><FaHeart /></li> {/* Add onClick handler here */}
              <span className="heart-count"> {WishList.length}</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SidebarCart isOpen={showSidebar} toggleSidebar={toggleSidebar} /> {/* Include SidebarCart component */}
    </>
  );
}

export default Header;
