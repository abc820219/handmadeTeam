import React from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import MemberOrderListTeacher from '../member_order/MemberOrderListTeacher';
import MemberOrderListCourse from '../member_order/MemberOrderListCourse';
import MemberOrderListIngre from '../member_order/MemberOrderListIngre'

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
            </h3>
            <MemberOrderListCourse/>
          </ul>
          <ul className="orderTitle_border" onClick={() => changeOrderType(2)}>
            <h3 className="orderList_title">
              食材
            </h3>
            <MemberOrderListIngre/>
          </ul>
          <ul className="orderTitle_border">
            <h3 className="orderList_title" onClick={() => changeOrderType(3)}>
              老師
            </h3>
              <MemberOrderListTeacher/>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default MemberOrderList;
