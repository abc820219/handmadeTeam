import React, { useState, useContext, useEffect, useCallback } from "react";
import CartStore from "./CartStore";
import { cartNext, cartPrev, cartAfterCouponAction } from "./CartAction";

const CartLeft = ({
  courseCards,
  ingreCards,
  setCourseCards,
  setIngreCards
}) => {
  const [cartTotal, setCartTotal] = useState(0);
  // const [afterCoupon, setAfterCoupon] = useState(localStorage.getItem("afterTotal") ? localStorage.getItem("afterTotal") : 0);
  const [fnCartTotal, setFnCartTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [couponUse, setCouponUse] = useState();
  const {
    step,
    cartPageDispatch,
    setcheckoutFinish,
    id,
    priceAfterCouponDispatch,
    afterCoupon
  } = useContext(CartStore);
  const [couponSelect, setCouponSelect] = useState();
  console.log(123);
  let CartTotal = (courseCards, ingreCards) => {
    if (courseCards && ingreCards) {
      let courseTotal = courseCards.reduce((courseCardA, courseCardB) => {
        return (
          courseCardA +
          courseCardB.course_order_applicants * courseCardB.course_price
        );
      }, 0);
      let ingreTotal = ingreCards.reduce((ingreCardA, ingreCardB) => {
        return (
          ingreCardA +
          ingreCardB.ingredient_order_quantity * ingreCardB.ingredients_price
        );
      }, 0);
      return courseTotal + ingreTotal;
    } else {
      return "沒有商品";
    }
  };

  const getCoupon = async () => {
    const couponJson = await fetch(
      "http://localhost:5000/handmade/cart/getcoupon/" + id
    );
    const couponGet = await couponJson.json();
    setCouponUse(couponGet);
  };

  const coponSelect = e => {
    const value = e.target.value;
    const index = e.target[e.target.selectedIndex].index;
    setCouponSelect(couponUse[index].coupon_price);
    console.log(couponSelect);
    setCoupon(value);
  };
  const cartSubmit = async () => {
    try {
      const user = localStorage.getItem("member_id");
      const courseCart = localStorage.getItem(`courseCart${user}`);
      const ingreCart = localStorage.getItem(`ingreCart${user}`);
      const cart = JSON.stringify({
        courseCart: courseCart,
        ingreCart: ingreCart,
        user: user,
        coupon: coupon
      });
      const url = `http://localhost:5000/handmade/cart/submitcart`;
      const dataJson = await fetch(url, {
        method: "POST",
        body: cart,
        headers: { "Content-Type": "application/json" }
      });
      const data = await dataJson.json();
      const order_Sid = await data[0].order_sid;
      let orderCreate_time = await data[0].order_create_time;
      let [orderDate, orderTime] = await orderCreate_time.split("T");
      orderTime = await orderTime.split(".")[0];
      alert(`訂單${order_Sid}於${orderDate}---${orderTime}新增完成`);
      localStorage.setItem(`courseCart${user}`, "[]");
      setCourseCards();
      console.log(0);
      localStorage.setItem(`ingreCart${user}`, "[]");
      setIngreCards();
    } catch (e) {
      console.log(e);
    }
  };
  console.log(coupon);
  useEffect(() => {
    setCartTotal(CartTotal(courseCards, ingreCards));
  }, [courseCards, ingreCards]);

  useEffect(() => {
    getCoupon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
      console.log(couponSelect);
      const couponAfter =
        cartTotal *
        (couponSelect > 10 ? couponSelect / 100 : couponSelect / 10);
      setFnCartTotal(couponAfter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [couponSelect]);

  return (
    <>
      <div className="col-4 px-3 checkLeftBox">
        <div>
          <div className="checkPageIconBox d-flex align-items-center justify-content-around">
            <div
              className="d-flex align-items-center"
              onClick={() => cartPageDispatch(cartPrev())}
            >
              <div className="checkPageIcon cartStep">1</div>
              <h5 style={{ color: "#f78177", fontWeight: "bold" }}>
                確認數量/金額
              </h5>
            </div>
            <hr style={step ? { background: "#f78177" } : {}} />
            <div
              className="d-flex align-items-center"
              onClick={() => cartPageDispatch(cartNext())}
            >
              <div
                className="checkPageIcon cartStep2"
                style={step !== 0 ? { backgroundColor: "#f78177" } : {}}
              >
                2
              </div>
              <h5
                style={
                  step === 0
                    ? { color: "#fff" }
                    : { color: "#f78177", fontWeight: "bold" }
                }
              >
                選擇付款方式/結帳
              </h5>
            </div>
          </div>
          <div className="checkPageBox">
            <h4>訂單摘要</h4>
            <div className="checkTotal d-flex align-items-baseline justify-content-between">
              <p>商品總計</p>
              <h4>$ {cartTotal}</h4>
            </div>
            <div className="d-flex flex-column">
              <div className="checkOrderDeduct">
                <ul className="mt-4 w-100">
                  {step ? (
                    <>
                      <li>
                        <p>可用優惠卷</p>
                        {couponUse&&<select
                          id="coupon"
                          onClick={e => {
                            coponSelect(e);
                          }}
                        >
                          {couponUse &&
                            couponUse.map((coupon, index = 0) => {
                              return (
                                <option index={index} value={coupon.coupon_sid}>
                                  {coupon.coupon_content}
                                </option>
                              );
                            })}
                        </select>}
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                  {step&&<li>
                    <p>可用折扣</p>
                    <h4>{couponSelect}折</h4>
                  </li>}
                  {/* <li>
                    <p>使用紅利</p>
                    {step === 0 ? <input type="text" /> : <h4>$ 55</h4>}
                  </li>
                  <li>
                    <p>其他折抵</p>
                    <h4>$ 70</h4>
                  </li> */}
                </ul>
              </div>
              <div>
                <div className="checkOrderTotal">
                  <p>結帳總額</p>
                  <h4>
                    ${" "}
                    {!step
                      ? cartTotal 
                      : fnCartTotal}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {step ? (
          <>
            <div className="creditCard">
              <div className="d-flex align-items-center">
                <input type="radio" name="pay" />
                <p>信用卡資料</p>
              </div>
              <div className="my-3">
                <input type="text" placeholder="0000-0000-0000-0000" />
              </div>
              <div className="creditCardDetail d-flex justify-content-end">
                <div className="d-flex align-items-center mr-4">
                  <p className="px-3">有效日期</p>
                  <input type="text" />
                </div>
                <input type="text" placeholder="驗證碼" />
              </div>
              <ul className="d-flex justify-content-between mt-4">
                <li>
                  <input type="radio" name="pay" value="LINE Pay" />
                  <p>LINE Pay</p>
                </li>
                <li>
                  <input type="radio" name="pay" value="APPLE Pay" />
                  <p>APPLE Pay</p>
                </li>
                <li>
                  <input type="radio" name="pay" value="GOOGLE Pay" />
                  <p>GOOGLE Pay</p>
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
        {!step ? (
          <button onClick={() => cartPageDispatch(cartNext())}>NEXT</button>
        ) : (
          <button onClick={() => cartSubmit()}>CHECK</button>
        )}
      </div>
    </>
  );
};

export default CartLeft;
