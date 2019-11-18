import React, { useEffect, useState } from "react";
import "../../commom/scss/member/memberEdit.scss";

const MemberInfo = () => {
  //會員----------------------------------------------------------
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
          console.log(res.info);
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
          <span>會員基本資料</span>
        </h4>
        <ul>
          <li>姓名:</li>
          <li>暱稱:</li>
          <li>信箱:</li>
          <li>手機:</li>
          <li>生日:</li>
          <li>地址:</li>
        </ul>
      </div>
    );
  }
  return (
    <div
      className="memberInfo col-md-4 col-12"
      style={{ background: "#635E59", color: "#fff" }}
    >
      <h4>
        <span>會員基本資料</span>
      </h4>
      <ul>
        <li>姓名:{member_name ? member_name : "未填寫"}</li>
        <li>暱稱:{member_nickname ? member_nickname : "未填寫"}</li>
        <li>信箱:{member_email ? member_email : "未填寫"}</li>
        <li>手機:{member_phone ? member_phone : "未填寫"}</li>
        <li>生日:{member_birthday ? member_birthday : "未填寫"}</li>
        <li>地址:{member_address ? member_address : "未填寫"}</li>
      </ul>
    </div>
  );
};

export default MemberInfo;
