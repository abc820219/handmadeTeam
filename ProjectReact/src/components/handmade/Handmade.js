import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../commom/scss/handmade/handmade.css";
import "../../commom/scss/handmade/Shandmade.sass";
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
          <div className="close" onClick={this.handleClickIsClose}>
            close
          </div>

          {this.state.showIntroduce ? (
            <div className="frame1">
              <div className="interFrame1">
                <div className="wordBox">
                  <div className="wordBoxUp">
                    <div className="wordHalfUp">INTRODUCE</div>
                  </div>
                  <div className="wordBoxDown">
                    <div className="wordHalfDown">INTRODUCE</div>
                  </div>
                </div>
              </div>
              <div className="interFrame2">
                <div className="spaceNone"></div>
                <div className="innerWord">
                還記得最近一次陪媽媽散步是何時嗎？多久沒好好擁抱親愛的他了？生活過於忙碌，我們都太少時間去陪伴心中重要的人，無論是家人、男友或是閨蜜，趁對方生日時候表達心中滿滿的關愛以及感謝吧。最好的生日禮物叫做“陪伴”，送上親手為他做的暖心生日蛋糕，讓烘焙DIY親手做出美好的生日回憶吧！<br/>
                希望生日蛋糕充滿驚喜嗎？享烘提供各種暖心手作精選食譜，詳細列出了價格、蛋糕尺寸、難易度、烘焙時間以及原料等資訊，可以親自挑選最能展現自己心意也符合壽星喜好的甜蜜蛋糕。同時也與米其林星級西點名廚平塚牧人合作，設計出『主廚系列』菜單，就算是新手也能輕鬆做出米其林蛋糕!
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.showClass ? (
            <div className="frame1">
              <div className="interFrame1">
                <div className="wordBox">
                  <div className="wordBoxUp">
                    <div className="wordHalfUp">COURSE</div>
                  </div>
                  <div className="wordBoxDown">
                    <div className="wordHalfDown">COURSE</div>
                  </div>
                </div>
              </div>
              <div className="interFrame2">
                <div className="spaceNone"></div>
                <div className="innerWord">
                擔心手作蛋糕太難？還是怕自己做出來的生日蛋糕慘不忍睹？在這裡只需要盡情享受烘焙過程帶來的樂趣。Funsiamo在體驗前，提供平板影片DIY教學，跟著教學影片步驟進行，逐步完成生日蛋糕，還可以反覆觀看，不怕遺漏任何細節，不慌不忙的拿捏製作的進度！

而烘焙作業中最麻煩的事前備料跟善後的清洗工作，都會有貼心的Daymaker幫你解決。而一人配置一台專屬材料車，不用再為了找材料、用具弄得手忙腳亂，也不需因為清洗碗盤而減低了烘焙的興致，優雅地完成每個步驟並享受成果吧！
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.showTeacher ? (
            <div className="frame1">
              <div className="interFrame1">
                <div className="wordBox">
                  <div className="wordBoxUp">
                    <div className="wordHalfUp">TEACHER</div>
                  </div>
                  <div className="wordBoxDown">
                    <div className="wordHalfDown">TEACHER</div>
                  </div>
                </div>
              </div>
              <div className="interFrame2">
                <div className="spaceNone"></div>
                <div className="innerWord">
                平凡的日子都能因為生日而變得獨一無二，許多人為了準備生日禮物絞盡腦汁，想著如何製造生日驚喜而苦惱。何不讓生日禮物、驚喜與生日蛋糕融為一體？<br/>

享烘打破親做糕點會弄的一團混亂的刻板印象，以「客自化」全新思維出發，採全自助烘焙體驗，將最困難的器具、備料、製作烘烤流程化繁至最簡，即便新手都能輕鬆完成，透過DIY手作傳遞甜蜜的情感，以手藝傳遞心意，讓生活處處充滿驚喜與歡樂。
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.showStore ? (
            <div className="frame1">
              <div className="interFrame1">
                <div className="wordBox">
                  <div className="wordBoxUp">
                    <div className="wordHalfUp">FINDSTROE</div>
                  </div>
                  <div className="wordBoxDown">
                    <div className="wordHalfDown">FINDSTROE</div>
                  </div>
                </div>
              </div>
              <div className="interFrame2">
                <div className="spaceNone"></div>
                <div className="innerWord">
                 想知道在哪裡可以輕鬆找到適合你的需求的店家嗎，享烘幫你，享幹嘛就幹嘛，享做什麼就做什麼，這邊匯集台灣知名手做烘焙店家資訊，精美的地圖篩選，及完善的收尋設備，保證讓您有美好的體驗。
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.showFood ? (
            <div className="frame1">
              <div className="interFrame1">
                <div className="wordBox">
                  <div className="wordBoxUp">
                    <div className="wordHalfUp">FINDFOOD</div>
                  </div>
                  <div className="wordBoxDown">
                    <div className="wordHalfDown">FINDFOOD</div>
                  </div>
                </div>
              </div>
              <div className="interFrame2">
                <div className="spaceNone"></div>
                <div className="innerWord">
                懶得出門？但又忍受不了想做蛋糕的慾望嗎？想烘知道你的需求，想烘幫你不只幫你準備食材，連食譜資訊一併附上，讓你輕輕鬆鬆在家就能成為烘焙達人，保證不會有任何問題。
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {this.state.showClass ? (
            <Link to="/handmade/store/course">
              <div class="container-login100-form-btn">
                <button class="login100-form-btn ">Class</button>
              </div>
            </Link>
          ) : (
            ""
          )}
          {this.state.showTeacher ? (
            <Link to="/handmade/store">
              <div class="container-login100-form-btn">
                <button class="login100-form-btn ">Teacher</button>
              </div>
            </Link>
          ) : (
            ""
          )}
          {this.state.showStore ? (
            <Link to="/handmade/teacher">
              <div class="container-login100-form-btn">
                <button class="login100-form-btn ">Store</button>
              </div>
            </Link>
          ) : (
            ""
          )}
          {this.state.showFood ? (
            <Link to="/handmade/ingredients">
              <div class="container-login100-form-btn">
                <button class="login100-form-btn ">Food</button>
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Handmade;
