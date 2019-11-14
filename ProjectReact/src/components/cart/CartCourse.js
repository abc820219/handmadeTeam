import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { AiOutlineBook } from "react-icons/ai";

const CartCourse = () => {
  return (
    <>
      <ul className="d-flex justify-content-around align-items-center px-5">
        <li className="d-flex flex-column align-items-between py-3">
          <div className="product-title">Saturday February 20th *2</div>
          <div className="d-flex align-items-center">
            <AiOutlineBook className="cartList_icons" />
            商品名稱:巧克力派
          </div>
          <div className="d-flex align-items-center">
            <FaRegClock className="cartList_icons" />
            時間: 上午
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
      <ul className="d-flex justify-content-around align-items-center px-5">
        <li className="d-flex flex-column align-items-between py-3">
          <div className="product-title">Saturday February 20th *2</div>
          <div className="d-flex align-items-center">
            <AiOutlineBook className="cartList_icons" />
            商品名稱:巧克力派
          </div>
          <div className="d-flex align-items-center">
            <FaRegClock className="cartList_icons" />
            時間: 上午
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
      <ul className="d-flex justify-content-around align-items-center px-5">
        <li className="d-flex flex-column align-items-between py-3">
          <div className="product-title">Saturday February 20th *2</div>
          <div className="d-flex align-items-center">
            <FaRegClock className="cartList_icons" />
            商品名稱:巧克力派
          </div>
          <div className="d-flex align-items-center">
            <FaRegClock className="cartList_icons" />
            時間: 上午
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
    </>
  );
};

export default CartCourse;
