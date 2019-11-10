import React from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const MemberOrderList = ({ changeOrderType }) => {
  return (
    <>
      <Container className="memberOrderList container">
        <div className="orderListTitle-bar d-flex align-items-center">
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄</h3>
        </div>
        <div className="memberOrderList-info pl-2">
          <ul className="orderTitle_border" onClick={() => changeOrderType(1)}>
            <h3 className="orderList_title">
              課程
              <span>
                <p>訂單編號: 100001</p>
              </span>
            </h3>
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <h5>Saturday February 20th</h5>
                <div>
                  <h5>
                    <FaRegClock className="oderList_icons" />
                    商品名稱: 巧克先生
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
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <h5>Saturday February 20th</h5>
                <div>
                  <h5>
                    <FaRegClock className="oderList_icons" />
                    商品名稱: 白巧克小姐
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
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <h5>Saturday February 20th</h5>
                <div>
                  <h5>
                    <FaRegClock className="oderList_icons" />
                    商品名稱: 白巧克小姐
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
          </ul>
          <ul className="orderTitle_border" onClick={() => changeOrderType(2)}>
            <h3 className="orderList_title">
              食材
              <span>
                <p>訂單編號: 100001</p>
              </span>
            </h3>
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <div>
                  <h5>
                    <FaRegClock className="oderList_icons" />
                    商品名稱: 白巧克力
                  </h5>
                </div>
                <div className="d-flex flex-lg-wrap">
                  <h5 className=" mr-3">
                    <GoPerson className="oderList_icons" />
                    數量: 5
                  </h5>
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
          </ul>
          <ul className="orderTitle_border">
            <h3 className="orderList_title" onClick={() => changeOrderType(3)}>
              老師
              <span>
                <p>訂單編號: 100002</p>
              </span>
            </h3>
            <li className="d-flex justify-content-between align-item-center my-4">
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
          </ul>
        </div>
      </Container>
    </>
  );
};

export default MemberOrderList;
