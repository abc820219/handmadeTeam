import React, { useEffect, useState } from "react";
import LogOut from "./MemberLogout";
import { AiFillPicture } from "react-icons/ai";
import "../../commom/scss/member/member_sideBar.scss";
import { Link } from "react-router-dom";

const MemberSideBar = ({ match }) => {
  const [memberImgName, setMemberImgName] = useState("");
  const [imgHand, setImgHand] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/handmade/member/getMemberImg", {
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
      .then(rows => {
        setMemberImgName(rows.info[0].member_photo_name);
      })
      .catch(error => console.log(error));
  }, [imgHand]);
  const imgChange = e => {
    let file = e.target.files[0];
    let imgName = file.name;
    console.log(imgName);
    console.log(file);
    const data = new FormData();
    console.log(data + "1");
    data.append("file", file);
    console.log(data);
    fetch("http://localhost:5000/handmade/member/upload", {
      method: "POST",
      body: data
    })
      .then(res => {
        fetch("http://localhost:5000/handmade/member/memberImg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            member_sid: localStorage.getItem("member_id"),
            member_photo_name: imgName
          })
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            alert(res.message);
            console.log(res);
            setImgHand(!imgHand);
          });
      })
      .catch(error => console.log(error));
  };
  return (
    <aside className="member-side-bar d-flex flex-column align-items-center">
      <div className="member-side-bar-header">
        <div className="imgBox d-flex  flex-column justify-content-center align-items-center">
          <img
            src={
              !memberImgName
                ? "http://g.udn.com.tw/upfiles/B_AN/andy2946/PSN_PHOTO/813/f_23140813_1.jpg"
                : `http://localhost:5000/images/member/member${memberImgName}`
            }
          ></img>
          <div className="imgEdit">
            <div className="imgBox">
              <AiFillPicture />
              <input
                type="file"
                id="upload_form"
                className="imgPut"
                onChange={imgChange}
              />
            </div>
          </div>
        </div>
        <div className="nameBox">
          <span>USER NAME</span>
          <LogOut></LogOut>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="member-side-bar-info">
        <ul>
          PROFILE
          <li>
            <Link to="/handmade/member/edit">基本資料</Link>
          </li>
          <li>
            <Link to="/handmade/member/passwordEdit">重設密碼</Link>
          </li>
        </ul>
        <ul>
          PROFILE
          <li>收藏清單</li>
          <li>優惠活動</li>
        </ul>
        <ul>
          PROFILE
          <li>
            <Link to="/handmade/member/order">訂單紀錄</Link>
          </li>
          <li>
            <Link to="/handmade/member/cart">購物車</Link>
          </li>
          <li>
            <Link to="/handmade/">回首頁</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MemberSideBar;
