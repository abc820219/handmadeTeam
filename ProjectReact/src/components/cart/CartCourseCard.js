import React, { useContext, useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import CartStore from "./CartStore";

const CartCourseCard = ({
  pos,
  course_sid,
  course_name,
  course_order_choose,
  course_order_time,
  course_order_applicants,
  course_lists,
  course_price,
  course_total_price,
  courseAmountBtn,
  courseDelBtn
}) => {
  const { step } = useContext(CartStore);
  let invisible_button = { visibility: step ? "hidden" : "visible" };
  return (
    <>
      <li className="d-flex flex-sm-wrap">
        <input
          type="checkbox"
          name="selectTotalCourse"
          style={invisible_button}
        />
        <div className="checkListBox">
          <h4>
            <span>{course_order_time}</span>
            {course_order_choose}
          </h4>
          <h2>{course_name}</h2>
        </div>
        <div className="d-flex justify-content-center flex-column mr-3">
          <div className="d-flex align-items-center cartButtonAdd">
            <button
              style={invisible_button}
              onClick={() => {
                courseAmountBtn(pos, -1);
              }}
            >
              -
            </button>
            <span>{course_order_applicants}</span>
            <button
              style={invisible_button}
              onClick={() => {
                courseAmountBtn(pos, 1);
              }}
            >
              +
            </button>
          </div>
          <p className="cartListTotal">
            Total Count : $ {course_price * course_order_applicants}
          </p>
        </div>
        <figure>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
            alt="product pic"
          />
        </figure>
        <MdCancel
          className="cartOrderCancel"
          style={invisible_button}
          onClick={() => {
            courseDelBtn(pos);
          }}
        />
      </li>
    </>
  );
};

export default CartCourseCard;
