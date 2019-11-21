import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
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
      showOrder: false
    };
  }

  componentDidMount() {
    this.getSubjectInfo();
  }
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
        let Data = data[0];
        console.log("subject data:", Data);
        this.setState(
          {
            subject_name: Data[0].subject_name,
            subject_feature: Data[0].subject_feature,
            suject_date: Data[0].subject_date,
            subject_spend_time: Data[0].subject_spend_time,
            subject_address: Data[0].subject_address,
            subject_price: Data[0].subject_price,
            subject_img:Data[0].subject_img
          },
          () => {
            // console.log(Data[1].subject_spend_time);
            // console.log("date:", Data[0].subject_date);
            // console.log("teacher整包第一筆:", this.state.teacherArr1);
          }
        );
      });
  };

  // 呼叫orderInfo
  showOrder = () => {
    this.setState({
      showOrder: !this.state.showOrder
    });
    console.log(!this.state.showOrder);
  };

  render() {
    // console.log(this.props.match.params.subject_img)
    console.log("this props:", this.props.subject_sid); 
    const iconZone = {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      backgroundColor: "#F7ECEB",
      marginRight: "30px",
      marginLeft: "-8%"
    };
    return (
      <>
        <div className="subject-page d-flex">
          {/* <div className="subject-page-left"></div> */}

          {/* 報名表 */}
          {/* <OrderInfo/> */}
          {this.state.showOrder === true ? (
            <OrderInfo subject_sid={this.props.subject_sid} />
          ) : null}
          {/* 開課圖 */}
          {/* <div className="subject-img">
            <img
              className="slider-image"
              src={`/images/${this.state.subject_img}`}
            />
          </div> */}
          <div className="subject-page-center">
            <div className="subject-name">
              <div className="subject-name-box">
                <p>{this.state.subject_name}</p>
                <div className="color-section"></div>
              </div>
            </div>

            <div className="subject-info ">
              <div className="subject-info-box d-flex">
                {/* 開課日期 */}
                <div>
                  <MdDateRange
                    style={{
                      width: 30 + "px",
                      height: 30 + "px",
                      margin: 8 + "px"
                    }}
                  />
                  <p>{this.state.suject_date}</p>
                </div>
                <div>
                  <MdSchedule
                    style={{
                      width: 30 + "px",
                      height: 30 + "px",
                      margin: 8 + "px"
                    }}
                  />
                  <p>{this.state.subject_spend_time}</p>
                </div>
                <div>
                  <MdMap
                    style={{
                      width: 30 + "px",
                      height: 30 + "px",
                      margin: 8 + "px"
                    }}
                  />
                  <p>Taipei</p>
                </div>
                <div>
                  <MdPerson
                    style={{
                      width: 30 + "px",
                      height: 30 + "px",
                      margin: 8 + "px"
                    }}
                  />
                  剩餘人數
                  <p>{}</p>
                </div>
              </div>
            </div>

            <div className="subject-detail">
              <div className="subject-detail-box d-flex">
                <div className="subject-address d-flex">
                  <figure
                    style={iconZone}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <MdLocationOn
                      style={{ color: "#EBD0CE", fontSize: "30px" }}
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
                      style={{ color: "#EBD0CE", fontSize: "30px" }}
                    />
                  </figure>
                  {/* 開課特色 */}
                  <p>{this.state.subject_feature}</p>
                </div>
                <div className="subject-price d-flex">
                  {/* 開課價格 */}
                  <p style={{ maxWidth: "150px" }}>
                    <span>$</span>
                    {this.state.subject_price}
                  </p>
                </div>
              </div>
            </div>
            <div className="book-btn-box">
              <Button className="book-btn" onClick={this.showOrder}>
                book
              </Button>
            </div>
          </div>
          {/* <sidebar className="order-sidebar"></sidebar> */}
          <div className="subject-page-right"></div>
        </div>
      </>
    );
  }
}
export default Subject;
