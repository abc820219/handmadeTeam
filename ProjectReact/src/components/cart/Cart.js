import React from "react";
import { Container } from "react-bootstrap";
import "../../commom/scss/cart/memberCart.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

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
  console.log(showCart);
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
            <ul style={cartTitle_border}>
              <h5 style={cartList_title}>課程</h5>
              <li className="d-flex justify-content-between align-item-center my-3">
                <div>
                  <p style={{ fontSize: "18px" }}>Saturday February 20th</p>
                  <div>
                    <p>
                      <FaRegClock style={cartList_icons} />
                      商品名稱: 巧克先生
                    </p>
                  </div>
                  <div className="d-flex flex-lg-wrap">
                    <p>
                      <FaDollarSign style={cartList_icons} />
                      價格: 2000
                    </p>
                  </div>
                </div>
                <div>
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                      alt=""
                    />
                  </figure>
                </div>
              </li>
              <li className="d-flex justify-content-between align-item-center my-3">
                <div>
                  <p style={{ fontSize: "18px" }}>Saturday February 20th</p>
                  <div>
                    <p>
                      <FaRegClock style={cartList_icons} />
                      商品名稱: 白巧克小姐
                    </p>
                  </div>
                  <div className="d-flex flex-lg-wrap">
                    <p>
                      <FaDollarSign style={cartList_icons} />
                      價格: 2000
                    </p>
                  </div>
                </div>
                <div>
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                      alt=""
                    />
                  </figure>
                </div>
              </li>
              <li className="d-flex justify-content-between align-item-center my-3">
                <div>
                  <p style={{ fontSize: "18px" }}>Saturday February 20th</p>
                  <div>
                    <p>
                      <FaRegClock style={cartList_icons} />
                      商品名稱: 白巧克小姐
                    </p>
                  </div>
                  <div className="d-flex flex-lg-wrap">
                    <p>
                      <FaDollarSign style={cartList_icons} />
                      價格: 2000
                    </p>
                  </div>
                </div>
                <div>
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                      alt=""
                    />
                  </figure>
                </div>
              </li>
            </ul>
            <ul style={cartTitle_border}>
              <h5 style={cartList_title}>食材</h5>
              <li className="d-flex justify-content-between align-item-center my-3">
                <div>
                  <div>
                    <p>
                      <FaRegClock style={cartList_icons} />
                      商品名稱: 白巧克力
                    </p>
                  </div>
                  <div className="d-flex flex-lg-wrap">
                    <p className=" mr-3">
                      <GoPerson style={cartList_icons} />
                      數量: 5
                    </p>
                    <p>
                      <FaDollarSign style={cartList_icons} />
                      價格: 2000
                    </p>
                  </div>
                </div>
                <div>
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                      alt=""
                    />
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="memberCartBottom"></div>
      </Container>
    </>
  );
};

export default Cart;
