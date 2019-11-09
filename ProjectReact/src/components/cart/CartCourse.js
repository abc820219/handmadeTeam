import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const CartCourse = () => {
  return (
    <>
      <ul className="cartTitle_border">
        <h5 className="cartList_title">課程</h5>
        <li className="d-flex justify-content-between align-item-center my-3">
          <div>
            <p style={{ fontSize: "18px" }}>Saturday February 20th</p>
            <div>
              <p>
                <FaRegClock className="cartList_icons" />
                商品名稱: 巧克先生
              </p>
            </div>
            <div className="d-flex flex-lg-wrap">
              <p>
                <FaDollarSign className="cartList_icons" />
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
                <FaRegClock className="cartList_icons" />
                商品名稱: 白巧克小姐
              </p>
            </div>
            <div className="d-flex flex-lg-wrap">
              <p>
                <FaDollarSign className="cartList_icons" />
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
                <FaRegClock className="cartList_icons" />
                商品名稱: 白巧克小姐
              </p>
            </div>
            <div className="d-flex flex-lg-wrap">
              <p>
                <FaDollarSign className="cartList_icons" />
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
    </>
  );
};

export default CartCourse;
