import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  }
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <FacebookLogin
          appId="2455924711363188"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          textButton="FACEBOOK-LOGIN"
        />
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2455924711363188"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          textButton="FACEBOOK-LOGIN"
        />
      );
    }
    return <div className="mt-5">{fbContent}</div>;
  }
  responseFacebook = response => {
    console.log(response);
    //發一個fetch拿資料庫的會員token_id
    // if (response.userID != 原本資料庫裡的) {
    //不等於的話發一個fetch到後端新增資料
    //新增完資料把資料存到session並且判斷session有無資料然後登入
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    console.log(this.state.picture);
    // } else {
    //   console.log("登入");
    //如果token_id相同把資料抓出來並且存到session然後登入
    // }D
  };

  // componentClicked = () => console.log("clicked");
}
export default Facebook;
