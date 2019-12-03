import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../commom/scss/MemberLogin.scss";
import { useAlert } from "react-alert";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
); //信箱正規
function MemberEmail(props) {
  const alert = useAlert();
  const [account, setaccount] = useState("");
  const [email, setemail] = useState("");
  const [password] = useState("");
  const [formErrors, setformErrors] = useState({
    account: "",
    email: "",
    password: ""
  });
  //------事件處理-------
  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name + value);
    switch (name) {
      case "account":
        setaccount(value);
        formErrors.account = value.length < 3 ? "最少3個字" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "請輸入正確的格式";
        setemail(value);
        break;
      default:
        break;
    }
    setformErrors({ formErrors, ...formErrors });
  }; //錯誤訊息篩選順便更新狀態
  const submitForm = event => {
    event.preventDefault();
    console.log();
    if (account.length <= 3 || !emailRegex.test(email)) {
      alert.error("請輸入正確資訊");
      return;
    }
    fetch("http://localhost:5000/handmade/member/mail", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_account: account,
        member_email: email
      })
    })
      .then(res => {
        console.log(res.json);
        return res.json();
      })
      .then(info => {
        info.message == "請至信箱確認密碼" && alert.success(info.message);
        info.message == "請輸入正確的資訊" && alert.error(info.message);
      });
    console.log(account.length);
    setaccount("");
    setemail("");
    setTimeout(() => {
      props.boxStateChange(0);
    }, 1000);
  };
  return (
    <>
      <div className="login-wrap d-flex flex-column align-items-center">
        <div className="mt-4">
          <img src="/image/logo/logo-03.png" alt="" width="180px" />
        </div>
        <p className="mt-4 mb-3" style={{ color: "white" }}>
          請填寫帳號與信箱
        </p>
        <form>
          <ul>
            <li>
              <label htmlFor="member-account">
                <FaUserAlt />
              </label>
              <input
                name="account"
                id="member-account"
                placeholder="帳號"
                onChange={handleChange}
                className={formErrors.account === "最少3個字" ? "error" : null}
                value={account}
              />
              <p className="errorText">{formErrors.account} &nbsp;</p>
            </li>
            <li>
              <label htmlFor="member-email">
                <MdEmail />
              </label>
              <input
                name="email"
                id="member-email"
                placeholder="信箱"
                onChange={handleChange}
                value={email}
              />
              <p className="errorText">{formErrors.email}&nbsp;</p>
            </li>
          </ul>
          <div className="login-btn mt-0">
            <input
              type="submit"
              className=""
              value="確認"
              onClick={submitForm}
            />
          </div>
          <div className="text-center m-3">
            <span className="register" onClick={() => props.boxStateChange(0)}>
              切換到登入頁&nbsp;
            </span>
          </div>
          <div className="text-center"></div>
        </form>
      </div>
      <div className="backdropChange" onClick={props.memberSignIn}></div>
      <div
        className={
          props.bgImg ? `login-backdrop${props.bgImg}` : "login-backdrop"
        }
        onClick={props.memberSignIn}
      >
        <div className="go-to-item ">前往商品頁</div>
        <div className="perf-link ">
           
           {props.bgImg == 1 ? <a href="http://localhost:3000/handmade/store/7/course/148" className="btn1 btn-2">小蛋糕</a> : ""}
           {props.bgImg == 2 ? <a href="http://localhost:3000/handmade/store/7/course/149" className="btn1 btn-2">馬卡龍</a> : ""}
           {props.bgImg == 3 ? <a href="http://localhost:3000/handmade/store/7/course/150" className="btn1 btn-2">蝴蝶餅</a> : ""}
           {props.bgImg == 4 ? <a href="http://localhost:3000/handmade/store/7/course/151" className="btn1 btn-2">小甜點</a> : ""}
           {props.bgImg == 5 ? <a href="http://localhost:3000/handmade/store/7/course/152" className="btn1 btn-2">鹹蛋糕</a> : ""}
           {props.bgImg == 6 ? <a href="http://localhost:3000/handmade/store/7/course/159" className="btn1 btn-2">檸檬塔</a> : ""}
           {props.bgImg == 7 ? <a href="http://localhost:3000/handmade/store/7/course/296" className="btn1 btn-2">抹茶塔</a> : ""}
         </div>
      </div>
    </>
  );
}
export default MemberEmail;
