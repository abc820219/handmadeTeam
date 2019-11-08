import React, { Component } from "react";
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
class MemberLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberLogin: true,
      account: null,
      email: null,
      password: null,
      formErrors: {
        account: " ",
        email: "",
        password: ""
      }
    };
    console.log("props" + this.props.memberSignIn);
  }
  render() {
    if (this.state.MemberLogin) {
      return (
        <>
          <div className="login-wrap d-flex flex-column align-items-center">
            <div className="mt-4">LOGO</div>
            <FacebookLogin />
            <p className="mt-4 mb-3">使用handmade帳號登入</p>
            <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <label htmlFor="member-account">
                    <FaUserAlt />
                  </label>
                  <input
                    name="account"
                    id="member-account"
                    placeholder="帳號"
                    onChange={this.handleChange}
                    className={
                      this.state.formErrors.account.length > 0 ? "error" : null
                    }
                    value={this.state.account}
                  />
                  <p className="errorText">
                    {this.state.formErrors.account} &nbsp;
                  </p>
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
                    onChange={this.handleChange}
                    className={
                      this.state.formErrors.password.length > 0 ? "error" : null
                    }
                    value={this.state.password}
                  />
                  <p className="errorText">
                    {this.state.formErrors.password} &nbsp;
                  </p>
                </li>
              </ul>
              <div className="d-flex justify-content-around">
                <input
                  className=""
                  style={{ width: "100px" }}
                  name="captchatext"
                  type="text"
                  placeholder="輸入驗證碼"
                  onChange={this.handleInputTextChange}
                />
                <canvas width="100" height="30px" id="captcha" />
              </div>
              <div className="login-btn mt-3">
                <input type="submit" className="" value="登入" />
              </div>
              <div className="text-center m-3">
                <span className="password-forget">忘記密碼&nbsp;</span>
                <span className="register" onClick={this.registerChange}>
                  /&nbsp;註冊
                </span>
              </div>
              <div className="text-center"></div>
            </form>
          </div>
          <div
            className="login-backdrop"
            onClick={this.props.memberSignIn}
          ></div>
        </>
      );
    } else {
      return (
        <>
          <div className="login-wrap d-flex flex-column align-items-center">
            <div className="mt-4">LOGO</div>
            <p className="mt-4 mb-3">註冊個人帳號</p>
            <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <label htmlFor="member-account">
                    <FaUserAlt />
                  </label>
                  <input
                    name="account"
                    id="member-account"
                    placeholder="帳號"
                    onChange={this.handleChange}
                    className={
                      this.state.formErrors.account.length > 0 ? "error" : null
                    }
                  />

                  <p className="errorText">
                    {this.state.formErrors.account}&nbsp;
                  </p>
                </li>
                <li>
                  <label htmlFor="member-password">
                    <MdEmail />
                  </label>
                  <input
                    name="email"
                    id="member-password"
                    placeholder="信箱"
                    onChange={this.handleChange}
                  />

                  <p className="errorText">
                    {this.state.formErrors.email}&nbsp;
                  </p>
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
                    onChange={this.handleChange}
                    className={
                      this.state.formErrors.password.length > 0 ? "error" : null
                    }
                  />
                  <p className="errorText">
                    {this.state.formErrors.password}&nbsp;
                  </p>
                </li>
              </ul>
              <div className="d-flex justify-content-around">
                <input
                  className=""
                  style={{ width: "100px" }}
                  name="captchatext"
                  type="text"
                  placeholder="輸入驗證碼"
                />
                <canvas width="100" height="30px" id="captcha" />
              </div>
              <div style={{ maxWidth: "230px" }} className="my-2">
                <span style={{ fontSize: "13px" }}>
                  按下註冊鈕的同時，表示您已詳閱我們的資料使用政策與使用條款。
                </span>
              </div>
              <div className="login-btn mt-3">
                <input type="submit" className="" value="註冊" />
              </div>
              <div className="text-center m-3">
                <span className="register" onClick={this.loginChange}>
                  切換到登入頁&nbsp;
                </span>
                <span className="register">/&nbsp;閱讀條款</span>
              </div>
              <div className="text-center"></div>
            </form>
          </div>
          <div className="login-backdrop"></div>
        </>
      );
    }
  }
  //------事件處理-------
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "account":
        formErrors.account = value.length < 3 ? "最少3個字" : "";
        break;
      case "password":
        formErrors.password = value.length < 3 ? "最少3個字" : "";
        break;
      case "captchatext":
        formErrors.captchatext = value.length < 3 ? "最少3個字" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "請輸入正確的格式";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }; //錯誤訊息篩選順便更新狀態
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ account: "" });
    this.setState({ password: "" });
    this.setState({ email: "" });
  }; //表單送出
  registerChange = () => {
    this.setState({ MemberLogin: false });
  }; //切換到註冊BOX
  loginChange = () => {
    this.setState({ MemberLogin: true });
  }; //切換到登入BOX
  //------事件處理-------
  //-------生命週期-------
  componentDidMount() {
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
  } //畫面載入生成
} //畫面更新生成
//-------生命週期-------

export default MemberLogin;
