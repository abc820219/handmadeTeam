import React from "react";
import "../../commom/scss/member/member_sideBar.scss";
import { Link } from "react-router-dom";
const MemberSideBar = ({ match }) => {
  return (
    <aside className="side-bar">
      <div className="member-function d-flex flex-column align-items-center">
        <div className="member-info">
          <figure className="member-photo">
            <img
              src="https://pixel.nymag.com/imgs/daily/vulture/2015/04/02/02-winnie-the-pooh.w330.h330.jpg"
              className="object"
              alt="..."
            />
          </figure>
        </div>
        <h5 className="member-title text-center">LIU HAN WEN</h5>
        <div className="member-profile">
          <p>PROFILE</p>
          <h3>
            <Link to="/handmade/member/edit">基本資料修改</Link>
          </h3>
          <h3>
            <Link to="/handmade/member/passwordEdit">重設密碼</Link>
          </h3>
        </div>
        <div className="member-like">
          <p>LIKED AND　WATCHED</p>
          <h3>收藏推薦清單</h3>
          <h3>瀏覽紀錄</h3>
        </div>
        <div className="member-order">
          <p>ACTIVITY FINISHING</p>
          <h3>優惠活動</h3>
          <h3>
            <Link to="/handmade/member/order">訂單紀錄</Link>
          </h3>
        </div>
      </div>
    </aside>
  );
};

export default MemberSideBar;
