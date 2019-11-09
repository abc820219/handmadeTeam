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
              <ul className="d-flex justify-content-around align-items-center px-5">
                <li className="d-flex flex-column align-items-between py-3">
                  <div className="product-title">Saturday February 20th *2</div>
                  <div className="d-flex align-items-center">
                    <FaRegClock className="cartList_icons" />
                    商品名稱:巧克力派
                  </div>
                  <div className="d-flex align-items-center">
                    <GoPerson className="cartList_icons" />
                    數量: 5
                  </div>
                  <div className="d-flex align-items-center">
                    <FaDollarSign className="cartList_icons" />
                    5000
                  </div>
                </li>
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                    alt=""
                    width="80px"
                    height="80px"
                  />
                </figure>
              </ul>
              <hr className="hr-bottom"></hr>
            </div>
            {/* --------------------------------------------------------------- */}
            <div>
              <div className="course-title py-3">老師資訊</div>
              <hr className="hr-bottom"></hr>
              <ul className="d-flex justify-content-around align-items-center px-5">
                <li className="d-flex flex-column align-items-between py-3">
                  <div className="product-title">Saturday February 20th *2</div>
                  <div className="d-flex align-items-center">
                    <FaRegClock className="cartList_icons" />
                    商品名稱:巧克力派
                  </div>
                  <div className="d-flex align-items-center">
                    <GoPerson className="cartList_icons" />
                    數量: 5
                  </div>
                  <div className="d-flex align-items-center">
                    <FaDollarSign className="cartList_icons" />
                    5000
                  </div>
                </li>
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                    alt=""
                    width="80px"
                    height="80px"
                  />
                </figure>
              </ul>
            </div>
          </div>
          {/* --------------------------------------------------------------- */}
        </div>{" "}
        <div className="cartFooter d-flex justify-content-between p-5">
          <div>
            <span className="cartTotal">$ 5000</span>
          </div>
          <div>
            <input name="" id="" class="cartBtn" type="button" value="購買" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
