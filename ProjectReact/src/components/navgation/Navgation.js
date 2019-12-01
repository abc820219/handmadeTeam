import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../commom/scss/handmade/nav.css";
import "../../commom/scss/handmade/logoanimation.css";
import "../../commom/scss/handmade/info.css";
import "../../commom/scss/handmade/array.scss";

import $ from "jquery";

class Navgational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpic1: true,
      showpic2: false,
      showpic3: false,
      showpic4: false,
      showclass: false
    };
    this.handleClickshowpic1 = this.handleClickshowpic1.bind(this);
    this.handleClickshowpic2 = this.handleClickshowpic2.bind(this);
    this.handleClickshowpic3 = this.handleClickshowpic3.bind(this);
    this.handleClickshowpic4 = this.handleClickshowpic4.bind(this);
    this.handleClickshowclass = this.handleClickshowclass.bind(this);
  }
  handleClickshowclass() {
    this.setState({
      showclass: true
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
  componentDidMount() {




    document.querySelector('.toggleClass').onclick = function () {
      document.querySelector('.theTitle').classList.toggle('active');
      document.querySelector('.toggleClass').classList.toggle('moverout_logo');
      document.querySelector('.background_first').classList.toggle('moverout_bg');
      document.querySelector('.htmlNoPages').classList.remove('remover_1');
      document.querySelector('.right').classList.add('remover_2');

    };

    document.querySelector('.howtouseinfo').onclick = function () {
      document.querySelector('.coverright').classList.remove('getoutR')

      document.querySelector('.first-word').classList.add('loadIn-1')
      document.querySelector('.last-word').classList.add('loadIn-2')
      document.querySelector('.last-last-word').classList.add('loadIn-3')
      document.querySelector('.first-word-1').classList.add('loadIn-4')
      document.querySelector('.last-word-1').classList.add('loadIn-5')
      document.querySelector('.last-last-word-1').classList.add('loadIn-6')
      
      
      
      
      setTimeout(function () {
        document.querySelector('.coverright').classList.add('getoutR')
        document.querySelector('.arrow').classList.remove('appenhoho')

        document.querySelector('.coverleft').classList.remove('getoutL')

      }, 9500)
     
    }
    document.querySelector('.arrow').onclick = function () {
      document.querySelector('.coverleft').classList.add('getoutL')
      document.querySelector('.arrow').classList.add('appenhoho')
      document.querySelector('.first-word').classList.remove('loadIn-1')
      document.querySelector('.last-word').classList.remove('loadIn-2')
      document.querySelector('.last-last-word').classList.remove('loadIn-3')
      document.querySelector('.first-word-1').classList.remove('loadIn-4')
      document.querySelector('.last-word-1').classList.remove('loadIn-5')
      document.querySelector('.last-last-word-1').classList.remove('loadIn-6')
    }
 

  }
  render() {
    return (
      <>
     
        <div className="background_first"></div>
        <div className="theTitle active">
          <div className="left_logo"><h1><img
            src="/image/handmade/LOGOLEFT.svg"
          /></h1></div>
          <span className="separator"></span>
          <div className="right_logo">
            <p>HANDMAKE</p>
            <p className="logo-letter-spacing">BAKETIME</p>


          </div>
        </div>
        {/* <button className="toggleClass">Toggle</button> */}

        <div class="toggleClass">
          <svg height="90" width="270" xmlns="http://www.w3.org/2000/svg" class="down_logo">
            <rect class="shape" height="90" width="270" />
          </svg>
          <div class="text_hover">ENTER</div>
        </div>








     <div className={this.state.showclass ? "lightbox " : "lightbox displaynone"}>
          <div className={this.state.showclass ? "frame_lightbox " : "frame_lightbox displaynone"}>
            <div className={this.state.showclass ? "lighttext " : "lighttext displaynone"}>
              您適合的烘焙為
      </div>
            <div className={this.state.showclass ? "lighttext2 " : "lighttext2 displaynone"}>
              {this.state.showpic1 ? "小甜食" : ""}
              {this.state.showpic2 ? "酷奇餅" : ""}
              {this.state.showpic3 ? "烤麵包" : ""}
              {this.state.showpic4 ? "甜蛋糕" : ""}
            </div>
            <Link to="/handmade">
              <div className={this.state.showclass ? "lightimage " : "lightimage displaynone"}>
                <img src="/image/handmade/LOGO1.svg" />
              </div>
            </Link>


          </div>
   
        </div>



        <div className="outside">
          <div className="htmlNoPages remover_1">

            <div className="howtouseinfo">
              <div className="howtouse">
                HOW TO USE
              </div>
              <div className="howtouseI">
                <p>i</p>
              </div>
            </div>



            <div className="left">
              <div className="coverleft getoutL">
              <div class="container-word-1-1 ">
                  <h1><span class="first-word-1">選取後</span>  </h1>
                </div>
                <div class="container-word-2-2">
                  <h1> <span class="last-word-1">請點擊右方圖像</span> </h1>
                </div>
                <div class="container-word-3-3">
                  <h1> <span class="last-last-word-1">可進行下一步驟</span> </h1>
                </div>
                <span class="arrow appenhoho">back</span>
              </div>
              {/* <img src="/image/assets/PIC_1.svg" id="PIC_1" className="gwd-img-hdbr" /> */}
              <img
                src="/image/assets/STORE_3.svg"
                id="STORE_3"
                className={this.state.showpic1 ? "gwd-img-h17w box" : "gwd-img-h17w close box"}
                onClick={this.handleClickshowpic1}

              />
              <img
                src="/image/assets/STORE_4.svg"
                id="STORE_4"
                className={this.state.showpic2 ? "gwd-img-x5tz box" : "gwd-img-x5tz close box"}
                onClick={this.handleClickshowpic2}
              />
              <img
                src="/image/assets/STORE_1.svg"
                id="STORE_1"
                className={this.state.showpic3 ? "gwd-img-1j6y gwd-img-iqv3 box" : "gwd-img-1j6y gwd-img-iqv3 close box"}
                onClick={this.handleClickshowpic3}
              />
              <img
                src="/image/assets/STORE_2_2.svg"
                id="STORE_2_2"
                className={this.state.showpic4 ? "gwd-img-1ehw box" : "gwd-img-1ehw close box"}
                onClick={this.handleClickshowpic4}
              />
              {/* <img src="/image/assets/PIC (10).svg" id="IMG_1" className="gwd-img-1o0g" /> */}
            </div>
            <div className="right">
              <div className="coverright getoutR">
                <div class="container-word-1 ">
                  <h1><span class="first-word">請從左邊選項中</span>  </h1>
                </div>
                <div class="container-word-2">
                  <h1> <span class="last-word">挑選一種</span> </h1>
                </div>
                <div class="container-word-3">
                  <h1> <span class="last-last-word">你喜歡的類型</span> </h1>
                </div>

              </div>

              <img
                src="/image/assets/STORE_3.svg"
                id="STORE_5"
                className={this.state.showpic1 ? "gwd-img-1j6y gwd-img-1uiu boxappend" : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"}
                onClick={this.handleClickshowclass}
              />


              <img
                src="/image/assets/STORE_4.svg"
                id="STORE_5"
                className={this.state.showpic2 ? "gwd-img-1j6y gwd-img-1uiu boxappend" : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"}
                onClick={this.handleClickshowclass}
              />
              <img
                src="/image/assets/STORE_1.svg"
                id="STORE_5"
                className={this.state.showpic3 ? "gwd-img-1j6y gwd-img-1uiu boxappend" : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"}
                onClick={this.handleClickshowclass}
              />

              <img
                src="/image/assets/STORE_2_2.svg"
                id="STORE_5"
                className={this.state.showpic4 ? "gwd-img-1j6y gwd-img-1uiu boxappend" : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"}
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




        <div className="outside1">


          
</div>





















        {/* */}
    


      </>
    );
  }
}
export default Navgational;
