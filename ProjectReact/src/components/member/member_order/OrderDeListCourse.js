import React from "react";
import "../../../commom/scss/member/orderDeListCourse.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const OrderDeListCourse = props => {
  return (
    <>
      <div className="container-fluid orderDeCourse">
        <ul className="d-flex flex-column">
          <li className="d-flex justify-content-between align-items-center">
            <h5>Friday, February 19th</h5>
            <div>
              <p className="mr-3">
                <FaRegClock className="mr-2" />
                巧克力派
              </p>
              <p className="mr-3">
                <FaDollarSign className="mr-2" />
                訂單編號: 10001
              </p>
            </div>
          </li>
          <li>
            <div>
              <div className="d-flex">
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                    alt=""
                  />
                </figure>
                <div>
                  <div>
                    <h5>教師名稱</h5>
                    <h5>賣口傑克森</h5>
                  </div>
                  <div>
                    <h5>訂購日期</h5>
                    <h5>2016-5-5</h5>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </div>
    </>
  );
};

export default OrderDeListCourse;
