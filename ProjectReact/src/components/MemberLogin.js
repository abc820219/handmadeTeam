import React, { useState, useEffect } from "react";
import FacebookLogin from "./FacebookLogin";
import { FaUserAlt, FaKey, FaEye } from "react-icons/fa";
import Captcha from "captcha-mini";
import "../commom/scss/MemberLogin.scss";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";
import { get } from "http";

function MemberLogin(props) {
  const alert = useAlert();
  const [MemberLogin, setMemberLogin] = useState(true);
  const [account, setaccount] = useState("");
  const [password, setpassword] = useState("");
  const [Change] = useState(true);
  const [formErrors, setformErrors] = useState({
    account: "",
    email: "",
    password: ""
  });
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaAgree, setCaptchaAgreee] = useState("");
  const [captchaErr, setCaptchaErr] = useState(false);
  const [shown, setShown] = React.useState(false);
  console.log(props.bgImg);
  useEffect(() => {
    let captcha = new Captcha({
      lineWidth: 1, //线条宽度
      lineNum: 3, //线条数量
      dotR: 1, //点的半径
      dotNum: 25, //点的数量
      preGroundColor: [50, 80], //前景色区间
      backGroundColor: [150, 250], //背景色区间
      fontSize: 30, //字体大小
      fontFamily: ["Georgia", "微软雅黑", "Helvetica", "Arial"], //字体类型
      fontStyle: "stroke", //字体绘制方法，有fill和stroke
      content: "abcdefghijklmnopqrstuvw", //验证码内容
      length: 3 //验证码长度
    });
    //把生成的驗證碼丟到canvas容器中，然後callback把它(參數自訂為r)設定給state
    captcha.draw(document.querySelector("#captcha"), value => {
      setCaptchaAgreee(value);
    });
  }, [Change]);

  
  //------事件處理-------
  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(value);
    console.log(name + value);
    switch (name) {
      case "account":
        setaccount(value);
        formErrors.account = value.length < 3 ? "最少3個字" : "";
        break;
      case "password":
        setpassword(value);
        formErrors.password = value.length < 3 ? "最少3個字" : "";
        break;
      case "captchatext":
        setCaptchaValue(value);
        break;
      default:
        break;
    }
    setformErrors({ formErrors, ...formErrors });
    setCaptchaErr(false);
  }; //錯誤訊息篩選順便更新狀態

  const submitForm = event => {
    event.preventDefault();
    if (captchaValue != captchaAgree) {
      // alert("驗證碼錯誤");
      alert.error("驗證碼錯誤");
      setCaptchaErr(true);
      return;
    }
    if (!account || !password) {
      // alert("驗證碼錯誤");
      alert.error("請輸入正確資訊");
      setCaptchaErr(true);
      return;
    }
    fetch("http://localhost:5000/handmade/member/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_account: account,
        member_password: password
      })
    })
      .then(res => {
        let member_data = res.json();
        return member_data;
      })
      .then(member_data => {
        localStorage.setItem("member_id", member_data.info.member_sid);
        localStorage.setItem("member_data", JSON.stringify(member_data.info));
        console.log(member_data.info);
        // alert(member_data.message);
        alert.success(member_data.message);
        setTimeout(() => {
          window.location = `http://localhost:3000${props.location.pathname}`;
        }, 1500);
      })
      .catch(async err => {
        console.log(err);
        setaccount("");
        setpassword("");
        setCaptchaValue("");
        alert.error("登入失敗");
      });
    setaccount("");
    setpassword("");
    setCaptchaValue("");
    setCaptchaErr(false);
  };
  if (MemberLogin) {
    return (
      <>
        <div className="login-wrap d-flex flex-column align-items-center">
          <div className="mt-4">
            <img src="/image/logo/logo-03.png" alt="" width="180px" />
          </div>
          <FacebookLogin alert={alert} />
          <p className="mt-4 mb-3" style={{ color: "#fff" }}>
            使用handmade帳號登入
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
                  className={formErrors.account == "最少3個字" ? "error" : null}
                  value={account}
                />
                <p className="errorText">{formErrors.account} &nbsp;</p>
              </li>
              <li>
                <label htmlFor="member-password">
                  <FaKey />
                </label>
                <input
                  name="password"
                  type={shown ? "text" : "password"}
                  id="member-password"
                  placeholder="密碼"
                  onChange={handleChange}
                  className={
                    formErrors.password == "最少3個字" ? "error" : null
                  }
                  value={password}
                />
                <div className="passwordShow">
                  <FaEye onClick={() => setShown(!shown)} />
                </div>
                <p className="errorText">{formErrors.password} &nbsp;</p>
              </li>
            </ul>
            <div className="d-flex justify-content-around">
              <input
                className={
                  captchaErr ? "captchatextInput error" : "captchatextInput"
                }
                name="captchatext"
                type="text"
                placeholder="輸入驗證碼"
                value={captchaValue}
                onChange={handleChange}
              />
              <canvas width="100" height="30px" id="captcha" />
            </div>
            <div className="login-btn">
              <input
                type="submit"
                className=""
                value="登入"
                onClick={submitForm}
              />
            </div>
            <div className="text-center m-3 member-footer-text">
              <span
                className="password-forget"
                onClick={() => props.boxStateChange(3)}
              >
                忘記密碼&nbsp;
              </span>
              <span
                className="register"
                onClick={() => props.boxStateChange(1)}
              >
                /&nbsp;註冊
              </span>
            </div>
            <div className="text-center"></div>
          </form>
        </div>
        {/* <div className="login-backdrop" onClick={props.memberSignIn}></div> */}
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
}

export default withRouter(MemberLogin);
