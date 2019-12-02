import React, { useEffect, useState } from "react";
import LogOut from "./MemberLogout";
import { AiFillPicture } from "react-icons/ai";
import "../../commom/scss/member/member_sideBar.scss";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
const MemberSideBar = ({ match, showSideBar, page, setPage }) => {
  const alert = useAlert();
  const [memberImgName, setMemberImgName] = useState("");
  const [imgHand, setImgHand] = useState(false);
  const [tokeId, setTokenId] = useState("");
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("member_data"))) {
      setTokenId(JSON.parse(localStorage.getItem("member_data")).token_id);
    }
  }, []);
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
    const data = new FormData();
    data.append("file", file);
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
            alert.success(res.message);
            setImgHand(!imgHand);
          });
      })
      .catch(error => console.log(error));
  };
  return (
    <aside
      className={
        showSideBar
          ? "member-side-bar d-flex flex-column align-items-center member-side-bar-hide"
          : "member-side-bar d-flex flex-column align-items-center member-side-bar-hide  member-side-bar-show"
      }
    >
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
          <LogOut></LogOut>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="member-side-bar-info">
        <ul>
          PROFILE
          <li>
            <Link
              className={page === 0 ? "active" : ""}
              onClick={() => setPage(0)}
              to="/handmade/member/edit"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              基本資料
            </Link>
          </li>
          {!tokeId ? (
            <li>
              <Link
                className={page === 1 ? "active" : ""}
                onClick={() => setPage(1)}
                to="/handmade/member/passwordEdit"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                重設密碼
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <ul>
          PROFILE
          {/* <li>收藏清單</li> */}
          <li>
            <Link
              className={page === 2 ? "active" : ""}
              onClick={() => setPage(2)}
              to="/handmade/member/coupon"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              優惠活動
            </Link>
          </li>
        </ul>
        <ul>
          PROFILE
          <li>
            <Link
              className={page === 3 ? "active" : ""}
              onClick={() => setPage(3)}
              to="/handmade/member/order"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              訂單紀錄
            </Link>
          </li>
          <li>
            <Link
              className={page === 4 ? "active" : ""}
              onClick={() => setPage(4)}
              to="/handmade/member/cart"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              購物車
            </Link>
          </li>
          <li>
            <Link
              to="/handmade/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              回首頁
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MemberSideBar;
