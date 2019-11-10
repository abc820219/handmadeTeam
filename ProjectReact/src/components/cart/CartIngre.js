import React from "react";
import { FaDollarSign } from "react-icons/fa";

const CartIngre = () => {
  return (
    <>
      <ul className="d-flex justify-content-around align-items-center px-5">
        <li className="d-flex flex-column align-items-between py-3">
          <div className="product-title">巧克力派</div>
          <div className="d-flex align-items-center"></div>
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
          <div className="product-title">巧克力派</div>
          <div className="d-flex align-items-center"></div>
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
          <div className="product-title">巧克力派</div>
          <div className="d-flex align-items-center"></div>
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

export default CartIngre;
