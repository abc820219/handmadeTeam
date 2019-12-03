import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../commom/scss/member/coupon.scss";
import { useAlert } from "react-alert";
const CouponGet = () => {
  const alert = useAlert();
  const [couponData, setCouponData] = useState("");
  const getCoupon = e => {
    e.preventDefault();
    console.log(e.target.name);
    fetch("http://localhost:5000/handmade/coupon/getcoupon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id"),
        coupon_sid: e.target.name
      })
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(rows => {
        console.log(rows);
        if (rows.message === "領取成功") alert.success(rows.message);
        if (rows.message === "已領取過") alert.error(rows.message);
      });
  };
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
      <h2>優惠卷專區</h2>
      {couponData.map((v, index) => {
        return (
          <form name={v.coupon_sid} onSubmit={getCoupon}>
            <div className="d-flex justify-content-center w-100" key={index}>
              <div className="py-1  w-100">
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
                    <input
                      className="couponBtn"
                      value="領取"
                      type="submit"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        );
      })}
    </>
  );
};

export default CouponGet;
