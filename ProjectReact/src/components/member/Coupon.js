import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "../../commom/scss/member/coupon.scss";
const Coupon = ({ props }) => {
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
  console.log(couponData);
  if (couponData === "") return <></>;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <article>
              <div className="row">
                <div className=" p-5 col-md-6 col-12">
                  <Nav variant="tabs" fill defaultActiveKey="/home">
                    <Nav.Item>
                      <Nav.Link href="">優惠卷領取專區</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="">我的優惠卷</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="">我的紅利</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div>
                    <article className="p-4">
                      <h2>好康優惠(點擊領取優惠卷)</h2>
                      <ul>
                        <li>
                          折價券使用說明:
                          <p className="ml-3">
                            折價券享烘平台所舉辦的促銷活動，提供會員使用的回饋，依照活動有全面折扣等不同的優惠。
                          </p>
                        </li>
                        <li>
                          如何獲得折價券?
                          <p className="ml-3">
                            享烘平台將會不定期舉辦贈送折價券活動，請您密切留意活動訊息，贈送方式與贈送內容皆以單次活動公告內容為主
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
                        <li>
                          注意事項
                          <ul>
                            <li className="p-3">
                              1.折價券限會員使用，不得折抵現金，不得轉讓。若會員未在截止日期前，使用折價券(購物金)做購物折抵，則逾期無效，不再補發。
                            </li>
                            <li className="p-3">
                              2.折價券不再另開立發票，發票金額以該訂單「購買時實際支付的金額」來計算。
                            </li>
                            <li className="p-3">
                              3.訂單取消時，退貨的金額是以「購買時實際支付的金額」來計算，也就是扣除折價券(購物金)後的金額。該次消費使用之折價券(購物金)將無法退回。
                            </li>
                            <li className="p-3">
                              4.折價券不得兌換現金、找零或折換其他贈品。
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
                <div className="col-md-6 col-12 p-5">
                  {couponData.map((v, index) => {
                    return (
                      <div className="d-flex justify-content-center">
                        <div className="py-3">
                          <div className="coupon d-flex flex-nowrap ">
                            <div className="coupon-left">
                              <p className="coupon-left-content">
                                <span>{v.coupon_price}折</span>
                              </p>
                            </div>
                            <div className="coupon-con">
                              <span>優惠卷編號:{v.coupon_sid}</span>
                              <div className="couponContent">{v.coupon_content}</div>
                              <input
                                className="couponBtn"
                                value="領取"
                                type="button"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
