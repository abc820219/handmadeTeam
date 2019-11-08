import React from "react";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../../commom/scss/member/memberOrderList.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";

const MemberOrderList = ({ changeOrderType }) => {
  const orderList_title = {
    margin: "14px 0 17px",
    marginLeft: "25%",
    color: "#9597A6"
  };

  const orderTitle_border = {
    borderTop: "1px white solid"
  };

  const oderList_icons = {
    color: "white",
    margin: "-4px 6px 0 5px"
  };
  // const dispatch = useDispatch();

  return (
    <>
      <Container
        className="memberOrderList"
        style={{ backgroundColor: "#544741" ,paddingTop:'60px'}}
      >
        <div className="orderListTitle d-flex">
          <GiHamburgerMenu
            className="mx-3 mt-5"
            style={{ fontSize: "30px", color: "white" }}
          />
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄</h3>
        </div>
        <div className="memberOrderList-info pl-2">
          <ul style={orderTitle_border} onClick={() => changeOrderType(1)}>
            <h3 style={orderList_title}>
              課程
              <span>
                <h5 style={{ fontSize: "16px" }}>訂單編號: 100001</h5>
              </span>
            </h3>
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <h5 style={{ fontSize: "20px" }}>Saturday February 20th</h5>
                <div>
                  <h5>
                    <FaRegClock style={oderList_icons} />
                    商品名稱: 巧克先生
                  </h5>
                </div>
                <div className="d-flex flex-lg-wrap">
                  <h5>
                    <FaDollarSign style={oderList_icons} />
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
                <h5 style={{ fontSize: "20px" }}>Saturday February 20th</h5>
                <div>
                  <h5>
                    <FaRegClock style={oderList_icons} />
                    商品名稱: 白巧克小姐
                  </h5>
                </div>
                <div className="d-flex flex-lg-wrap">
                  <h5>
                    <FaDollarSign style={oderList_icons} />
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
                <h5 style={{ fontSize: "20px" }}>Saturday February 20th</h5>
                <div>
                  <h5>
                    <FaRegClock style={oderList_icons} />
                    商品名稱: 白巧克小姐
                  </h5>
                </div>
                <div className="d-flex flex-lg-wrap">
                  <h5>
                    <FaDollarSign style={oderList_icons} />
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
          <ul style={orderTitle_border} onClick={() => changeOrderType(2)}>
            <h3 style={orderList_title}>
              食材
              <span>
                <h5 style={{ fontSize: "16px" }}>訂單編號: 100001</h5>
              </span>
            </h3>
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <div>
                  <h5>
                    <FaRegClock style={oderList_icons} />
                    商品名稱: 白巧克力
                  </h5>
                </div>
                <div className="d-flex flex-lg-wrap">
                  <h5 className=" mr-3">
                    <GoPerson style={oderList_icons} />
                    數量: 5
                  </h5>
                  <h5>
                    <FaDollarSign style={oderList_icons} />
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
          <ul style={orderTitle_border}>
            <h3 style={orderList_title} onClick={() => changeOrderType(3)}>
              老師
              <span>
                <h5 style={{ fontSize: "16px" }}>訂單編號: 100002</h5>
              </span>
            </h3>
            <li className="d-flex justify-content-between align-item-center my-4">
              <div>
                <h5 style={{ fontSize: "20px" }}>Sunday February 30th</h5>
                <div>
                  <h5>
                    <FaRegClock style={oderList_icons} />
                    老師名稱: 捷克史派羅
                  </h5>
                </div>
                <div className="d-flex flex-lg-wrap">
                  <h5>
                    <FaDollarSign style={oderList_icons} />
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
