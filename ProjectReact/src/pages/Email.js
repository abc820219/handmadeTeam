import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import { FaKey, FaEye } from "react-icons/fa";
import "../commom/scss/MemberLogin.scss";
import { useAlert } from "react-alert";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
); //信箱正規
const Email = props => {
  const alert = useAlert();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [formErrors, setformErrors] = useState({
    password: "",
    newPassword: ""
  });
  let member_sid = props.match.params.sid;
  //------事件處理-------
  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name + value);
    switch (name) {
      case "password":
        setPassword(value);
        formErrors.password = value.length < 3 ? "最少3個字" : "";
        break;
      case "newPassword":
        setNewPassword(value);
        formErrors.newPassword = value === password ? "" : "請輸入相同密碼";
        break;
      default:
        break;
    }
    setformErrors({ formErrors, ...formErrors });
  }; //錯誤訊息篩選順便更新狀態
  const submitForm = event => {
    event.preventDefault();
    if (formErrors.password || formErrors.newPassword) {
      alert.error("請檢查輸入的資訊");
      return;
    }
    if (!password || !newPassword) {
      alert.error("請檢查輸入的資訊");
      return;
    }

    console.log();
    fetch("http://localhost:5000/handmade/member/mailEdit", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: member_sid,
        member_password: password
      })
    })
      .then(res => {
        let member_data = res.json();
        return member_data;
      })
      .then(member_data => {
        alert.success(member_data.message + ",跳轉中");
        setTimeout(() => {
          window.location = "http://localhost:3000/handmade/";
        }, 1000);
      })
      .catch(async err => {
        console.log(err);
        alert.error("修改失敗");
        window.location = window.location = window.location.href;
      });
    setPassword("");
    setNewPassword("");
  };
  return (
    <>
      <div
        className="login-wrap d-flex flex-column align-items-center"
        style={{ backgroundColor: "#eec1a5" }}
      >
        <div className="mt-4">
          <img src="/image/logo/logo-03.png" alt="" width="180px" />
        </div>
        <p className="mt-4 mb-3" style={{ color: "#fff" }}>
          請填寫新密碼
        </p>
        <form>
          <ul>
            <li>
              <label htmlFor="password">
                <FaKey />
              </label>
              <input
                name="password"
                id="password"
                placeholder="新密碼"
                onChange={handleChange}
                className={formErrors.password === "最少3個字" ? "error" : null}
                value={password}
              />
              <p className="errorText">{formErrors.password} &nbsp;</p>
            </li>
            <li>
              <label htmlFor="newPassword">
                <FaKey />
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="再次輸入新密碼"
                onChange={handleChange}
                value={newPassword}
              />
              <p className="errorText">{formErrors.newPassword}&nbsp;</p>
            </li>
          </ul>
          <div className="login-btn mt-0">
            <input
              type="submit"
              className=""
              value="確認修改"
              onClick={submitForm}
            />
          </div>
          <div className="text-center my-5"></div>
          <div className="text-center"></div>
        </form>
      </div>
      <div className="login-backdrop"></div>
    </>
  );
};
export default withRouter(Email);
