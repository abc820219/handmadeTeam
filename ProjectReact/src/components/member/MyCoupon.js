import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../commom/scss/member/coupon.scss";
import { Nav } from "react-bootstrap";
import MyCoupon0 from "./MyCoupon0";
import MyCoupon1 from "./MyCoupon1";
const MyCoupon = () => {
  const [couponStatus, setCouponStatus] = useState(true);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2>我的優惠卷</h2>
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link onClick={() => setCouponStatus(true)}>未使用</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setCouponStatus(false)}>已使用</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {couponStatus ? <MyCoupon0 /> : <MyCoupon1 />}
    </>
  );
};

export default MyCoupon;
