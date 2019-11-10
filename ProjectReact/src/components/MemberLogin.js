import React, { useState, useEffect } from "react";
import FacebookLogin from "./FacebookLogin";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Captcha from "captcha-mini";
import "../commom/scss/MemberLogin.scss";
// import {Link} from "react-router-dom"
//宣告-----------
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
); //信箱正規
//宣告-----------
function MemberLogin(props) {
  const [MemberLogin, setMemberLogin] = useState(true);
  const [account, setaccount] = useState("");
  const [password, setpassword] = useState("");
  const [Change] = useState(true);
  const [formErrors, setformErrors] = useState({
    account: "",
    email: "",
    password: ""
  });
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
      console.log(value);
    });
  }, [Change]);

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
      case "password":
        setpassword(value);
        formErrors.password = value.length < 3 ? "最少3個字" : "";
        break;
      case "captchatext":
        formErrors.captchatext = value.length < 3 ? "最少3個字" : "";
        break;
      default:
        break;
    }
    setformErrors({ formErrors, ...formErrors });
  }; //錯誤訊息篩選順便更新狀態
  const submitForm = async event => {
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
        return res.json();
      })
      .then(data => {
        console.log(data.info.member_sid);
        localStorage.setItem("member_id", data.info.member_sid);
      })
      .catch(error => {
        console.log(error);
      });
    // try{

    // }catch(error){

    // }
    event.preventDefault();
    setaccount("");
    setpassword("");
  };
  if (MemberLogin) {
    return (
      <>
        <div className="login-wrap d-flex flex-column align-items-center">
          <div className="mt-4">LOGO</div>
          <FacebookLogin />
          <p className="mt-4 mb-3">使用handmade帳號登入</p>
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
                  type="password"
                  id="member-password"
                  placeholder="密碼"
                  onChange={handleChange}
                  className={
                    formErrors.password == "最少3個字" ? "error" : null
                  }
                  value={password}
                />
                <p className="errorText">{formErrors.password} &nbsp;</p>
              </li>
            </ul>
            <div className="d-flex justify-content-around">
              <input
                className="captchatextInput"
                name="captchatext"
                type="text"
                placeholder="輸入驗證碼"
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
              <span className="password-forget">忘記密碼&nbsp;</span>
              <span className="register" onClick={props.boxStateChange}>
                /&nbsp;註冊
              </span>
            </div>
            <div className="text-center"></div>
          </form>
        </div>
        <div className="login-backdrop" onClick={props.memberSignIn}></div>
      </>
    );
  }
}

export default MemberLogin;
