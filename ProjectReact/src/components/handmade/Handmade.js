import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../commom/scss/handmade/handmade.css";
import "../../commom/scss/handmade/Shandmade.sass";
import "../../commom/scss/handmade/appendWordDiv.scss";

import ReactDOM from "react-dom";
import "../../../node_modules/slick-carousel/slick/slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import $ from "jquery";

class Handmade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntroduce: true,
      showClass: false,
      showTeacher: false,
      showStore: false,
      showFood: false,
      isShow: false
    };

    this.handleClickIntroduce = this.handleClickIntroduce.bind(this);
    this.handleClickClass = this.handleClickClass.bind(this);
    this.handleClickTeacher = this.handleClickTeacher.bind(this);
    this.handleClickStore = this.handleClickStore.bind(this);
    this.handleClickFood = this.handleClickFood.bind(this);
    this.handleClickIsShow = this.handleClickIsShow.bind(this);
    this.handleClickIsClose = this.handleClickIsClose.bind(this);
  }

  handleClickIntroduce() {
    this.setState({
      showIntroduce: true,
      showClass: false,
      showTeacher: false,
      showStore: false,
      showFood: false
    });
  }
  handleClickClass() {
    this.setState({
      showIntroduce: false,
      showClass: true,
      showTeacher: false,
      showStore: false,
      showFood: false
    });
  }
  handleClickTeacher() {
    this.setState({
      showIntroduce: false,
      showClass: false,
      showTeacher: true,
      showStore: false,
      showFood: false
    });
  }
  handleClickStore() {
    this.setState({
      showIntroduce: false,
      showClass: false,
      showTeacher: false,
      showStore: true,
      showFood: false
    });
  }
  handleClickFood() {
    this.setState({
      showIntroduce: false,
      showClass: false,
      showTeacher: false,
      showStore: false,
      showFood: true
    });
  }
  handleClickIsShow() {
    this.setState({
      isShow: true
    });
  }
  handleClickIsClose() {
    this.setState({
      isShow: false
    });
  }

  componentDidMount() {
    $(".main__slider").slick({
      focusOnSelect: true,
      centerMode: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      // initialSlide: 2,
      // fade: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            fade: true
          }
        }
      ]
    });

    $(function() {
      $(".choose").on("click", function() {
        $(".choose").addClass("active");
        $(".choose > .icon").addClass("active");
        $(".pay").removeClass("active");
        $(".wrap").removeClass("active");
        $(".ship").removeClass("active");
        $(".pay > .icon").removeClass("active");
        $(".wrap > .icon").removeClass("active");
        $(".ship > .icon").removeClass("active");
        $("#line").addClass("one");
        $("#line").removeClass("two");
        $("#line").removeClass("three");
        $("#line").removeClass("four");
      });

      $(".pay").on("click", function() {
        $(".pay").addClass("active");
        $(".pay > .icon").addClass("active");
        $(".choose").removeClass("active");
        $(".wrap").removeClass("active");
        $(".ship").removeClass("active");
        $(".choose > .icon").removeClass("active");
        $(".wrap > .icon").removeClass("active");
        $(".ship > .icon").removeClass("active");
        $("#line").addClass("two");
        $("#line").removeClass("one");
        $("#line").removeClass("three");
        $("#line").removeClass("four");
      });

      $(".wrap").on("click", function() {
        $(".wrap").addClass("active");
        $(".wrap > .icon").addClass("active");
        $(".pay").removeClass("active");
        $(".choose").removeClass("active");
        $(".ship").removeClass("active");
        $(".pay > .icon").removeClass("active");
        $(".choose > .icon").removeClass("active");
        $(".ship > .icon").removeClass("active");
        $("#line").addClass("three");
        $("#line").removeClass("two");
        $("#line").removeClass("one");
        $("#line").removeClass("four");
      });

      $(".ship").on("click", function() {
        $(".ship").addClass("active");
        $(".ship > .icon").addClass("active");
        $(".pay").removeClass("active");
        $(".wrap").removeClass("active");
        $(".choose").removeClass("active");
        $(".pay > .icon").removeClass("active");
        $(".wrap > .icon").removeClass("active");
        $(".choose > .icon").removeClass("active");
        $("#line").addClass("four");
        $("#line").removeClass("two");
        $("#line").removeClass("three");
        $("#line").removeClass("one");
      });

      $(".choose").on("click", function() {
        $("#first").addClass("active");
        $("#second").removeClass("active");
        $("#third").removeClass("active");
        $("#fourth").removeClass("active");
      });

      $(".pay").on("click", function() {
        $("#first").removeClass("active");
        $("#second").addClass("active");
        $("#third").removeClass("active");
        $("#fourth").removeClass("active");
      });

      $(".wrap").on("click", function() {
        $("#first").removeClass("active");
        $("#second").removeClass("active");
        $("#third").addClass("active");
        $("#fourth").removeClass("active");
      });

      $(".ship").on("click", function() {
        $("#first").removeClass("active");
        $("#second").removeClass("active");
        $("#third").removeClass("active");
        $("#fourth").addClass("active");
      });
    });
  }

  render() {
    return (
      <>
        <div
          className={this.state.showIntroduce ? "background1 background" : ""}
        ></div>
        <div
          className={this.state.showClass ? "background2 background" : ""}
        ></div>
        <div
          className={this.state.showTeacher ? "background3 background" : ""}
        ></div>
        <div
          className={this.state.showStore ? "background4 background" : ""}
        ></div>
        <div
          className={this.state.showFood ? "background5 background" : ""}
        ></div>

        <main className="main">
          <ul className="main__slider main__slider--sports">
            <li className="main__item" onClick={this.handleClickIntroduce}>
              <div
                className="main__image"
                style={{ backgroundImage: 'url("/image/handmade/01.svg")' }}
              >
                <h1 className="main__title">INTRODUCE</h1>
              </div>
            </li>

            <li className="main__item" onClick={this.handleClickClass}>
              <div
                className="main__image"
                style={{ backgroundImage: 'url("/image/handmade/02.svg")' }}
              >
                <h1 className="main__title">FINDCLASS</h1>
              </div>
            </li>

            <li className="main__item" onClick={this.handleClickTeacher}>
              <div
                className="main__image"
                style={{ backgroundImage: 'url("/image/handmade/03.svg")' }}
              >
                <h1 className="main__title">TEACHER</h1>
              </div>
            </li>

            <li className="main__item" onClick={this.handleClickStore}>
              <div
                className="main__image"
                style={{ backgroundImage: 'url("/image/handmade/04.svg")' }}
              >
                <h1 className="main__title">FINDSTROE</h1>
              </div>
            </li>

            <li className="main__item" onClick={this.handleClickFood}>
              <div
                className="main__image"
                style={{ backgroundImage: 'url("/image/handmade/05.svg")' }}
              >
                <h1 className="main__title">FINDFOOD</h1>
              </div>
            </li>
          </ul>
        </main>
        <div className="part2">
          <div className="info">
            <h1>{this.state.showIntroduce ? "歡迎享烘" : ""}</h1>
            <h1>{this.state.showClass ? "精選課程" : ""}</h1>
            <h1>{this.state.showTeacher ? "優質教師" : ""}</h1>
            <h1>{this.state.showStore ? "烘焙店家" : ""}</h1>
            <h1>{this.state.showFood ? "精緻食材" : ""}</h1>

            <div className="innerInfo">
              {this.state.showIntroduce
                ? "將平凡的甜點，透過享烘手作烘焙坊的巧思，讓消費者感受到享烘的貼心，賦予獨特的生命，達到味覺、視覺、嗅覺的三重享受。享烘的客製化服務，我們想創造的不僅僅只是禮品，而是擁有傳遞幸福和回憶的意義。看見客人臉上的感動和喜悅，對於享烘而言是無價的! 希望將這份感動延續，讓我們有更多動力創作更多「獨一無二」的作品。"
                : ""}
              {this.state.showClass
                ? "享烘結合創意、設計、可愛、新穎、食物、客製化等元素，希望將這份感動延續。"
                : ""}
              {this.state.showTeacher
                ? "享烘結合創意、設計、可愛、新穎、食物、客製化等元素，希望將這份感動延續，讓我們有更多動力創作更多「獨一無二」的作品。"
                : ""}
              {this.state.showStore
                ? "享烘結合創意、設計、可愛、新穎、食物、客製化等元素，讓我們有更多動力創作更多「獨一無二」的作品。"
                : ""}
              {this.state.showFood
                ? "享烘結合創意、設計、客製化等元素，希望將這份感動延續，讓我們有更多動力創作更多「獨一無二」的作品。"
                : ""}
            </div>
            <div className="innerEnter" onClick={this.handleClickIsShow}>
              {this.state.showIntroduce ? (
                <div class="container-login100-form-btn fix">
                  <button class="login100-form-btn ">ENTER</button>
                </div>
              ) : (
                ""
              )}
              {this.state.showClass ? (
                <div class="container-login100-form-btn fix">
                  <button class="login100-form-btn ">ENTER</button>
                </div>
              ) : (
                ""
              )}
              {this.state.showTeacher ? (
                <div class="container-login100-form-btn fix">
                  <button class="login100-form-btn ">ENTER</button>
                </div>
              ) : (
                ""
              )}
              {this.state.showStore ? (
                <div class="container-login100-form-btn fix">
                  <button class="login100-form-btn ">ENTER</button>
                </div>
              ) : (
                ""
              )}
              {this.state.showFood ? (
                <div class="container-login100-form-btn fix">
                  <button class="login100-form-btn ">ENTER</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={this.state.isShow ? "part3" : "part3Close"}>
          {this.state.showIntroduce ? "" : ""}

          {this.state.showClass ? "" : ""}

          {this.state.showTeacher ? "" : ""}

          {this.state.showStore ? "" : ""}

          {this.state.showFood ? "" : ""}

          <div id="wrapper">
            <div id="left-side">
              <ul>
                <li class="choose active">
                  <div class="icon active"></div>

                  {this.state.showIntroduce ? "網站發想" : ""}
                  {this.state.showClass ? "精選課程" : ""}
                  {this.state.showTeacher ? "名師開課" : ""}
                  {this.state.showStore ? "在地店家" : ""}
                  {this.state.showFood ? "食譜特搜" : ""}
                </li>
                <li class="pay">
                  <div class="icon"></div>
                  {this.state.showIntroduce ? "功能與展望" : ""}
                  {this.state.showClass ? "優於同業" : ""}
                  {this.state.showTeacher ? "來自哪裡" : ""}
                  {this.state.showStore ? "GPS" : ""}
                  {this.state.showFood ? "懶人設計" : ""}
                </li>
                <li class="wrap">
                  <div class="icon"></div>
                  {this.state.showIntroduce ? "理念" : ""}
                  {this.state.showClass ? "自由安排" : ""}
                  {this.state.showTeacher ? "精緻課程" : ""}
                  {this.state.showStore ? "無所遁形" : ""}
                  {this.state.showFood ? "精選食材" : ""}
                </li>
                <li class="ship">
                  <div class="icon"></div>
                  {this.state.showIntroduce ? "聯絡我們" : ""}
                  {this.state.showClass ? "使用指引" : ""}
                  {this.state.showTeacher ? "使用指引" : ""}
                  {this.state.showStore ? "使用指引" : ""}
                  {this.state.showFood ? "使用指引" : ""}
                </li>
              </ul>
            </div>

            <div id="border">
              <div id="line" class="one"></div>
            </div>

            <div id="right-side">
              <div id="first" class="active">
                <div class="icon big"></div>
                {this.state.showIntroduce ? <h1>享烘的起源</h1> : ""}
                {this.state.showClass ? <h1>最優質的課程</h1> : ""}
                {this.state.showTeacher ? <h1>與名師共度時光</h1> : ""}
                {this.state.showStore ? <h1>不管你在哪</h1> : ""}
                {this.state.showFood ? <h1>幫你準備好了</h1> : ""}

                {this.state.showIntroduce ? (
                  <p>
                    2019的現今，媒合網站大量興起，但專門致力於烘焙媒合的網站卻寥寥可數，我們團隊致力於服務使用者。享烘的發想源自於「想」要讓不論烘焙新手與專業人士，都能在我們網站找到自己「想」要的資源，並且能夠「享」受烘焙帶來的精緻「饗」宴。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showClass ? (
                  <p>
                    匯集台灣知名手作烘焙店鋪，各式各樣的蛋糕或烘焙小物都能在這邊找到，從名店到你家巷口小店的預訂課程，都可以在我們網站裡做到，還能從介面中預先得知該課程的熱門程度，跟著大家學，準沒錯！
                  </p>
                ) : (
                  ""
                )}
                {this.state.showTeacher ? (
                  <p>
                    想知道現在烘焙界最夯的明日之星教師是誰卻不知道門路嗎？想知道當今最熱門的蛋糕誰會製作嗎？不用費心了，享烘可以幫你解決一切問題，我們幫你準備了各大甜點麵包師傅的課程，讓你輕輕鬆鬆就能夠與帥哥美女烘焙師來一場轟轟烈烈的教學時光。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showStore ? (
                  <p>
                    台北、高雄、台中，不論你今天在哪裡，享烘知道你心中都會有一個想要製作手蛋糕的靈魂，幫你與在地店家做最快速的媒合，就算你有一些特殊需求，享烘一樣可以提供篩選的方式幫你解決一切問題。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showFood ? (
                  <p>
                    享烘明白獨立製作的美好，今天想在家裡自己製作手做蛋糕嗎？享烘幫你準備了各種類型的蛋糕食譜，讓你不出門也能做你想要的蛋糕。
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div id="second">
                <div class="icon big"></div>

                {this.state.showIntroduce ? <h1>你能找到什麼</h1> : ""}
                {this.state.showClass ? <h1>我們更好</h1> : ""}
                {this.state.showTeacher ? <h1>輝煌歷程</h1> : ""}
                {this.state.showStore ? <h1>直接定位</h1> : ""}
                {this.state.showFood ? <h1>「享」要食材</h1> : ""}

                {this.state.showIntroduce ? (
                  <p>
                    享烘提供課程、教師、店家、食材的線上訂購機制，在使用的過程中也能夠一步步去探索自己所想要的功能或者發掘自身的興趣與能耐，學習和成長是享烘最想提供給您的體驗。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showClass ? (
                  <p>
                    我們敢說我們更好，不僅能夠抓出你所傾向的喜好，在預定課程方面也能夠做的比其他同業網站更多更詳細。更專注於對消費者體驗的改善是我們追求的目標，如果有任何問題或想法，只要您願意提供，享烘一定虛心受教並且改善。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showTeacher ? (
                  <p>
                    你知道一直以來甜點世界盃大賽台灣健兒有參與，並且得有名次嗎？想立刻去上台灣之光的課程嗎？享烘幫你媒合，不僅可以成為他們追夢的力量，也可以一睹他們風光的專業事跡。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showStore ? (
                  <p>
                    我們使用了定位功能，不管你在哪裡，只要輕輕一按，就能夠直接馬上搜尋離你最近的店家，輕鬆不費力，省時又方便。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showFood ? (
                  <p>
                    當準備好了食譜，卻不知道哪裡可以最輕鬆的買到優質的食材或原料嗎？享烘知道初學的你可能會有這種困擾，不僅幫你準備了食譜，連預定食材的功能也有了，把你想要的通通都拉進你的購物車裡吧。
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div id="third">
                <div class="icon big"></div>

                {this.state.showIntroduce ? <h1>目標與展望</h1> : ""}
                {this.state.showClass ? <h1>隨選時間</h1> : ""}
                {this.state.showTeacher ? <h1>老師們所擅長的</h1> : ""}
                {this.state.showStore ? <h1>無所遁形</h1> : ""}
                {this.state.showFood ? <h1>食材履歷</h1> : ""}

                {this.state.showIntroduce ? (
                  <p>
                    享烘想要成為各位心中想到烘焙媒合網站第一個就能直覺反應的網站，並致力於改善網站環境成為更優秀的網頁。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showClass ? (
                  <p>
                    你想什麼時候上課就什麼時候上課，完全不受限，早中晚，隨你選擇，輕鬆自在，自由歡樂是我們會一直貫徹的理念與想法。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showTeacher ? (
                  <p>
                    享烘還幫各位匯集了名師擅長的私房烘焙品，想在自己的IG或FB上PO出沒人見過的自製小蛋糕並奪取大家目光嗎？想烘幫你完成你的夢想。
                  </p>
                ) : (
                  ""
                )}
                {this.state.showStore ? (
                  <p>
                    大家是否有看過路旁的烘焙教室但卻不知道裡面的設備如何嗎？享烘知道你會有這個困擾，不僅把店家的內部擺置全部SHOW在你面前，還把店內可以做的蛋糕一併附上！
                  </p>
                ) : (
                  ""
                )}
                {this.state.showFood ? (
                  <p>
                    食材把關是我們致力於完成的，每樣食材都是精挑細選，皆為成品主要完成的原料本身。
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div id="fourth">
                <div class="icon big"></div>

                {this.state.showIntroduce ? <h1>聯絡我們</h1> : ""}
                {this.state.showClass ? <h1>使用指引</h1> : ""}
                {this.state.showTeacher ? <h1>使用指引</h1> : ""}
                {this.state.showStore ? <h1>使用指引</h1> : ""}
                {this.state.showFood ? <h1>使用指引</h1> : ""}

                {this.state.showIntroduce ? (
                  <p>
                    地址：新北市中和區852號2樓 <br />
                    電話：(02)-2255-5599 <br />
                    信箱：handmadebakingtime@gmail.com
                  </p>
                ) : (
                  ""
                )}
                {this.state.showClass ? (
                  <p>點擊右側圖片就能開始課程導覽</p>
                ) : (
                  ""
                )}
                {this.state.showTeacher ? (
                  <p>點擊右側圖片就能開始教師導覽</p>
                ) : (
                  ""
                )}
                {this.state.showStore ? (
                  <p>點擊右側圖片就能開始店家導覽</p>
                ) : (
                  ""
                )}
                {this.state.showFood ? <p>點擊右側圖片就能開始食材導覽</p> : ""}
              </div>
            </div>
          </div>

          {this.state.showIntroduce ? (
              <div className="wrap_right background_img_1_change"></div>
          ) : (
            ""
          )}
          {this.state.showClass ? (
            <Link to="/handmade/store/course">
              <div className="wrap_right background_img_2_change"></div>
            </Link>
          ) : (
            ""
          )}
          {this.state.showTeacher ? (
            <Link to="/handmade/teacher">
            <div className="wrap_right background_img_3_change"></div>
            </Link>
          ) : (
            ""
          )}
          {this.state.showStore ? (
            <Link to="/handmade/store">
            <div className="wrap_right background_img_4_change"></div>
            </Link>
          ) : (
            ""
          )}
          {this.state.showFood ? (
            <Link to="/handmade/ingredients">
            <div className="wrap_right background_img_5_change"></div>
            </Link>
          ) : (
            ""
          )}
          <div className="close" onClick={this.handleClickIsClose}>
            close
          </div>
        </div>
      </>
    );
  }
}

export default Handmade;
