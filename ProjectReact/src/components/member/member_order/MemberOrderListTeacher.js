import React, { Component } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const MemberOrderListTeacher = ({ orderDetailData }) => {
  return (
    <>
      <li className="d-flex justify-content-between align-item-center my-4 flex-wrap">
        onClick=
        {() => {
          orderDetailData(3);
        }}
        <span className="w-100">
          <p>訂單編號: 100002</p>
        </span>
        <div>
          <h5>Sunday February 30th</h5>
          <div>
            <h5>
              <FaRegClock className="oderList_icons" />
              老師名稱: 捷克史派羅
            </h5>
          </div>
          <div className="d-flex flex-lg-wrap">
            <h5>
              <FaDollarSign className="oderList_icons" />
              價格: 2000
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

export default MemberOrderListTeacher;
