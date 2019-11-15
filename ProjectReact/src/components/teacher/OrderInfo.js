import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "../../commom/scss/teacher/OrderInfo.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class OrderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getApiData();
  }

  // ------ get API 取得報名人數、載入報名資料 ------
  getApiData = () => {
    fetch("http://localhost:3000/teacher/")
      .then(res => res.json())
      .then(member => {
        this.setState({
          signuplist: [],
          ownerInfo: ""
        });
      });
  };

  // // 改變文字onChange功能
  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value }, () => {
  //     console.log(this.state.username);
  //   });
  //   // console.log(this.state.username)  <= 會慢一步，錯誤寫法
  // };

  // ------ post API 上傳報名資料 ------
  postMeberInfo = () => {
    let postData = {
      username: this.state.username,
      phone: this.state.phone,
      email: this.state.email
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
    console.log(this.state.username);
    return (
      <>
        <div className="d-flex">
          <sidebar className="booking-sidebar">
            <div className="subject-header">header</div>
            <div className="subject-img">
              <img className="sub-img" src=""></img>
            </div>
            <div className="subject-data">
              <div>課程名稱xxx</div>
              <div>開課日期xxx</div>
              <div>地區xxx</div>
              <div>會員xxx</div>
            </div>
            <div className="price-info">
              <div className="price-info-line">
                <span className="price-left">課程價格</span>
                <span className="price-right">123</span>
              </div>
              <div className="price-info-line">
                <span className="price-left">參加人數</span>
                <span className="price-right">99</span>
              </div>
              <div className="price-info-total">$1,998</div>
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
