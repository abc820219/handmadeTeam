import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../../commom/scss/teacher/subject.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderInfo from "../../components/teacher/OrderInfo";
import {
  MdLocationOn,
  MdSchedule,
  MdDateRange,
  MdMap,
  MdPerson
} from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { FacebookShareButton, LineShareButton } from "react-share";
import { FacebookIcon, LineIcon } from "react-share";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject_name: "",
      subject_feature: "",
      suject_date: "",
      subject_spend_time: "",
      subject_address: "",
      subject_img: "",
      subject_price: "",
      showOrder: false,
      last_people: "",
      orderPeople: ""
    };
  }

  componentDidMount() {
    this.getSubjectInfo();
    this.getSubjectOrder();
  }
  // ========取得開課訂單資料========
  getSubjectOrder = () => {
    console.log("this props:", this.props.subject_sid);
    fetch(
      "http://localhost:5000/handmade/teacher/order/" + this.props.subject_sid,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        let Data = data[0];
        // console.log("subject data:", Data[0]);
        console.log("total:", Data[0].OrderTotal); //報名人數
        this.setState(
          {
            orderPeople: Data[0].OrderTotal
          },
          () => {
            console.log(this.state.orderPeople);
          }
        );
      });
  };

  // ========取得開課資料========
  getSubjectInfo = () => {
    console.log("this props:", this.props.subject_sid); //開課編號
    fetch(
      "http://localhost:5000/handmade/teacher/subject/" +
        this.props.subject_sid,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        let Data = data;
        console.log("subject data:", Data);
        this.setState(
          {
            subject_name: Data.subject_name,
            subject_feature: Data.subject_feature,
            suject_date: Data.subject_date,
            subject_spend_time: Data.subject_spend_time,
            subject_address: Data.subject_address,
            subject_price: Data.subject_price,
            subject_img: Data.subject_img,
            last_people: Data.subject_number
          },
          () => {
            console.log(Data);
            console.log("last_people:", this.state.last_people);
            // console.log("teacher整包第一筆:", this.state.teacherArr1);
          }
        );
      });
  };

  // 呼叫orderInfo
  showOrder = () => {
    console.log(this.state.showOrder);
    this.setState(
      {
        showOrder: !this.state.showOrder
      },
      () => {
        console.log(this.state.showOrder);
      }
    );
  };

  render() {
    // const shareUrl = "http://github.com";
    const title = "Handmade";
    // console.log(this.props.match.params.subject_img)
    console.log("this props:", this.props.subject_sid);
    const iconZone = {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#F7ECEB",
      marginRight: "20px",
      marginLeft: "-8%"
    };
    const infoIcon = {
      width: "25px",
      height: "25px",
      margin: "8px"
    };
    return (
      <>
        <div className="background_first">
          <div className="subject-page d-flex">
            <div className="subject-page-left">
              {/* 報名表 */}
              {/* {this.state.showOrder === true ? (
                <OrderInfo subject_sid={this.props.subject_sid} />
              ) : null} */}
              <OrderInfo
                isShowOrderNow={this.state.showOrder}
                subject_sid={this.props.subject_sid}
              />
            </div>
            {/* 手機版開課圖 */}
            <div className="small-img">
              <img
                className="slider-image"
                src={`/image/${this.state.subject_img}`}
              />
            </div>
            {/* 開課圖 */}
            <div className="subject-img">
              <img
                className="slider-image"
                src={`/image/${this.state.subject_img}`}
              />
            </div>
            <div className="shadow-sub1"></div>
            {/* 文字裝飾區塊 */}
            <div className="wordBox">
              <div className="wordBoxUp">
                <div className="wordHalfUp">{this.state.subject_name}</div>
              </div>
              <div className="wordBoxDown">
                <div className="wordHalfDown">{this.state.subject_name}</div>
              </div>
            </div>
            <div className="subject-page-center">
              {/* 連結至老師頁面 */}
              <div className="teacher-link">
                <Link to="/handmade/teacher">Teacher List</Link>
              </div>
              <div className="subject-name">
                <div className="subject-name-box">
                  <p>{this.state.subject_name}</p>
                  <div className="color-section"></div>
                </div>
              </div>

              <div className="subject-info">
                <div className="subject-info-box d-flex">
                  {/* 開課日期 */}
                  <div className="info-box">
                    <MdDateRange style={infoIcon} />
                    <p>{this.state.suject_date}</p>
                  </div>
                  <div className="info-box">
                    <MdSchedule style={infoIcon} />
                    <p>{this.state.subject_spend_time}</p>
                  </div>
                  <div className="info-box">
                    <MdMap style={infoIcon} />
                    <p>Taipei</p>
                  </div>
                  <div className="info-box">
                    <MdPerson style={infoIcon} />
                    {/* 剩餘人數 */}
                    <p>{this.state.last_people - this.state.orderPeople}</p>
                  </div>
                </div>
              </div>
              {/* 分享按鈕 */}
              <div className="shareFacebook">
              <FacebookShareButton
                url="http://127.0.0.1/handmade/teacher/"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
              <div className="shareLine">
                <LineShareButton
                  url="http://localhost:3000/handmade/teacher/"
                  className="Demo__some-network__share-button"
                  title={title}
                >
                  <LineIcon size={32} round />
                </LineShareButton>
              </div>

              <div className="subject-detail">
                <div className="subject-detail-box d-flex">
                  <div className="subject-address d-flex">
                    <figure
                      style={iconZone}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <MdLocationOn
                        style={{ color: "#EBD0CE", fontSize: "25px" }}
                      />
                    </figure>
                    {/* 開課地址 */}
                    <p>{this.state.subject_address}</p>
                  </div>
                  <div className="subject-feature d-flex">
                    <figure
                      style={iconZone}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <FaQuoteLeft
                        style={{ color: "#EBD0CE", fontSize: "20px" }}
                      />
                    </figure>
                    {/* 開課特色 */}
                    <p>{this.state.subject_feature}</p>
                  </div>
                  <div className="subject-price d-flex">
                    {/* 開課價格 */}
                    <p>
                      <span>$</span>
                      {this.state.subject_price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="book-btn-box">
                <button
                  onClick={this.showOrder}
                  className={
                    this.state.showOrder === true ? "active-now" : "book-btn"
                  }
                >
                  Book
                </button>
              </div>
            </div>
            {/* <sidebar className="order-sidebar"></sidebar> */}
            <div className="subject-page-right">
              <p className="bg-name">{this.state.subject_name}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Subject;
