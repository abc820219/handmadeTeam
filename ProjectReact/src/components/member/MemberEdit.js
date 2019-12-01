import React, { useEffect, useState } from "react";
import "../../commom/scss/member/memberEdit.scss";
import { FaUserAlt, FaBirthdayCake, FaAddressCard } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";
import MemberInfo from "./MemberInfo";
import UseWinSize from "../../components/UseWinSize";
import { useAlert } from "react-alert";
const MemberEdit = () => {
  const alert = useAlert();
  //會員----------------------------------------------------------
  const size = UseWinSize();
  const [member_address, setmember_address] = useState("");
  const [member_birthday, setmember_birthday] = useState("");
  const [member_email, setmember_email] = useState("");
  const [member_name, setmember_name] = useState("");
  const [member_nickname, setmember_nickname] = useState("");
  const [member_phone, setmember_phone] = useState("");
  //會員----------------------------------------------------------
  //錯誤訊息--------------------------------------------------------
  const [formErrors, setformErrors] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    address: ""
  });
  //錯誤訊息----------------------------------------------------------
  //輸入值------------------------------------------------------------
  const [address, setaddress] = useState("");
  const [birthday, setbirthday] = useState("2019-01-01");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [nickname, setnickname] = useState("");
  const [phone, setphone] = useState("");
  //輸入值------------------------------------------------------------
  //------------------------------------------------------------------
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  ); //信箱正規
  const phoneRegex = RegExp(/^[09]{2}[0-9]{8}$/); //手機正規
  //------------------------------------------------------------------
  useEffect(() => {
    let isSub = true;
    fetch("http://localhost:5000/handmade/member/getMemberData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id")
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (isSub) {
          console.log(res.info);
          setmember_address(res.info.member_address);
          if (res.info.member_birth) {
            setmember_birthday(res.info.member_birth.slice(0, 10));
          }
          setmember_email(res.info.member_email);
          setmember_name(res.info.member_name);
          setmember_nickname(res.info.member_nickname);
          setmember_phone(res.info.member_phone);
        }
      })
      .catch(error => {
        console.log(error);
      });
    return () => (isSub = false);
  }, []);
  //資料載入完成-------------------------------------------------
  return (
    <div className="container-fluid MemberEdit">
      <div className="row">
        <MemberInfo></MemberInfo>
        <div className="col-12 col-md-8 d-flex flex-column bg-linear control">
          <p className="bottomText">MEMBER</p>
          <form>
            <div className="MemberEditHeader ">
              <h4>
                <span>基本資料修改</span>
              </h4>
            </div>
            <div className="MemberEditMain mb-5 d-flex flex-column">
              <div className="d-flex edit-rwd justify-content-center">
                <div className="short-input">
                  <div className="titleH">姓名</div>
                  <div className="position-relative">
                    <input
                      name="name"
                      type="name"
                      placeholder={member_name ? member_name : "請填入姓名"}
                      onChange={handleChange}
                      value={name}
                    />
                    <FaUserAlt
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                </div>
                <div className="short-input">
                  <div className="titleH">暱稱</div>
                  <div className="position-relative">
                    <input
                      name="nickname"
                      type="name"
                      placeholder={
                        member_nickname ? member_nickname : "請填入暱稱"
                      }
                      onChange={handleChange}
                      value={nickname}
                    />
                    <FaUserAlt
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                </div>
              </div>
              <div className="d-flex edit-rwd justify-content-center">
                <div className="longe-input">
                  <div className="titleH">信箱</div>
                  <div className="position-relative">
                    <input
                      name="email"
                      type="text"
                      placeholder={
                        member_email ? member_email : "請填入信箱地址"
                      }
                      onChange={handleChange}
                      value={email}
                      className={formErrors.email ? "error" : ""}
                    />
                    <MdEmail
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span className="errorText d-flex align-items-center">
                    {formErrors.email ? <FiXCircle /> : ""}
                    {formErrors.email}
                  </span>
                </div>
              </div>
              <div className="d-flex edit-rwd justify-content-center">
                <div className="short-input">
                  <div className="titleH">手機</div>
                  <div className="position-relative">
                    <input
                      name="phone"
                      type="tel"
                      placeholder={member_phone ? member_phone : "請填入手機"}
                      onChange={handleChange}
                      value={phone}
                      className={formErrors.phone ? "error" : ""}
                    />
                    <MdPhoneAndroid
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span className="errorText d-flex align-items-center">
                    {formErrors.phone ? <FiXCircle /> : ""}
                    {formErrors.phone}{" "}
                  </span>
                </div>
                <div className="short-input">
                  <div className="titleH">生日</div>
                  <div className="position-relative">
                    <input
                      name="birthday"
                      className="date-input"
                      type="date"
                      placeholder={member_birthday ? member_birthday : null}
                      onChange={handleChange}
                      value={birthday}
                    />
                    <FaBirthdayCake
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex edit-rwd justify-content-center mb">
                <div className="longe-input">
                  <div className="titleH">地址</div>
                  <div className="position-relative">
                    <input
                      name="address"
                      type="address"
                      placeholder={
                        member_address ? member_address : "請填入地址"
                      }
                      onChange={handleChange}
                      value={address}
                      className={formErrors.address ? "error" : ""}
                    />
                    <FaAddressCard
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "white"
                      }}
                    />
                  </div>
                  <br />
                  <span className="errorText d-flex align-items-center">
                    {formErrors.address ? <FiXCircle /> : ""}
                    {formErrors.address}
                  </span>
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
                id="formBtn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  //-------------------------------------事件------------------
  function formSubmit(event) {
    event.preventDefault();
    if (formErrors.email || formErrors.phone) {
      alert.success("請輸入正確資訊");
      return;
    }
    console.log("formSubmit");
    fetch("http://localhost:5000/handmade/member/MemberEdit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id"),
        member_email: email ? email : member_email,
        member_name: name ? name : member_name,
        member_nickname: nickname ? nickname : member_nickname,
        member_birth: birthday ? birthday : member_birthday,
        member_phone: phone ? phone : member_phone,
        member_address: address ? address : member_address
      })
    })
      .then(res => {
        return res.json();
      })
      .then(row => {
        console.log(row);
        alert.success(row.message);
        setTimeout(() => {
          window.location = "http://localhost:3000/handmade/member/edit";
        }, 500);
      })
      .catch(error => {
        alert.error(error);
      });
  }
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(value);
    console.log(name + value);
    switch (name) {
      case "name":
        setname(value);
        break;
      case "nickname":
        setnickname(value);
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "請輸入正確的格式";
        setemail(value);
        break;
      case "phone":
        setphone(value);
        formErrors.phone = phoneRegex.test(value) ? "" : "請輸入正確的格式";
        break;
      case "address":
        setaddress(value);
        formErrors.address = value.length < 6 ? "最少6個字" : "";
        break;
      case "birthday":
        setbirthday(value);
        break;
      default:
        break;
    }
    setformErrors({ formErrors, ...formErrors });
  }
  //-------------------------------------事件------------------------
  //-------------------------------------生命週期事件-----------------
};

export default MemberEdit;
