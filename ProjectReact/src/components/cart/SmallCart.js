import React, { useEffect, useState } from "react";
import "../../commom/scss/cart/memberCart.scss";
import CartCourse from "./CartCourse";
import CartIngre from "./CartIngre";
import { Link } from 'react-router-dom'

// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";


const SmallCart = ({ openCart, showCart }) => {
  useEffect(() => {

  });
  return (
    <>
      <div
        className="memberCartList"
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "0" : "100%" }}
      >
        <div className="d-flex flex-column">
          <div className="cartHead">
            <p className="cart-title">購物車</p>
          </div>
          <div className="cartMain">
            {/* ------------------------------------------------------------------------ */}
            <div>
              <div className="course-title py-3">課程訂單</div>
              <hr className="hr-bottom"></hr>
              <CartCourse />
              <hr className="hr-bottom"></hr>
            </div>
            <div style={{ marginBottom: "150px" }}>
              <div className="course-title py-3">食材訂單</div>
              <hr className="hr-bottom"></hr>
              <CartIngre />
              <hr className="hr-bottom"></hr>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cartFooter d-flex justify-content-between p-5"
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "17px" : "100%" }}
      >
        <div>
          <span className="cartTotal">$ 5000</span>
        </div>
        <div>
          <Link to='/handmade/member/cart'>
            <input name="" id="" className="cartBtn" type="button" value="購買" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SmallCart;
