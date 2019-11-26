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
                <h1 className="main__title">FINDSTROE</h1>
              </div>
            </li>

            <li className="main__item" onClick={this.handleClickStore}>
              <div
                className="main__image"
                style={{ backgroundImage: 'url("/image/handmade/04.svg")' }}
              >
                <h1 className="main__title">TEACHER</h1>
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
                  這個時候就是該輪到drop-shadow出場了，drop-shadow是CSS3中filter（濾鏡）中陰影濾鏡，它就符合真實世界的投影，非透明的顏色，就有投影；透明部分，光線穿過，沒投影。
                  而我們的圖形剛好又是SVG格式的，每一個元素就是些文本節點，剛好符合drop-shadow概念中的那樣，有透明和非透明部分，所以用它再適合不過了。
                  原文網址：https://kknews.cc/code/nenm9k8.html
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
                  這個時候就是該輪到drop-shadow出場了，drop-shadow是CSS3中filter（濾鏡）中陰影濾鏡，它就符合真實世界的投影，非透明的顏色，就有投影；透明部分，光線穿過，沒投影。
                  而我們的圖形剛好又是SVG格式的，每一個元素就是些文本節點，剛好符合drop-shadow概念中的那樣，有透明和非透明部分，所以用它再適合不過了。
                  原文網址：https://kknews.cc/code/nenm9k8.html
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
                  這個時候就是該輪到drop-shadow出場了，drop-shadow是CSS3中filter（濾鏡）中陰影濾鏡，它就符合真實世界的投影，非透明的顏色，就有投影；透明部分，光線穿過，沒投影。
                  而我們的圖形剛好又是SVG格式的，每一個元素就是些文本節點，剛好符合drop-shadow概念中的那樣，有透明和非透明部分，所以用它再適合不過了。
                  原文網址：https://kknews.cc/code/nenm9k8.html
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
                  這個時候就是該輪到drop-shadow出場了，drop-shadow是CSS3中filter（濾鏡）中陰影濾鏡，它就符合真實世界的投影，非透明的顏色，就有投影；透明部分，光線穿過，沒投影。
                  而我們的圖形剛好又是SVG格式的，每一個元素就是些文本節點，剛好符合drop-shadow概念中的那樣，有透明和非透明部分，所以用它再適合不過了。
                  原文網址：https://kknews.cc/code/nenm9k8.html
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
                  這個時候就是該輪到drop-shadow出場了，drop-shadow是CSS3中filter（濾鏡）中陰影濾鏡，它就符合真實世界的投影，非透明的顏色，就有投影；透明部分，光線穿過，沒投影。
                  而我們的圖形剛好又是SVG格式的，每一個元素就是些文本節點，剛好符合drop-shadow概念中的那樣，有透明和非透明部分，所以用它再適合不過了。
                  原文網址：https://kknews.cc/code/nenm9k8.html
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
