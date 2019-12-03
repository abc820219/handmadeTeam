import React, { useState, useContext, useEffect, useCallback } from "react";
import CartStore from "./CartStore";
import { checkoutAction } from "./CartAction";
import { usePaymentInputs } from "react-payment-inputs";
import { useAlert } from "react-alert";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";

export class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "   ",
      number: ""
    };
  }

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
          style={{ width: "1000px" }}
        />
        <form className="creditCardForm d-flex flex-column">
          <input
            className="my-3 mx-auto"
            style={{ maxWidth: "300px" }}
            type="tel"
            name="number"
            placeholder="Card Number"
            pattern="/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            disabled={!this.props.creditRadio}
          />
          <input
            className="my-3 mx-auto"
            style={{ maxWidth: "300px" }}
            type="tel"
            name="expiry"
            placeholder="Expiry"
            maxLength={4}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            disabled={!this.props.creditRadio}
          />
          <input
            className="my-3 mx-auto"
            style={{ maxWidth: "300px" }}
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength={3}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            disabled={!this.props.creditRadio}
          />
        </form>
      </div>
    );
  }
}

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
  const [fnCartTotal, setFnCartTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [couponUse, setCouponUse] = useState(0);
  const [bonusUse, setBonusUse] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [bonusStandard, setBonusStandard] = useState(0);
  const [bonusDuration, setBonusDuration] = useState("");
  const [creditRadio, setCreditRadio] = useState(false);
  const { cartCourseDispatch, cartIngreDispatch, id } = useContext(CartStore);
  const [couponSelect, setCouponSelect] = useState();

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
      alert.success(`訂單${order_Sid}新增完成`);
      localStorage.setItem(`courseCart${user}`, "[]");
      await setCourseCards();
      await cartCourseDispatch(checkoutAction());
      localStorage.setItem(`ingreCart${user}`, "[]");
      await setIngreCards();
      await cartIngreDispatch(checkoutAction());
      setTimeout(()=>{
        window.location = "http://localhost:3000/handmade/member/order";
      },1000)
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
              <div className="d-flex align-items-center justify-content-center">
                <input
                  type="checkbox"
                  name="pay"
                  onChange={() => {
                    setCreditRadio(!creditRadio);
                  }}
                />
                <p>使用信用卡</p>
              </div>
              <PaymentForm creditRadio={creditRadio} />
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
          <button onClick={() => cartSubmit()} style={{marginTop:"150px"}}>
            CHECK
          </button>
        )}
      </div>
    </>
  );
};

export default CartLeft;
