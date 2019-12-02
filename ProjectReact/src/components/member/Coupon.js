import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "../../commom/scss/member/coupon.scss";
import CouponGet from "../member/CouponGet";
import MyCoupon from "../member/MyCoupon";
import MemberChart from "../member/MemberChart";
const Coupon = ({ props }) => {
  const [couponPage, setCouponPage] = useState(0);
  const PageChange = page => {
    setCouponPage(page);
  };
  const [bonuns, setBonus] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/handmade/member/getMemberData", {
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
        setBonus(row.info.member_bonus);
      });
  }, []);
  return (
    <>
      <div className="container-fluid couponDetail">
        <div className="row">
          <div className="col-md-12">
            <article>
              <div className="row">
                <div className=" p-5 col-md-6 col-12 couponBg-color-left">
                  <Nav
                    variant="tabs"
                    fill
                    defaultActiveKey="/handmade/member/coupon"
                  >
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => PageChange(0)}
                        className={couponPage === 0 && "active"}
                      >
                        優惠專區
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => PageChange(1)}
                        className={couponPage === 1 && "active"}
                      >
                        我的優惠卷
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link
                        onClick={() => PageChange(2)}
                        className={couponPage === 2 && "active"}
                      >
                        我的紅利
                      </Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <div>
                    <article className="py-3">
                      <h2>好康優惠(目前紅利累積:{bonuns+"$"})</h2>
                      <div className="chart">
                        <MemberChart></MemberChart>
                      </div>
                      <h2 className="mt-5">好康優惠(點擊領取優惠卷)</h2>
                      <ul>
                        <li>
                          折價券使用說明:
                          <p className="ml-3">
                            折價券享烘平台所舉辦的促銷活動，提供會員使用的回饋，依照活動有全面折扣等不同的優惠。
                          </p>
                        </li>
                        <li>
                          折價券使用須知:
                          <p className="ml-3">
                            折價券使用是以每筆訂單為單位，每筆訂單限使用一張折價券。
                            每張折價券包含券號、活動規則。
                            折價券一經使用立即失效，若事後取消訂單或辦理退貨，僅會退還您實際所支付的金額，不再補發折價券，折價券也不得重複使用
                          </p>
                        </li>
                        <li>
                          如何使用折價券？
                          <p className="ml-3">
                            點選「結帳」按鈕,登入客戶帳號/密碼
                            於訂購資料頁選擇欲使用的折價券之序號
                          </p>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
                <div className="col-md-6 col-12 p-4 couponBg-color">
                  {couponPage === 0 && <CouponGet />}
                  {couponPage === 1 && <MyCoupon />}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
export default Coupon;
