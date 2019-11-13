import React from "react";
import LogOut from "./MemberLogout";
import { AiFillPicture } from "react-icons/ai";
import "../../commom/scss/member/member_sideBar.scss";
import { Link } from "react-router-dom";
const MemberSideBar = ({ match }) => {
  return (
    <aside className="member-side-bar d-flex flex-column align-items-center">
      <div className="member-side-bar-header">
        <div className="imgBox d-flex  flex-column justify-content-center align-items-center">
          <img src="https://img.ltn.com.tw/Upload/talk/page/800/2017/03/15/phpWocuqD.png"></img>
          <AiFillPicture className="imgEdit" />
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
