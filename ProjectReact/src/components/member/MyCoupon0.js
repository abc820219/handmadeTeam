import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../commom/scss/member/coupon.scss";

const MyCoupon0 = () => {
  const [couponData, setCouponData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/handmade/coupon/couponStatus0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id")
      })
    })
      .then(res => {
        return res.json();
      })
      .then(row => {
        console.log(row);
        setCouponData(row.rows);
      });
  }, []);
  if (!couponData) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <p className="py-3" style={{ textAlign: "center" }}></p>
        </div>
      </>
    );
  }
  return (
    <>
      {couponData.map((v, index) => {
        return (
          <div
            className="d-flex justify-content-center "
            key={index}
          >
            <div className="py-1 w-100 ">
              <div className="coupon d-flex flex-nowrap  w-100 ">
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

export default MyCoupon0;
