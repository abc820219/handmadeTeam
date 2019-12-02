import React, { useEffect, useState } from "react";
import "../../commom/scss/member/memberEdit.scss";
import UseWinSize from "../../components/UseWinSize";
const MemberInfo = () => {
  //會員----------------------------------------------------------
  const size = UseWinSize();
  const [member_address, setmember_address] = useState("");
  const [member_birthday, setmember_birthday] = useState("");
  const [member_email, setmember_email] = useState("");
  const [member_name, setmember_name] = useState("");
  const [member_nickname, setmember_nickname] = useState("");
  const [member_phone, setmember_phone] = useState("");
  //會員----------------------------------------------------------
  //輸入值------------------------------------------------------------
  const [birthday, setbirthday] = useState("");
  const [loding, setLoding] = useState(true);
  //輸入值------------------------------------------------------------
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
          setmember_address(res.info.member_address);
          if (res.info.member_birth) {
            setmember_birthday(res.info.member_birth.slice(0, 10));
          }
          setmember_email(res.info.member_email);
          setmember_name(res.info.member_name);
          setmember_nickname(res.info.member_nickname);
          setmember_phone(res.info.member_phone);
          setLoding(false);
        }
      })
      .catch(error => {
        console.log(error);
      });

    return () => (isSub = false);
  }, [
    member_address,
    member_birthday,
    member_email,
    member_name,
    member_nickname,
    member_phone
  ]);
  if (loding) {
    return (
      <div
        className="memberInfo col-md-4 col-12"
        style={{ background: "#635E59", color: "#fff" }}
      >
        <h4>
          <span className="fontW">會員基本資料</span>
        </h4>
        <ul>
          <li className="fontW">姓名</li>
          <li className="fontW">暱稱</li>
          <li className="fontW">信箱</li>
          <li className="fontW">手機</li>
          <li className="fontW">生日</li>
          <li className="fontW">地址</li>
        </ul>
        <p className="topText">MEMBER</p>
      </div>
    );
  }
  return (
    <div
      className="memberInfo col-md-4 col-12"
      style={{ background: "#635E59", color: "#fff" }}
    >
      <h4>
        <span className="fontW">會員基本資料</span>
      </h4>
      <ul>
        <li className="fontW">
          姓名
          <div> {member_name ? member_name : "未填寫"}</div>
        </li>
        <li className="fontW">
          暱稱
          <div>{member_nickname ? member_nickname : "未填寫"}</div>
        </li>
        <li className="fontW">
          信箱
          <div>{member_email ? member_email : "未填寫"}</div>
        </li>
        <li className="fontW">
          手機
          <div>{member_phone ? member_phone : "未填寫"}</div>
        </li>
        <li className="fontW">
          生日
          <div>{member_birthday ? member_birthday : "未填寫"}</div>
        </li>
        <li className="fontW">
          地址
          <div>{member_address ? member_address : "未填寫"}</div>
        </li>
      </ul>
      <p className="topText">MEMBER</p>
    </div>
  );
};

export default MemberInfo;
