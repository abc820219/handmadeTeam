import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "./signup.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpOtherCard from "./SignUpOtherCard";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signuplist: [1, 2, 3],
      username: "",
      phone: "",
      email: "",
      othersPeopleNumber: "",
      ownerInfo: ""
    };
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


  // 改變文字onChange功能
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state.username);
    });
    // console.log(this.state.username)  <= 會慢一步，錯誤寫法
  };



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
              <div>會員</div>
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
          {/* 報名表內容 */}
          <div className="sign-body">
            <div className="signup-from">
              <label>MAIN BOOKER</label>
              <div className="form-group">
                <div className="form-line">
                  <input
                    type=""
                    className="input-short"
                    placeholder="UserName"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />
                  <input
                    type=""
                    className="input-short"
                    placeholder="Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-line">
                  <input
                    type=""
                    className="input-long"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                  />
                  {/* {console.log(this.state.email)} */}
                </div>
              </div>
              {this.state.signuplist.map((index, item) => (
                <SignUpOtherCard key={index} />
              ))}
            </div>
            <sidebar className="order-sidebar"></sidebar>
          </div>
        </div>
      </>
    );
  }
}
export default SignUp;
