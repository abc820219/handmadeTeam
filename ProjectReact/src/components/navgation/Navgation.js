import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../commom/scss/handmade/nav.css";
import "../../commom/scss/handmade/logoanimation.css";
import "../../commom/scss/handmade/info.css";
import "../../commom/scss/handmade/array.scss";
import "../../commom/scss/handmade/check.scss";

import $ from "jquery";

class Navgational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpic1: true,
      showpic2: false,
      showpic3: false,
      showpic4: false,
      showpic5: true,
      showpic6: false,
      showpic7: false,
      showpic8: false,
      showpic9: true,
      showpic10: false,
      showpic11: false,
      showpic12: false,
      showclass: false,
      showclass2: false,
      showclass3: false
    };
    this.handleClickshowpic1 = this.handleClickshowpic1.bind(this);
    this.handleClickshowpic2 = this.handleClickshowpic2.bind(this);
    this.handleClickshowpic3 = this.handleClickshowpic3.bind(this);
    this.handleClickshowpic4 = this.handleClickshowpic4.bind(this);
    this.handleClickshowpic5 = this.handleClickshowpic5.bind(this);
    this.handleClickshowpic6 = this.handleClickshowpic6.bind(this);
    this.handleClickshowpic7 = this.handleClickshowpic7.bind(this);
    this.handleClickshowpic8 = this.handleClickshowpic8.bind(this);
    this.handleClickshowpic9 = this.handleClickshowpic9.bind(this);
    this.handleClickshowpic10 = this.handleClickshowpic10.bind(this);
    this.handleClickshowpic11 = this.handleClickshowpic11.bind(this);
    this.handleClickshowpic12 = this.handleClickshowpic12.bind(this);
    this.handleClickshowclass = this.handleClickshowclass.bind(this);
    this.handleClickshowclass2 = this.handleClickshowclass2.bind(this);
    this.handleClickshowclass3 = this.handleClickshowclass3.bind(this);
  }
  handleClickshowclass() {
    this.setState({
      showclass: true
    });
  }
  handleClickshowclass2() {
    this.setState({
      showclass2: true
    });
  }
  handleClickshowclass3() {
    this.setState({
      showclass3: true
    });
  }
  handleClickshowpic1() {
    this.setState({
      showpic1: true,
      showpic2: false,
      showpic3: false,
      showpic4: false
    });
  }
  handleClickshowpic2() {
    this.setState({
      showpic1: false,
      showpic2: true,
      showpic3: false,
      showpic4: false
    });
  }
  handleClickshowpic3() {
    this.setState({
      showpic1: false,
      showpic2: false,
      showpic3: true,
      showpic4: false
    });
  }
  handleClickshowpic4() {
    this.setState({
      showpic1: false,
      showpic2: false,
      showpic3: false,
      showpic4: true
    });
  }
  handleClickshowpic5() {
    this.setState({
      showpic5: true,
      showpic6: false,
      showpic7: false,
      showpic8: false
    });
  }
  handleClickshowpic6() {
    this.setState({
      showpic5: false,
      showpic6: true,
      showpic7: false,
      showpic8: false
    });
  }
  handleClickshowpic7() {
    this.setState({
      showpic5: false,
      showpic6: false,
      showpic7: true,
      showpic8: false
    });
  }
  handleClickshowpic8() {
    this.setState({
      showpic5: false,
      showpic6: false,
      showpic7: false,
      showpic8: true
    });
  }
  handleClickshowpic9() {
    this.setState({
      showpic9: true,
      showpic10: false,
      showpic11: false,
      showpic12: false
    });
  }
  handleClickshowpic10() {
    this.setState({
      showpic9: false,
      showpic10: true,
      showpic11: false,
      showpic12: false
    });
  }
  handleClickshowpic11() {
    this.setState({
      showpic9: false,
      showpic10: false,
      showpic11: true,
      showpic12: false
    });
  }
  handleClickshowpic12() {
    this.setState({
      showpic9: false,
      showpic10: false,
      showpic11: false,
      showpic12: true
    });
  }

  componentDidMount() {
    
    $(function () {
      $(".fancy-button").mousedown(function () {
        $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
          $(this).removeClass('active');
        })
        $(this).addClass("active");
        $(".lighttext2").removeClass("displaynone");
        var NewStringValue = $(".lighttext2").text();
        let obj = {
          小蛋糕:1,
          馬卡龍:2,
          蝴蝶餅:3,
          小甜點:4,
          鹹蛋糕:5,
          檸檬塔:6,
          抹茶塔:7
        }
        localStorage.setItem('dessert_prefer',JSON.stringify(obj[NewStringValue]));
        // if (this.state.showpic1 && this.state.showpic5) {

        // }

      });
    });




    document.querySelector(".toggleClass").onclick = function () {
      document.querySelector(".theTitle").classList.toggle("active");
      document.querySelector(".toggleClass").classList.toggle("moverout_logo");
      document
        .querySelector(".background_first")
        .classList.toggle("moverout_bg");
      document.querySelector(".htmlNoPages").classList.remove("remover_1");
      document.querySelector(".right").classList.add("remover_2");
    };

    document.querySelector(".howtouseinfo").onclick = function () {
      document.querySelector(".coverright").classList.remove("getoutR");

      document.querySelector(".first-word").classList.add("loadIn-1");
      document.querySelector(".last-word").classList.add("loadIn-2");
      document.querySelector(".last-last-word").classList.add("loadIn-3");
      document.querySelector(".first-word-1").classList.add("loadIn-4");
      document.querySelector(".last-word-1").classList.add("loadIn-5");
      document.querySelector(".last-last-word-1").classList.add("loadIn-6");

      setTimeout(function () {
        document.querySelector(".coverright").classList.add("getoutR");
        document.querySelector(".arrow").classList.remove("appenhoho");

        document.querySelector(".coverleft").classList.remove("getoutL");
      }, 9500);
    };
    document.querySelector(".arrow").onclick = function () {
      document.querySelector(".coverleft").classList.add("getoutL");
      document.querySelector(".arrow").classList.add("appenhoho");
      document.querySelector(".first-word").classList.remove("loadIn-1");
      document.querySelector(".last-word").classList.remove("loadIn-2");
      document.querySelector(".last-last-word").classList.remove("loadIn-3");
      document.querySelector(".first-word-1").classList.remove("loadIn-4");
      document.querySelector(".last-word-1").classList.remove("loadIn-5");
      document.querySelector(".last-last-word-1").classList.remove("loadIn-6");
    };
      // document.querySelector(".frame_lightbox").onMouseEnter = function() {
      //   let textValue = document.querySelector(".lightText2").value;
      //   console.log(textValue);
      // }
  }

  render() {
    return (
      <>
        <div className="background_first"></div>
        <div className="theTitle active">
          <div className="left_logo">
            <h1>
              <img src="/image/handmade/LOGOLEFT.svg" />
            </h1>
          </div>
          <span className="separator"></span>
          <div className="right_logo">
            <p>HANDMAKE</p>
            <p className="logo-letter-spacing">BAKETIME</p>
          </div>
        </div>
        {/* <button className="toggleClass">Toggle</button> */}

        <div class="toggleClass">
          <svg
            height="90"
            width="270"
            xmlns="http://www.w3.org/2000/svg"
            class="down_logo"
          >
            <rect class="shape" height="90" width="270" />
          </svg>
          <div class="text_hover">ENTER</div>
        </div>

        <div
          className={
            this.state.showclass3 ? "lightbox " : "lightbox displaynone"
          }
        >
          <div
            className={
              this.state.showclass
                ? "frame_lightbox "
                : "frame_lightbox displaynone"
            }
          >
            <div
              className={
                this.state.showclass ? "lighttext " : "lighttext displaynone"
              }

            >
              您適合的烘焙為
            </div>
            <div
              className=
              "lighttext2 displaynone"
            >
              {this.state.showpic1 && this.state.showpic5  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic1 && this.state.showpic5 && this.state.showpic10? "馬卡龍" : ""}
              {this.state.showpic1 && this.state.showpic5 && this.state.showpic11? "蝴蝶餅" : ""}
              {this.state.showpic1 && this.state.showpic5 && this.state.showpic12? "小甜點" : ""}


              {this.state.showpic1 && this.state.showpic6  && this.state.showpic9 ? "鹹蛋糕" : ""}
              {this.state.showpic1 && this.state.showpic6 && this.state.showpic10? "小蛋糕" : ""}
              {this.state.showpic1 && this.state.showpic6 && this.state.showpic11? "馬卡龍" : ""}
              {this.state.showpic1 && this.state.showpic6 && this.state.showpic12? "檸檬塔" : ""}


              {this.state.showpic1 && this.state.showpic7  && this.state.showpic9 ? "抹茶塔" : ""}
              {this.state.showpic1 && this.state.showpic7 && this.state.showpic10? "馬卡龍" : ""}
              {this.state.showpic1 && this.state.showpic7 && this.state.showpic11? "蝴蝶餅" : ""}
              {this.state.showpic1 && this.state.showpic7 && this.state.showpic12? "鹹蛋糕" : ""}


              {this.state.showpic1 && this.state.showpic8  && this.state.showpic9 ? "檸檬塔" : ""}
              {this.state.showpic1 && this.state.showpic8 && this.state.showpic10? "馬卡龍" : ""}
              {this.state.showpic1 && this.state.showpic8 && this.state.showpic11? "小甜點" : ""}
              {this.state.showpic1 && this.state.showpic8 && this.state.showpic12? "小蛋糕" : ""}



              {this.state.showpic2 && this.state.showpic5  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic2 && this.state.showpic5 && this.state.showpic10? "抹茶塔" : ""}
              {this.state.showpic2 && this.state.showpic5 && this.state.showpic11? "蝴蝶餅" : ""}
              {this.state.showpic2 && this.state.showpic5 && this.state.showpic12? "檸檬塔" : ""}


              {this.state.showpic2 && this.state.showpic6  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic2 && this.state.showpic6 && this.state.showpic10? "小甜點" : ""}
              {this.state.showpic2 && this.state.showpic6 && this.state.showpic11? "蝴蝶餅" : ""}
              {this.state.showpic2 && this.state.showpic6 && this.state.showpic12? "馬卡龍" : ""}


              {this.state.showpic2 && this.state.showpic7  && this.state.showpic9 ? "鹹蛋糕" : ""}
              {this.state.showpic2 && this.state.showpic7 && this.state.showpic10? "蝴蝶餅" : ""}
              {this.state.showpic2 && this.state.showpic7 && this.state.showpic11? "小甜點" : ""}
              {this.state.showpic2 && this.state.showpic7 && this.state.showpic12? "馬卡龍" : ""}


              {this.state.showpic2 && this.state.showpic8  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic2 && this.state.showpic8 && this.state.showpic10? "抹茶塔" : ""}
              {this.state.showpic2 && this.state.showpic8 && this.state.showpic11? "小甜點" : ""}
              {this.state.showpic2 && this.state.showpic8 && this.state.showpic12? "檸檬塔" : ""}


              {this.state.showpic3 && this.state.showpic5  && this.state.showpic9 ? "鹹蛋糕" : ""}
              {this.state.showpic3 && this.state.showpic5 && this.state.showpic10? "小蛋糕" : ""}
              {this.state.showpic3 && this.state.showpic5 && this.state.showpic11? "馬卡龍" : ""}
              {this.state.showpic3 && this.state.showpic5 && this.state.showpic12? "蝴蝶餅" : ""}


              {this.state.showpic3 && this.state.showpic6  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic3 && this.state.showpic6 && this.state.showpic10? "抹茶塔" : ""}
              {this.state.showpic3 && this.state.showpic6 && this.state.showpic11? "小蛋糕" : ""}
              {this.state.showpic3 && this.state.showpic6 && this.state.showpic12? "蝴蝶餅" : ""}


              {this.state.showpic3 && this.state.showpic7  && this.state.showpic9 ? "小甜點" : ""}
              {this.state.showpic3 && this.state.showpic7 && this.state.showpic10? "馬卡龍" : ""}
              {this.state.showpic3 && this.state.showpic7 && this.state.showpic11? "抹茶塔" : ""}
              {this.state.showpic3 && this.state.showpic7 && this.state.showpic12? "檸檬塔" : ""}


              {this.state.showpic3 && this.state.showpic8  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic3 && this.state.showpic8 && this.state.showpic10? "檸檬塔" : ""}
              {this.state.showpic3 && this.state.showpic8 && this.state.showpic11? "馬卡龍" : ""}
              {this.state.showpic3 && this.state.showpic8 && this.state.showpic12? "抹茶塔" : ""}

              {this.state.showpic4 && this.state.showpic5  && this.state.showpic9 ? "檸檬塔" : ""}
              {this.state.showpic4 && this.state.showpic5 && this.state.showpic10? "鹹蛋糕" : ""}
              {this.state.showpic4 && this.state.showpic5 && this.state.showpic11? "抹茶塔" : ""}
              {this.state.showpic4 && this.state.showpic5 && this.state.showpic12? "小蛋糕" : ""}


              {this.state.showpic4 && this.state.showpic6  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic4 && this.state.showpic6 && this.state.showpic10? "馬卡龍" : ""}
              {this.state.showpic4 && this.state.showpic6 && this.state.showpic11? "蝴蝶餅" : ""}
              {this.state.showpic4 && this.state.showpic6 && this.state.showpic12? "抹茶塔" : ""}


              {this.state.showpic4 && this.state.showpic7  && this.state.showpic9 ? "檸檬塔" : ""}
              {this.state.showpic4 && this.state.showpic7 && this.state.showpic10? "鹹蛋糕" : ""}
              {this.state.showpic4 && this.state.showpic7 && this.state.showpic11? "蝴蝶餅" : ""}
              {this.state.showpic4 && this.state.showpic7 && this.state.showpic12? "小蛋糕" : ""}


              {this.state.showpic4 && this.state.showpic8  && this.state.showpic9 ? "小蛋糕" : ""}
              {this.state.showpic4 && this.state.showpic8 && this.state.showpic10? "抹茶塔" : ""}
              {this.state.showpic4 && this.state.showpic8 && this.state.showpic11? "馬卡龍" : ""}
              {this.state.showpic4 && this.state.showpic8 && this.state.showpic12? "檸檬塔" : ""}


            </div>
            <div class="fancy-button">
              <div class="left-frills frills margin-top-frills"></div>
              <div class="button">FI ND!</div>
              <div class="right-frills frills margin-top-frills"></div>
            </div>
            <Link to="/handmade" style={{textDecoration:"none"}}>
              <div
                className={
                  this.state.showclass
                    ? "lightimage "
                    : "lightimage displaynone"
                }
              >
                <img src="/image/handmade/LOGO1.svg" />
                <div className="button2_handmade">START USE!</div>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={
            this.state.showclass
              ? "outside moveout1 animationDisplayNone"
              : "outside"
          }
        >
          <div className="htmlNoPages remover_1">
            <div className="howtouseinfo">
              <div className="howtouse">HOW TO USE</div>
              <div className="howtouseI">
                <p>i</p>
              </div>
            </div>

            <div className="left">
              <div className="coverleft getoutL">
                <div class="container-word-1-1 ">
                  <h1>
                    <span class="first-word-1">選取後</span>{" "}
                  </h1>
                </div>
                <div class="container-word-2-2">
                  <h1>
                    {" "}
                    <span class="last-word-1">請點擊右方圖像</span>{" "}
                  </h1>
                </div>
                <div class="container-word-3-3">
                  <h1>
                    {" "}
                    <span class="last-last-word-1">可進行下一步驟</span>{" "}
                  </h1>
                </div>
                <span class="arrow appenhoho">back</span>
              </div>
              {/* <img src="/image/assets/PIC_1.svg" id="PIC_1" className="gwd-img-hdbr" /> */}
              <img
                src="/image/assets/STORE_3.svg"
                id="STORE_3"
                className={
                  this.state.showpic1
                    ? "gwd-img-h17w box"
                    : "gwd-img-h17w close box"
                }
                onClick={this.handleClickshowpic1}
              />
              <img
                src="/image/assets/STORE_4.svg"
                id="STORE_4"
                className={
                  this.state.showpic2
                    ? "gwd-img-x5tz box"
                    : "gwd-img-x5tz close box"
                }
                onClick={this.handleClickshowpic2}
              />
              <img
                src="/image/assets/STORE_1.svg"
                id="STORE_1"
                className={
                  this.state.showpic3
                    ? "gwd-img-1j6y gwd-img-iqv3 box"
                    : "gwd-img-1j6y gwd-img-iqv3 close box"
                }
                onClick={this.handleClickshowpic3}
              />
              <img
                src="/image/assets/STORE_2_2.svg"
                id="STORE_2_2"
                className={
                  this.state.showpic4
                    ? "gwd-img-1ehw box"
                    : "gwd-img-1ehw close box"
                }
                onClick={this.handleClickshowpic4}
              />
              {/* <img src="/image/assets/PIC (10).svg" id="IMG_1" className="gwd-img-1o0g" /> */}
            </div>
            <div className="right">
              <div className="coverright getoutR">
                <div class="container-word-1 ">
                  <h1>
                    <span class="first-word">請從左邊選項中</span>{" "}
                  </h1>
                </div>
                <div class="container-word-2">
                  <h1>
                    {" "}
                    <span class="last-word">挑選一種</span>{" "}
                  </h1>
                </div>
                <div class="container-word-3">
                  <h1>
                    {" "}
                    <span class="last-last-word">你喜歡的類型</span>{" "}
                  </h1>
                </div>
              </div>

              <img
                src="/image/assets/STORE_3.svg"
                id="STORE_5"
                className={
                  this.state.showpic1
                    ? "gwd-img-1j6y gwd-img-1uiu boxappend click001"
                    : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                }
                onClick={this.handleClickshowclass}
              />

              <img
                src="/image/assets/STORE_4.svg"
                id="STORE_5"
                className={
                  this.state.showpic2
                    ? "gwd-img-1j6y gwd-img-1uiu  "
                    : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                }
                onClick={this.handleClickshowclass}
              />
              <img
                src="/image/assets/STORE_1.svg"
                id="STORE_5"
                className={
                  this.state.showpic3
                    ? "gwd-img-1j6y gwd-img-1uiu boxappend click001"
                    : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                }
                onClick={this.handleClickshowclass}
              />

              <img
                src="/image/assets/STORE_2_2.svg"
                id="STORE_5"
                className={
                  this.state.showpic4
                    ? "gwd-img-1j6y gwd-img-1uiu boxappend click001"
                    : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                }
                onClick={this.handleClickshowclass}
              />

              <img
                src="/image/assets/PIC (11).svg"
                id="IMG_2"
                className="gwd-img-12z5 gwd-gen-gafigwdanimation"
              />
              <img
                src="/image/assets/PIC (12).svg"
                id="IMG_3"
                className="gwd-img-1h9k gwd-gen-1xaugwdanimation"
              />
              <img
                src="/image/assets/PIC (13).svg"
                id="IMG_4"
                className="gwd-img-buxb gwd-gen-vnd1gwdanimation"
              />
              <img
                src="/image/assets/PIC (14).svg"
                id="IMG_5"
                className="gwd-img-oyzy gwd-gen-sck2gwdanimation"
              />
              <img
                src="/image/assets/PIC (15).svg"
                id="IMG_6"
                className="gwd-img-1ede gwd-gen-1wrrgwdanimation"
              />
              <img
                src="/image/assets/PIC (16).svg"
                id="IMG_7"
                className="gwd-img-nzwx gwd-gen-1dnigwdanimation"
              />
              <img
                src="/image/assets/PIC (17).svg"
                id="IMG_8"
                className="gwd-img-1tdb gwd-gen-1u9bgwdanimation"
              />
            </div>
          </div>
        </div>
        <div
          className={
            this.state.showclass
              ? `${
              this.state.showclass2
                ? "outside1 moveout1 animationDisplayNone"
                : "outside1"
              }`
              : "outside1 movein1"
          }
        >
          <div className="htmlNoPages1">
            <div className="howtouseinfo">
              <div className="howtouse">HOW TO USE</div>
              <div className="howtouseI">
                <p>i</p>
              </div>
              <div className="left">
                <div className="coverleft getoutL">
                  <div class="container-word-1-1 ">
                    <h1>
                      <span class="first-word-1">選取後</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-2-2">
                    <h1>
                      {" "}
                      <span class="last-word-1">請點擊右方圖像</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-3-3">
                    <h1>
                      {" "}
                      <span class="last-last-word-1">可進行下一步驟</span>{" "}
                    </h1>
                  </div>
                  <span class="arrow appenhoho">back</span>
                </div>
                {/* <img src="/image/assets/PIC_1.svg" id="PIC_1" className="gwd-img-hdbr" /> */}
                <img
                  src="/image/assets/PEOPLE_1.svg"
                  id="STORE_3"
                  className={
                    this.state.showpic5
                      ? "gwd-img-h17w box"
                      : "gwd-img-h17w close box"
                  }
                  onClick={this.handleClickshowpic5}
                />
                <img
                  src="/image/assets/PEOPLE_2.svg"
                  id="STORE_4"
                  className={
                    this.state.showpic6
                      ? "gwd-img-x5tz box"
                      : "gwd-img-x5tz close box"
                  }
                  onClick={this.handleClickshowpic6}
                />
                <img
                  src="/image/assets/PEOPLE_3.svg"
                  id="STORE_1"
                  className={
                    this.state.showpic7
                      ? "gwd-img-1j6y gwd-img-iqv3 box"
                      : "gwd-img-1j6y gwd-img-iqv3 close box"
                  }
                  onClick={this.handleClickshowpic7}
                />
                <img
                  src="/image/assets/PEOPLE_4.svg"
                  id="STORE_2_2"
                  className={
                    this.state.showpic8
                      ? "gwd-img-1ehw box"
                      : "gwd-img-1ehw close box"
                  }
                  onClick={this.handleClickshowpic8}
                />
                {/* <img src="/image/assets/PIC (10).svg" id="IMG_1" className="gwd-img-1o0g" /> */}
              </div>

              <div className="right1 remover_2">
                <div className="coverright1 ">
                  <div class="container-word-1 ">
                    <h1>
                      <span class="first-word">請從左邊選項中</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-2">
                    <h1>
                      {" "}
                      <span class="last-word">挑選一種</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-3">
                    <h1>
                      {" "}
                      <span class="last-last-word">你喜歡的類型</span>{" "}
                    </h1>
                  </div>
                </div>

                <img
                  src="/image/assets/P1_1.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic5
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass2}
                />

                <img
                  src="/image/assets/P2_1.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic6
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass2}
                />
                <img
                  src="/image/assets/P3_1.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic7
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass2}
                />

                <img
                  src="/image/assets/P4_1.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic8
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass2}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={this.state.showclass2 ? "outside2" : "outside2 movein1"}
        >
          <div className="htmlNoPages1">
            <div className="howtouseinfo">
              <div className="howtouse">HOW TO USE</div>
              <div className="howtouseI">
                <p>i</p>
              </div>
              <div className="left">
                <div className="coverleft getoutL">
                  <div class="container-word-1-1 ">
                    <h1>
                      <span class="first-word-1">選取後</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-2-2">
                    <h1>
                      {" "}
                      <span class="last-word-1">請點擊右方圖像</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-3-3">
                    <h1>
                      {" "}
                      <span class="last-last-word-1">可進行下一步驟</span>{" "}
                    </h1>
                  </div>
                  <span class="arrow appenhoho">back</span>
                </div>
                {/* <img src="/image/assets/PIC_1.svg" id="PIC_1" className="gwd-img-hdbr" /> */}
                <img
                  src="/image/assets/CAKE1.svg"
                  id="STORE_3"
                  className={
                    this.state.showpic9
                      ? "gwd-img-h17w box"
                      : "gwd-img-h17w close box"
                  }
                  onClick={this.handleClickshowpic9}
                />
                <img
                  src="/image/assets/CAKE2.svg"
                  id="STORE_4"
                  className={
                    this.state.showpic10
                      ? "gwd-img-x5tz box"
                      : "gwd-img-x5tz close box"
                  }
                  onClick={this.handleClickshowpic10}
                />
                <img
                  src="/image/assets/CAKE3.svg"
                  id="STORE_1"
                  className={
                    this.state.showpic11
                      ? "gwd-img-1j6y gwd-img-iqv3 box"
                      : "gwd-img-1j6y gwd-img-iqv3 close box"
                  }
                  onClick={this.handleClickshowpic11}
                />
                <img
                  src="/image/assets/CAKE4.svg"
                  id="STORE_2_2"
                  className={
                    this.state.showpic12
                      ? "gwd-img-1ehw box"
                      : "gwd-img-1ehw close box"
                  }
                  onClick={this.handleClickshowpic12}
                />
                {/* <img src="/image/assets/PIC (10).svg" id="IMG_1" className="gwd-img-1o0g" /> */}
              </div>

              <div className="right1 remover_2">
                <div className="coverright1 ">
                  <div class="container-word-1 ">
                    <h1>
                      <span class="first-word">請從左邊選項中</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-2">
                    <h1>
                      {" "}
                      <span class="last-word">挑選一種</span>{" "}
                    </h1>
                  </div>
                  <div class="container-word-3">
                    <h1>
                      {" "}
                      <span class="last-last-word">你喜歡的類型</span>{" "}
                    </h1>
                  </div>
                </div>

                <img
                  src="/image/assets/CAKE1.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic9
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass3}
                />

                <img
                  src="/image/assets/CAKE2.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic10
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass3}
                />
                <img
                  src="/image/assets/CAKE3.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic11
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass3}
                />

                <img
                  src="/image/assets/CAKE4.svg"
                  id="STORE_5"
                  className={
                    this.state.showpic12
                      ? "gwd-img-1j6y gwd-img-1uiu boxappend"
                      : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"
                  }
                  onClick={this.handleClickshowclass3}
                />
              </div>
            </div>
          </div>
        </div>
        {/* */}
      </>
    );
  }
}
export default Navgational;
