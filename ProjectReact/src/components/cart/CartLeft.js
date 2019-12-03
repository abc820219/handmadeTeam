import React, { useState, useContext, useEffect, useCallback } from "react";
import CartStore from "./CartStore";
import { checkoutAction } from "./CartAction";
import { FieldSet, InputField } from "fannypack";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { Form, Col } from "react-bootstrap";
import { useAlert } from "react-alert";

const CartLeft = ({
  courseCards,
  ingreCards,
  setCourseCards,
  setIngreCards,
  setPage,
  step,
  setStep
}) => {
  const alert = useAlert();
  const [cartTotal, setCartTotal] = useState(0);
  // const [afterCoupon, setAfterCoupon] = useState(localStorage.getItem("afterTotal") ? localStorage.getItem("afterTotal") : 0);
  const [fnCartTotal, setFnCartTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [couponUse, setCouponUse] = useState(0);
  const [bonusUse, setBonusUse] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [bonusStandard, setBonusStandard] = useState(0);
  const [bonusDuration, setBonusDuration] = useState("");
  const [creditRadio,setCreditRadio] = useState(false)
  const {
    cartCourseDispatch,
    cartIngreDispatch,
    id,
    courseCart,
    ingreCart
  } = useContext(CartStore);
  const [couponSelect, setCouponSelect] = useState();
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

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
          ingreCardB.ingredients_order_quantity * ingreCardB.ingredients_price
        );
      }, 0);
      return courseTotal + ingreTotal;
    } else {
      return "沒有商品";
    }
  };

  const getBonusStandard = async () => {
    const bonusStandardJson = await fetch(
      "http://localhost:5000/handmade/cart/getbonusstandard/"
    );
    const bonusStandardInit = await bonusStandardJson.json();
    setBonusStandard(bonusStandardInit.bonus_percentage);
    setBonusDuration(bonusStandardInit.bonus_duration);
  };

  const getBonus = async () => {
    const bonusJson = await fetch(
      "http://localhost:5000/handmade/cart/getbonus/" + id
    );
    const bonusGet = await bonusJson.json();
    setBonusUse(bonusGet);
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
    setCoupon(value);
  };
  const cartSubmit = async () => {
    try {
      const user = localStorage.getItem("member_id");
      const courseCart = localStorage.getItem(`courseCart${user}`);
      const ingreCart = localStorage.getItem(`ingreCart${user}`);
      let afterBonus;
      if (coupon) {
        afterBonus = bonusUse - bonus + Math.ceil(fnCartTotal * bonusStandard);
      } else {
        afterBonus = bonusUse - bonus + Math.ceil(cartTotal * bonusStandard);
      }
      const cart = JSON.stringify({
        courseCart: courseCart,
        ingreCart: ingreCart,
        user: user,
        coupon: coupon,
        bonusUsed: bonus,
        totalPrice: fnCartTotal ? fnCartTotal : cartTotal,
        bonus: afterBonus
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
      alert.info(`訂單${order_Sid}於${orderDate}---${orderTime}新增完成`);
      localStorage.setItem(`courseCart${user}`, "[]");
      await setCourseCards();
      await cartCourseDispatch(checkoutAction());
      localStorage.setItem(`ingreCart${user}`, "[]");
      await setIngreCards();
      await cartIngreDispatch(checkoutAction());
      window.location = "http://localhost:3000/handmade/member/order";
    } catch (e) {
      console.log(e);
    }
  };
  const checkBonus = e => {
    setBonus(e.target.value > bonusUse ? bonus : e.target.value);
  };

  useEffect(() => {
    setCartTotal(CartTotal(courseCards, ingreCards));
    if (bonus) {
      setCartTotal(CartTotal(courseCards, ingreCards) - bonus);
    } else {
      setCartTotal(CartTotal(courseCards, ingreCards));
    }
  }, [courseCards, ingreCards, bonus]);

  useEffect(() => {
    Promise.all([setPage(4), getBonus(), getCoupon(), getBonusStandard()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const couponAfter =
      cartTotal * (couponSelect > 10 ? couponSelect / 100 : couponSelect / 10);
    if (bonus) {
      setFnCartTotal(Math.floor(couponAfter) - bonus);
    } else {
      setFnCartTotal(Math.floor(couponAfter));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [couponSelect, bonus]);

  return (
    <>
      <div className="col-md-5  col-12 px-3 checkLeftBox">
        <div>
          <div className="checkPageIconBox d-flex align-items-center justify-content-around">
            <div
              className="d-flex align-items-center"
              onClick={() => setStep(0)}
            >
              <div className="checkPageIcon cartStep">1</div>
              <h5 style={{ color: "#f78177", fontWeight: "bold" }}>
                確認數量/金額
              </h5>
            </div>
            <hr style={step ? { background: "#f78177" } : {}} />
            <div
              className="d-flex align-items-center"
              onClick={() => {
                courseCards.length || ingreCards.length
                  ? setStep(1)
                  : setStep(0);
              }}
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
            <div className="d-flex flex-column">
              <div className="checkOrderDeduct">
                <ul className="mt-4 w-100">
                  {step ? (
                    <>
                      <li>
                        <p>可用優惠卷</p>
                        {couponUse.length ? (
                          <select
                            id="coupon"
                            onClick={e => {
                              coponSelect(e);
                            }}
                          >
                            {couponUse.map((coupon, index = 0) => {
                              return (
                                <option index={index} value={coupon.coupon_sid}>
                                  {coupon.coupon_content}
                                </option>
                              );
                            })}
                          </select>
                        ) : (
                          ""
                        )}
                      </li>
                      {step ? (
                        <li>
                          <p>可用折扣</p>
                          <h4>{couponSelect}折</h4>
                        </li>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  <li>
                    <p>可用紅利</p>
                    <h4>$ {bonusUse}</h4>
                  </li>
                  {step ? (
                    <li className="flex-column">
                      <p>使用紅利</p>
                      <input
                        type="number"
                        onChange={event => {
                          checkBonus(event);
                        }}
                        value={bonus}
                        max={bonusUse + ""}
                        maxLength={(bonusUse + "").length}
                      />
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
              <div>
                <div className="checkOrderTotal">
                  <p>結帳總額</p>
                  <h4>
                    ${" "}
                    {step ? (fnCartTotal ? fnCartTotal : cartTotal) : cartTotal}
                  </h4>
                </div>
                <p style={{ color: "white", fontWeight: "bold" }}>
                  可獲得紅利:{" "}
                  {step
                    ? fnCartTotal
                      ? Math.ceil(fnCartTotal * bonusStandard)
                      : Math.ceil(cartTotal * bonusStandard)
                    : Math.ceil(cartTotal * bonusStandard)}
                </p>
                <p style={{ color: "white" }}>紅利計算率: {bonusStandard}</p>
                <p style={{ color: "white" }}>紅利截止日期: {bonusDuration}</p>
              </div>
            </div>
          </div>
        </div>
        {step ? (
          <>
            <div className="creditCard">
              <div className="d-flex align-items-center">
                <input type="checkbox" name="pay" onChange={()=>{setCreditRadio(!creditRadio)}}/>
                <p>信用卡資料</p>
              </div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} lg="12">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control disabled={!creditRadio}
                      // Here is where React Payment Inputs injects itself into the input element.
                      {...getCardNumberProps()}
                      // You can retrieve error state by making use of the error & touched attributes in `meta`.
                      isInvalid={
                        touchedInputs.cardNumber && erroredInputs.cardNumber
                      }
                      placeholder="0000 0000 0000 0000"
                    />
                    <Form.Control.Feedback type="invalid">
                      {erroredInputs.cardNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} style={{ maxWidth: "10rem" }}>
                    <Form.Label>Expiry date</Form.Label>
                    <Form.Control
                    disabled={!creditRadio}
                      {...getExpiryDateProps()}
                      isInvalid={
                        touchedInputs.expiryDate && erroredInputs.expiryDate
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {erroredInputs.expiryDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} style={{ maxWidth: "7rem" }}>
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                    disabled={!creditRadio}
                      {...getCVCProps()}
                      isInvalid={touchedInputs.cvc && erroredInputs.cvc}
                      placeholder="123"
                    />
                    <Form.Control.Feedback type="invalid">
                      {erroredInputs.cvc}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
          </>
        ) : (
          ""
        )}
        {!step ? (
          <button
            onClick={() => {
              courseCards.length || ingreCards.length ? setStep(1) : setStep(0);
            }}
          >
            NEXT
          </button>
        ) : (
          <button onClick={() => cartSubmit()}>CHECK</button>
        )}
      </div>
    </>
  );
};

export default CartLeft;
