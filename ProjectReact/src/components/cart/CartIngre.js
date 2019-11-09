import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const CartIngre = () => {
  return (
    <>
      <ul className="cartTitle_border">
        <h5 className="cartList_title">食材</h5>
        <li className="d-flex justify-content-between align-item-center my-3">
          <div>
            <div>
              <p>
                <FaRegClock className="cartList_icons" />
                商品名稱: 白巧克力
              </p>
            </div>
            <div className="d-flex flex-lg-wrap">
              <p className=" mr-3">
                <GoPerson className="cartList_icons" />
                數量: 5
              </p>
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

export default CartIngre;
