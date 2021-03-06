import React, { Component } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const MemberOrderListIngre = ({
  key,
  ingreOrderSid,
  ingredientsName,
  ingredientsQuantity,
  ingredientsPrice,
  orderDetailData
}) => {
  return (
    <>
      <li
        className="d-flex justify-content-between align-item-center my-4 flex-wrap"
        onClick={() => {
          orderDetailData(2, ingreOrderSid);
        }}
      >
        <span className="w-100">
          <p>訂單編號: {key}</p>
        </span>
        <div>
          <div>
            <h5>
              <FaRegClock className="oderList_icons" />
              商品名稱: {ingredientsName}
            </h5>
          </div>
          <div className="d-flex flex-lg-wrap">
            <h5 className=" mr-3">
              <GoPerson className="oderList_icons" />
              數量: {ingredientsQuantity}
            </h5>
            <h5>
              <FaDollarSign className="oderList_icons" />
              價格: {ingredientsPrice}
            </h5>
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
    </>
  );
};

export default MemberOrderListIngre;
