import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "../../commom/scss/teacher/OrderInfo.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class OrderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject_name: "",
      people: "1",
      // 最大可報名人數
      maxPeople: "4",
    };
  }

  componentDidMount() {
    // this.getApiData();
    this.getSubjectInfo();
  }

  // ------------ 取得開課資料------------
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
            subject_date: Data[0].subject_date,
            subject_address: Data[0].subject_address,
            subject_price: Data[0].subject_price,
            subject_img: Data[0].subject_img
          },
          () => {
           console.log(Data[0].subject_date);
          }
        );
      });
  };

  // ------ get API 取得報名人數、載入報名資料 ------
  // getApiData = () => {
  //   fetch("http://localhost:3000/teacher/")
  //     .then(res => res.json())
  //     .then(member => {
  //       this.setState({
  //         // signuplist: [],
  //         ownerInfo: ""
  //       });
  //     });
  // };

  // ------------  報名人數增加處理------------
  plus = () => {
    // console.log("plus");
    this.setState({
      people:
        this.state.people >= this.state.maxPeople
          ? this.state.maxPeople
          : this.state.people * 1 + 1
      // totalPrice:this.state.people*this.state.subjectPrice
    });
    // console.log(this.state.people * 1 + 1);
  };

  //------------ 報名人數減少處理------------
  minus = () => {
    // console.log("minus");
    this.setState({
      people: this.state.people > 1 ? this.state.people - 1 : 1
      // 會差一步!!
      // totalPrice: this.state.people * this.state.subjectPrice
    });
  };

  // // 改變文字onChange功能
  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value }, () => {
  //     console.log(this.state.username);
  //   });
  //   // console.log(this.state.username)  <= 會慢一步，錯誤寫法
  // };

  // ------------post API 上傳報名資料------------
  postMeberInfo = () => {
    let postData = {
      username: this.state.username,
      phone: this.state.phone,
      pepple:this.state.people
    };
    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: postData
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        alert("上傳成功");
      });
  };

  render() {
    console.log("props:", this.props.subject_sid);
    // console.log(this.state.username);
    return (
      <>
        <div className="d-flex">
          <sidebar className="booking-sidebar">
            <div className="subject-header"></div>
            {/* 開課圖 */}
            <div className="subject-smallimg">
              <img className="sub-img" src={`/image/${this.state.subject_img}`}></img>
            </div>
            <div className="subject-data">
              <div className="order-subject-name">
                {this.state.subject_name}
              </div>
              <div className="order-subject-date">
                {this.state.subject_date}
              </div>
              <div className="order-subject-address">{this.state.subject_address}</div>
              <div>會員xxx</div>
            </div>
            <div className="price-info">
              <div className="price-info-line">
                <span className="price-left">課程價格</span>
                <span className="price-right">
                  <span>$</span>
                  {this.state.subject_price}
                </span>
              </div>
              <div className="price-info-line">
                <span className="price-left">報名人數</span>
                <button className="minus" onClick={this.minus}>
                  -
                </button>
                <span className="price-right">
                  {this.state.people}
                </span>
                <button className="plus" onClick={this.plus}>
                  +
                </button>
              </div>
              <div className="price-info-total">
                {/* 總價 */}
                <span>$</span>
                {this.state.subject_price * this.state.people}
              </div>
            </div>
            <div className="subject-btn">
              <button className="order-btn" onClick={this.postMeberInfo}>
                order
              </button>
            </div>
          </sidebar>
        </div>
      </>
    );
  }
}
export default OrderInfo;
