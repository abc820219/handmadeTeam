import React from "react";
import { Container } from "react-bootstrap";
import "../../commom/scss/cart/memberCart.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import CartCourse from "./CartCourse";
import CartIngre from "./CartIngre";

// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";

const Cart = ({ openCart, showCart }) => {
  const cartList_title = {
    padding: "20px 0 20px 20px",
    color: "#9597A6",
    fontSize: "20px",
    fontWeight: "bold",
    borderBottom: "1px solid white"
  };

  const cartTitle_border = {
    orderTop: "1px white solid"
  };

  const cartList_icons = {
    color: "white",
    margin: "-4px 6px 0 5px"
  };
  return (
    <>
      <Container
        className="memberCartList pr-0"
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "0px" : "-30%" }}
      >
        <div className="memberCarSlide">
          <div className="cartListTitle d-flex align-items-center">
            <h4 className="ml-5 mt-3 mb-3">購物車</h4>
          </div>
          <div className="memberCartList-info pl-2">
            <CartCourse />
            <CartIngre />
          </div>
        </div>
        <div className="memberCartBottom"></div>
      </Container>
    </>
  );
};

export default Cart;
