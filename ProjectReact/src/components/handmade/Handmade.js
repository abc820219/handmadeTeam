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
      showIntroduce: false,
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
          breakpoint: 1000,
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
              {this.state.showIntroduce ? "ENTER" : ""}
              {this.state.showClass ? "ENTER" : ""}
              {this.state.showTeacher ? "ENTER" : ""}
              {this.state.showStore ? "ENTER" : ""}
              {this.state.showFood ? "ENTER" : ""}
            </div>
          </div>
        </div>

        <div className={this.state.isShow ? "part3" : "part3Close"}>
          <div className="close" onClick={this.handleClickIsClose}>
            close
          </div>

          {this.state.showIntroduce ? <h1>網站介紹</h1> : ""}
          {this.state.showClass ? <h1>課程瀏覽</h1> : ""}
          {this.state.showTeacher ? <h1>老師瀏覽</h1> : ""}
          {this.state.showStore ? <h1>店家瀏覽</h1> : ""}
          {this.state.showFood ? <h1>精選食材</h1> : ""}

          {this.state.showIntroduce ? (
            <div>
              網站介紹
              <div>課程瀏覽</div>
            </div>
          ) : (
            ""
          )}
          {this.state.showClass ? (
            <div>
              課程瀏覽<div>課程瀏覽</div>
            </div>
          ) : (
            ""
          )}
          {this.state.showTeacher ? (
            <div>
              課程瀏覽<div>課程瀏覽</div>
            </div>
          ) : (
            ""
          )}
          {this.state.showStore ? (
            <div>
              課程瀏覽<div>課程瀏覽</div>
            </div>
          ) : (
            ""
          )}
          {this.state.showFood ? (
            <div>
              課程瀏覽<div>課程瀏覽</div>
            </div>
          ) : (
            ""
          )}

          {this.state.showIntroduce ? (
            <Link to="/handmade/member">
              {/* <button type="submit" className="linkOut outline green-white"><div>member</div></button> */}
              <div class="container-login100-form-btn">
                <button class="login100-form-btn ">member</button>
              </div>
            </Link>
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
