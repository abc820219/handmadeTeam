import React, { useEffect, useState } from "react";
import "../../commom/scss/member/memberEdit.scss";
import { FaUserAlt, FaBirthdayCake, FaAddressCard } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

const MemberEdit = () => {
  //會員----------------------------------------------------------
  const [member_address, setmember_address] = useState(null);
  const [member_birthday, setmember_birthday] = useState(null);
  const [member_email, setmember_email] = useState(null);
  const [member_name, setmember_name] = useState(null);
  const [member_nickname, setmember_nickname] = useState(null);
  const [member_phone, setmember_phone] = useState(null);
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
  const [address, setaddress] = useState(null);
  const [birthday, setbirthday] = useState(null);
  const [email, setemail] = useState(null);
  const [name, setname] = useState(null);
  const [nickname, setnickname] = useState(null);
  const [phone, setphone] = useState(null);
  //輸入值------------------------------------------------------------
  //------------------------------------------------------------------
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  ); //信箱正規
  const phoneRegex = RegExp(/^[09]{2}[0-9]{8}$/); //手機正規
  //------------------------------------------------------------------
  useEffect(() => {
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
        console.log(res.info);
        setmember_address(res.info.member_address);
        setmember_birthday(res.info.member_birth);
        setmember_email(res.info.member_email);
        setmember_name(res.info.member_name);
        setmember_nickname(res.info.member_nickname);
        setmember_phone(res.info.member_phone);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  //資料載入完成-------------------------------------------------

  return (
    <div className="container-fluid MemberEdit">
      <div className="row">
        <div
          className="col-4"
          style={{ background: "#635E59", minHeight: "937px", color: "#fff" }}
        >
          <h4>
            <span>會員基本資料</span>
          </h4>
          <ul>
            <li>姓名:{member_name ? member_name : "未填寫"}</li>
            <li>暱稱:{member_nickname ? member_nickname : "未填寫"}</li>
            <li>信箱:{member_email ? member_email : "未填寫"}</li>
            <li>手機:{member_phone ? member_phone : "未填寫"}</li>
            <li>
              生日:{member_birthday ? member_birthday.slice(0, 10) : "未填寫"}
            </li>
            <li>地址:{member_address ? member_address : "未填寫"}</li>
          </ul>
        </div>
        <div className="col-8 d-flex flex-column bg-linear">
          <form>
            <div className="MemberEditHeader ">
              <h4>
                <span>基本資料修改</span>
              </h4>
            </div>
            <div className="MemberEditMain mb-5 d-flex flex-column">
              <div className="d-flex  justify-content-center">
                <div className="short-input">
                  <div className="titleH">Name</div>
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
                  <div className="titleH">NickName</div>
                  <div className="position-relative">
                    <input
                      name=""
                      type="tel"
                      placeholder={
                        member_nickname ? member_nickname : "請填入暱稱"
                      }
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
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center">
                <div className="longe-input">
                  <div className="titleH">Email address</div>
                  <div className="position-relative">
                    <input
                      name="email"
                      type="text"
                      placeholder={
                        member_address ? member_address : "請填入信箱地址"
                      }
                      onChange={handleChange}
                      value={email}
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
                  <span>{formErrors.email}</span>
                </div>
              </div>
              <div className="d-flex  justify-content-center">
                <div className="short-input">
                  <div className="titleH">Phone</div>
                  <div className="position-relative">
                    <input
                      name="phone"
                      type="tel"
                      placeholder={member_phone ? member_phone : "請填入手機"}
                      onChange={handleChange}
                      value={phone}
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
                  <span>{formErrors.phone}</span>
                </div>
                <div className="short-input">
                  <div className="titleH">birthday</div>
                  <div className="position-relative">
                    <input
                      name="birthday"
                      className="date-input"
                      type="date"
                      placeholder={
                        member_birthday ? member_birthday.slice(0, 10) : null
                      }
                      onChange={handleChange}
                      value={birthday ? birthday : member_birthday}
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
              <div className="d-flex  justify-content-center mb">
                <div className="longe-input">
                  <div className="titleH">Street address</div>
                  <div className="position-relative">
                    <input
                      name="address"
                      type="address"
                      placeholder={
                        member_address ? member_address : "請填入地址"
                      }
                      onChange={handleChange}
                      value={address}
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
                  <span>{formErrors.address}</span>
                </div>
              </div>
            </div>
            <div className="MemberEditFooter  d-flex  flex-column align-items-end">
              <input
                name=""
                className="formBtn mt-5"
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
    console.log("formSubmit");
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
