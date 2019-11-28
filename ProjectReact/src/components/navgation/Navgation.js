import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../commom/scss/handmade/nav.css";
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
  
  }
  render() {
    return (
      <>
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
      <div className= {this.state.showclass ? "lightimage " : "lightimage displaynone"}>
      <img src="/image/handmade/LOGO1.svg"   />
      </div>
      </Link>


    
      </div>
      
      </div>
        <div className="outside">
          <div className="htmlNoPages">
            <div className="left">
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
                className={this.state.showpic3? "gwd-img-1j6y gwd-img-1uiu boxappend" : "gwd-img-1j6y gwd-img-1uiu displaynone boxappend"}
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
              {/* <img src="/image/assets/PIC (18).svg" id="IMG_9" className="gwd-img-15e9 gwd-gen-1b6ugwdanimation" /> */}
            </div>
            {/* <img src="/image/assets/PIC (2).svg" id="IMG_11" className="gwd-img-1gq6" />
            <img src="/image/assets/PIC (3).svg" id="IMG_12" className="gwd-img-1rj8" />
            <img src="/image/assets/PIC (4).svg" id="IMG_13" className="gwd-img-1rzb" />
            <img src="/image/assets/PIC (5).svg" id="IMG_14" className="gwd-img-1pnn" />
            <img src="/image/assets/PIC (6).svg" id="IMG_15" className="gwd-img-199q" />
            <img src="/image/assets/PIC (7).svg" id="IMG_16" className="gwd-img-j63m" />
            <img src="/image/assets/PIC (8).svg" id="IMG_17" className="gwd-img-jc53" />
            <img src="/image/assets/PIC (9).svg" id="IMG_18" className="gwd-img-elz4" /> */}
          </div>
        </div>

        {/* */}
      </>
    );
  }
}
export default Navgational;
