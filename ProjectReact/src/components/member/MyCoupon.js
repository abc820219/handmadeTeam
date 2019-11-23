import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../commom/scss/member/coupon.scss";

const MyCoupon = () => {
    const [couponData, setCouponData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/handmade/coupon", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(row => {
        console.log(row);
        setCouponData(row.rows);
      });
  }, []);
  if (couponData === "") return <></>;
  return (
    <>
      <h2>我的優惠卷</h2>
      {couponData.map((v, index) => {
        return (
            <div className="d-flex justify-content-center" key={index}>
              <div className="py-3">
                <div className="coupon d-flex flex-nowrap ">
                  <div className="coupon-left">
                    <p className="coupon-left-content">
                      <span>{v.coupon_price}折</span>
                    </p>
                  </div>
                  <div className="coupon-con">
                    <input
                      name="coupon_sid"
                      className="couponSid"
                      value={`優惠卷編號:${v.coupon_sid}`}
                      disabled
                    ></input>
                    <div className="couponContent">{v.coupon_content}</div>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </>
  );
};

export default MyCoupon;
