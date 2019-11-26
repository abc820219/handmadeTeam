import React, { useEffect, useState } from "react";
import "../../commom/scss/member/memberEdit.scss";
import Captcha from "captcha-mini";
import { FaKey, FaEye } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import MemberInfo from "./MemberInfo";

const MemberPasswordEdit = () => {
  //輸入值------------------------------------------------------------
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPassword2, setnewPassword2] = useState("");
  const [formErrors, setformErrors] = useState({
    password: "",
    newPassword: "",
    newPassword2: ""
  });
  const [captchaCheck, setcaptchaCheck] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [shown1, setShown1] = React.useState(false);
  const [shown2, setShown2] = React.useState(false);
  const [shown3, setShown3] = React.useState(false);
  let MemberPassword = "";
  if (JSON.parse(localStorage.getItem("member_data"))) {
    MemberPassword = JSON.parse(localStorage.getItem("member_data"))
      .member_password;
  }
  //輸入值------------------------------------------------------------
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
      setcaptchaCheck(value);
    });
  }, []);
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(value);
    console.log(name + value);
    switch (name) {
      case "password":
        setPassword(value);
        formErrors.password = value !== MemberPassword ? "請輸入正確密碼" : "";
        console.log(MemberPassword);
        break;
      case "newPassword":
        setnewPassword(value);
        formErrors.newPassword = value.length < 3 ? "最少3個字" : "";
        break;
      case "newPassword2":
        setnewPassword2(value);
        formErrors.newPassword2 =
          value === newPassword ? "" : "請輸入相同的密碼";
        break;
      case "captchaCheck":
        setCaptchaValue(value);
        break;
      default:
        break;
    }
    setformErrors({ formErrors, ...formErrors });
  }
  //----------------------------------------------------------------------
  return (
    <div className="container-fluid MemberPasswordEdit">
      <div className="row">
        <MemberInfo />
        <div className="col-12 col-md-8 d-flex flex-column bg-linear">
          <form>
            <div className="MemberEditHeader my-3">
              <h4>
                <span>重新設定密碼</span>
              </h4>
            </div>
            <div></div>
            <div className="MemberPasswordEditMain mb-5 d-flex flex-column">
              <div className="passEditRwd d-flex  align-items-end">
                <div className="short-input">
                  <div className="titleH">舊密碼</div>
                  <div className="position-relative">
                    <input
                      name="password"
                      type={shown1 ? "text" : "password"}
                      placeholder="請填入舊密碼"
                      onChange={handleChange}
                      value={password}
                      className={formErrors.password ? "error" : ""}
                    />
                    <FaKey
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "#fff"
                      }}
                    />
                    <FaEye
                      style={{
                        position: "absolute",
                        top: "30%",
                        right: "8px",
                        color: "#fff"
                      }}
                      onClick={() => setShown1(!shown1)}
                    />
                  </div>
                </div>
                <span className="ml-5 my-3 errorText d-flex  align-items-center">
                  {formErrors.password ? <FiXCircle /> : ""}
                  {formErrors.password}
                </span>
              </div>
              <div className=" passEditRwd d-flex align-items-end">
                <div className="short-input">
                  <div className="titleH">新密碼</div>
                  <div className="position-relative">
                    <input
                      name="newPassword"
                      type={shown2 ? "text" : "password"}
                      placeholder="請填入新密碼"
                      onChange={handleChange}
                      value={newPassword}
                      className={formErrors.newPassword ? "error" : ""}
                    />
                    <FaKey
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "#fff"
                      }}
                    />
                    <FaEye
                      style={{
                        position: "absolute",
                        top: "30%",
                        right: "8px",
                        color: "#fff"
                      }}
                      onClick={() => setShown2(!shown2)}

                    />
                  </div>
                </div>
                <span className="ml-5 my-3 errorText d-flex  align-items-center">
                  {formErrors.newPassword ? <FiXCircle /> : ""}
                  {formErrors.newPassword}
                </span>
              </div>
              <div className=" passEditRwd d-flex align-items-end">
                <div className="short-input ">
                  <div className="titleH">新密碼確認</div>
                  <div className="position-relative">
                    <input
                      name="newPassword2"
                      type={shown3 ? "text" : "password"}
                      placeholder="請再次填入新密碼"
                      onChange={handleChange}
                      value={newPassword2}
                      className={formErrors.newPassword2 ? "error" : ""}
                    />
                    <FaKey
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "#fff"
                      }}
                    />
                    <FaEye
                      style={{
                        position: "absolute",
                        top: "30%",
                        right: "8px",
                        color: "#fff"
                      }}
                      onClick={() => setShown3(!shown3)}
                    />
                  </div>
                </div>
                <span className="ml-5 my-3 errorText d-flex  align-items-center">
                  {formErrors.newPassword2 ? <FiXCircle /> : ""}{" "}
                  {formErrors.newPassword2}
                </span>
              </div>
              <div className=" d-flex align-items-end">
                <div className="short-input">
                  <div className="titleH">驗證碼</div>
                  <div className="position-relative">
                    <div className="d-flex captchaCheckBox">
                      <input
                        name="captchaCheck"
                        type="text"
                        placeholder="請填入驗證碼"
                        onChange={handleChange}
                        value={captchaValue}
                      />
                      <FaKey
                        style={{
                          position: "absolute",
                          top: "25%",
                          left: "8px",
                          color: "#fff"
                        }}
                      />
                      <canvas
                        width="100"
                        height="30px"
                        id="captcha"
                        className="ml-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MemberEditFooter  d-flex  flex-column align-items-end">
              <input
                name=""
                className="formBtn"
                type="submit"
                value="修改"
                onClick={formSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  function formSubmit(event) {
    event.preventDefault();
    console.log(captchaValue);
    console.log(captchaCheck);
    if (captchaValue !== captchaCheck) return alert("驗證碼錯誤");
    if (newPassword !== newPassword2) return alert("密碼錯誤");
    if (newPassword === "" || newPassword2 == "") return alert("密碼不得為空");
    if (MemberPassword !== password) return alert("舊密碼輸入錯誤");
    if (newPassword == password) return alert("新密碼不得與舊密碼重複");
    fetch("http://localhost:5000/handmade/member/MemberPasswordEdit", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id"),
        member_password: newPassword
      })
    })
      .then(res => {
        return res.json();
      })
      .then(rows => {
        console.log(rows);
        alert(rows.message);
        if (rows.message === "修改成功請重新登入") {
          window.location = "http://localhost:3000/handmade";
          localStorage.removeItem("member_id");
          localStorage.removeItem("member_id_data");
        }
      });
  }
};

export default MemberPasswordEdit;
