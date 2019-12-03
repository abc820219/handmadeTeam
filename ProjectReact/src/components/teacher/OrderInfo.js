import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../../commom/scss/teacher/OrderInfo.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAlert } from "react-alert";

const AlerTeacher = props => {
  const alert = useAlert();
  if (props.step == 1) {
    alert.success("報名成功");
  }
  if (props.step == 2) {
    alert.error("請填寫完整資料");
  }
  return <></>;
};

class OrderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject_name: "",
      subject_number: "",
      people: "1",
      // 最大可報名人數
      maxPeople: "",
      step: false,
      usersid: ""
    };
  }
  componentDidMount() {
    // this.getApiData();
    console.log("33" + this.state.step);
    this.getSubjectInfo();
    this.getSubjectOrder();
    this.setState({ usersid: localStorage.getItem("member_id") }, () => {
      console.log(this.state.usersid);
    });
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
        let Data = data;
        console.log("subject data:", Data);
        this.setState(
          {
            subject_name: Data.subject_name,
            subject_date: Data.subject_date,
            subject_address: Data.subject_address,
            subject_price: Data.subject_price,
            subject_img: Data.subject_img,
            subject_number: Data.subject_number
          },
          () => {
            console.log(Data.subject_number); //開課人數
          }
        );
      });
  };

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
        console.log("total:", Data[0].OrderTotal);
        this.setState(
          {
            orderPeople: Data[0].OrderTotal
          },
          () => {
            console.log(this.state.orderPeople); //總報名人數
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
        this.state.people >= this.state.subject_number - this.state.orderPeople
          ? this.state.subject_number - this.state.orderPeople
          : this.state.people * 1 + 1
      // totalPrice:this.state.people*this.state.subjectPrice
    });
    console.log(this.state.subject_number - this.state.orderPeople);
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
  handleChange = e => {
    // 判斷名字英文或中文都可
    let regex = /^[u4E00-\u9FA5]+$/;
    let re = /^09[0-9]{8}$/;
    let value = e.target.value;
    if (!(regex.test(value) || value === "")) return false;
    this.setState({ [e.target.name]: e.target.value }, () => {
      // console.log("order_sid:",localStorage.getItem('member_id'))
      console.log("subject_sid:", this.props.subject_sid);
      console.log("username:", this.state.username);
      console.log("phone:", this.state.phone);
    });
    // console.log(this.state.username)  <= 會慢一步，錯誤寫法
  };

  // ------------post API 上傳報名資料------------
  //post表單到資料庫
  postMeberInfo = () => {
    // let usersid = localStorage.getItem("member_id");
    //(在Application裡看)抓localStorage裡key為member_id的value

    // console.log("order_sid:", usersid);
    console.log("subject_sid:", this.props.subject_sid);
    console.log("username:", this.state.username);
    console.log("phone:", this.state.phone);
    console.log("people:", this.state.people);
    console.log(this.state.subject_price * this.state.people);
    console.log("166" + this.state.step);
    let postData = {
      usersid: this.state.usersid, //會員訂單編號
      subject_sid: this.props.subject_sid,
      username: this.state.username,
      phone: this.state.phone,
      people: this.state.people,
      totalPrice: this.state.subject_price * this.state.people //訂單總價
    };
    if (
      this.state.username !== "" &&
      this.state.phone !== "" &&
      this.state.username !== undefined &&
      this.state.phone !== undefined
    ) {
      fetch("http://localhost:5000/handmade/teacher/subject/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
        .then(response => {
          console.log(response);
          // this.setState({ step: 1 });
          return response.json();
        })
        .then(data => {
          console.log(data);
          console.log("成功");
          this.setState({ step: 1 }, () => {
            this.setState({ step: false });
          });
        })
        .catch(error => {});
    } else {
      this.setState({ step: 2 }, () => {
        console.log("失敗");
        this.setState({ step: false });
      });
      console.log("206" + this.state.step);
    }
  };

  render() {
    // console.log("props:", this.props.subject_sid);
    // console.log(this.state.username);
    return (
      <>
        <div className="d-flex">
          <sidebar
            className={
              this.props.isShowOrderNow ? "booking-sidebar" : "closeOrder"
            }
          >
            <div className="subject-header"></div>
            {/* 開課圖 */}
            <div className="subject-smallimg">
              <img
                className="sub-img"
                src={`/image/${this.state.subject_img}`}
              ></img>
            </div>
            <div className="subject-data">
              <div className="order-subject-name">
                {this.state.subject_name}
              </div>
              <div className="order-subject-date">
                {this.state.subject_date}
              </div>
              <div className="user-box">
                <label>報名人 :</label>
                <input
                  className="input-box"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                  placeholder="Enter UserName"
                />
              </div>
              <div className="phone-box">
                <label>Phone :</label>
                <input
                  className="input-box"
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={e => this.handleChange(e)}
                  placeholder="Enter Phone"
                />
              </div>
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
                <span className="price-right">{this.state.people}</span>
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
                Submit
              </button>
            </div>
          </sidebar>
        </div>
        {this.state.step && <AlerTeacher step={this.state.step} />}
      </>
    );
  }
}
export default OrderInfo;
