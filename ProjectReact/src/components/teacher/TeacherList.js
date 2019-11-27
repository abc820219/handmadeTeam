import React, { Component, Route } from "react";
import { Link } from "react-router-dom";
import "../../commom/scss/teacher/productslider.scss";
// import { MdVisibility } from "react-icons/md";
// import Subject from  "../../components/teacher/Subject"
import { IoIosPlay } from "react-icons/io";

class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //老師資料
      teacher_name: "Cedric Grole",
      teacher_detail:
        "甜點哲學是，不要重複別人做的，而是要有自己的理念和創造，都是單一主要素材，從不混合味道，而是想辦法把味道發揮到極致，讓人明白在吃的是什麼食材，它原來的味道是怎樣",
      teacher_skill: "水果擬真甜點 聖多諾黑泡芙塔 魔術方塊",
      teacher_small_img: "",
      teacher_big_img: "t1.png",
      teacherNumber: "t1-11.png",

      //開課資料
      subject_info: [],
      subject_img: "t1-sub5.png",
      subject_sid: ""
    };
  }

  // async componentDidMount(){
  //   try{
  //     const response=await fetch ('http://localhost:5000/handmade/teacher/3',{
  //       method:'GET',
  //       headers:new Headers({
  //         Accept:'application/json',
  //         'Content-Type':'application/json',
  //       }),
  //     })
  //     const TeacherInfo=await response.json()
  //     await this.setState({teacherName:this.state.teacherName})
  //   }
  // }

  // 頁面載入時
  componentDidMount() {
    this.getTeacherInfo();
    this.getSubjectInfo();
  }

  // ==============取得所有老師資料===================
  getTeacherInfo = () => {
    fetch("http://localhost:5000/handmade/teacher/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        let Data = data[0];
        console.log("teacher alldata", Data);
        this.setState(
          {
            teacherArr1: Data[0],
            teacherArr2: Data[1],
            teacherArr3: Data[2],
            teacherArr4: Data[3],
            teacherArr5: Data[4]
          },
          () => {
            // console.log("teacher整包第一筆:", this.state.teacherArr1);
            // console.log("big_img:", this.state.teacherArr1.teacher_big_img);
          }
        );
      });
  };

  // ===========================取得開課資料=====================
  getSubjectInfo = () => {
    fetch("http://localhost:5000/handmade/teacher/suject", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        let SubData = data[0];
        console.log("SubData:", SubData); //所有開課資料
        //篩選老師開課
        let findteachersid1 = SubData.filter(function name(item, index, array) {
          return item.teacher_sid == 1;
        });
        console.log("findteachersid1:", findteachersid1);
        let findteachersid2 = SubData.filter(function name(item, index, array) {
          return item.teacher_sid == 2;
        });
        let findteachersid3 = SubData.filter(function name(item, index, array) {
          return item.teacher_sid == 3;
        });
        let findteachersid4 = SubData.filter(function name(item, index, array) {
          return item.teacher_sid == 4;
        });
        let findteachersid5 = SubData.filter(function name(item, index, array) {
          return item.teacher_sid == 5;
        });

        this.setState(
          {
            // subjectInfo: SubData
            show1: findteachersid1[0],
            show2: findteachersid2[0],
            show3: findteachersid3[1],
            show4: findteachersid4[0],
            show5: findteachersid5[1]
          },
          () => {
            console.log("findteachersid3:", findteachersid3);
          }
        );
      });
  };

  callImage1 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr1.teacher_small_img,
      teacher_name: this.state.teacherArr1.teacher_name,
      teacher_detail: this.state.teacherArr1.teacher_detail,
      teacher_skill: this.state.teacherArr1.teacher_skill,
      teacher_big_img: this.state.teacherArr1.teacher_big_img,
      subject_img: this.state.show1.subject_img,
      subject_sid: this.state.show1.subject_sid
    });
    console.log("test:", this.state.show1.subject_img);
    // console.log(this.state.teacherArr1.teacher_big_img);
  };

  callImage2 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr2.teacher_small_img,
      teacher_name: this.state.teacherArr2.teacher_name,
      teacher_detail: this.state.teacherArr2.teacher_detail,
      teacher_skill: this.state.teacherArr2.teacher_skill,
      teacher_big_img: this.state.teacherArr2.teacher_big_img,
      subject_img: this.state.show2.subject_img,
      subject_sid: this.state.show2.subject_sid
    });
    // console.log("t2:",this.state.teacherArr2.teacher_big_img);
  };
  callImage3 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr3.teacher_small_img,
      teacher_name: this.state.teacherArr3.teacher_name,
      teacher_detail: this.state.teacherArr3.teacher_detail,
      teacher_skill: this.state.teacherArr3.teacher_skill,
      teacher_big_img: this.state.teacherArr3.teacher_big_img,
      subject_img: this.state.show3.subject_img,
      subject_sid: this.state.show3.subject_sid
    });
  };
  callImage4 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr4.teacher_small_img,
      teacher_name: this.state.teacherArr4.teacher_name,
      teacher_detail: this.state.teacherArr4.teacher_detail,
      teacher_skill: this.state.teacherArr4.teacher_skill,
      teacher_big_img: this.state.teacherArr4.teacher_big_img,
      subject_img: this.state.show4.subject_img,
      subject_sid: this.state.show4.subject_sid
    });
  };
  callImage5 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr5.teacher_small_img,
      teacher_name: this.state.teacherArr5.teacher_name,
      teacher_detail: this.state.teacherArr5.teacher_detail,
      teacher_skill: this.state.teacherArr5.teacher_skill,
      teacher_big_img: this.state.teacherArr5.teacher_big_img,
      subject_img: this.state.show5.subject_img,
      subject_sid: this.state.show5.subject_sid
    });
  };

  //
  clickRightImage = () => {
    console.log("點到圖了");
    let key_img = this.state.subject_img;
    console.log("key_img::::", key_img);
    let img_id = this.state.subject_sid;
    console.log("img_id:", img_id);
  };

  render() {
    const { activeItemIndex, children, teacher } = this.state;
    //http://localhost:3000/handmade/teacher/subject/13  (subject後面變數為開課編號)
    let image_id = this.state.subject_sid; //開課編號
    // console.log(this.state);
    console.log("subject_sid:", image_id); //抓開課編號要顯示在網址上
    // let apiImage = this.state.subject_img;
    // let img = "/image/${apiImag}";
    // console.log("apiImage:", this.state.subject_img);
    // let imgStyle = {
    //   width: "960px",
    //   height: "960px",
    //   position: "absolute",
    //   top: "60px",
    //   right: "0",
    //   // background:"#fff",
    //   clipPath: "polygon(100% 0, 0 0, 100% 100%)",
    //   backgroundImage: `url( ${apiImage} )`
    // };

    return (
      <>
        <div className="teacher-list-page">
          {/* 老師大圖 */}
          <div className="left-img">
            <img
              className="slider-image"
              src={`/image/${this.state.teacher_big_img}`}
            />
          </div>
          {/* 老師小圖 */}
          <div className="silder-circle">
            <div className="slider-box">
              <img
                className="slider-image"
                src={`/image/${this.state.teacherNumber}`}
              />
            </div>
          </div>
          {/* 老師開課圖 */}
          <div className="right-img">
            {/* <button className="btn-right-link">img link →</button> */}
            {/* <input type="image" className="slider-image clickRight" /> */}
            <div className="link-subject">
              <Link
                to={`/handmade/teacher/subject/${image_id}`}
                onClick={this.clickRightImage}
              >
                <IoIosPlay />
              </Link>
            </div>
            <img
              className="slider-image clickRight"
              src={`/image/${this.state.subject_img}`}
            />
            {/* <div style={imgStyle}>
              <div className="teacher-link">
                <Link
                  to={`/handmade/teacher/subject/${image_id}`}
                  onClick={this.clickRightImage}
                >
                  img link →
                </Link>
              </div>
            </div> */}
          </div>

          <div className="teacher-page-left"></div>
          {/* 老師資料區塊 */}
          <div className="teacher-page-center">
            <section className="teacher-page">
              <div className="teacher-name">
                <h1>{this.state.teacher_name}</h1>
              </div>

              <div className="teacher-intro">
                <div className="teacher-intro-box">
                  <h3>INTRODUCE</h3>
                  <p>{this.state.teacher_detail}</p>
                </div>
              </div>
              <div className="teacher-expe">
                <div className="teacher-expe-box">
                  <h2>EXPERTISE</h2>
                  <p>{this.state.teacher_skill}</p>
                </div>
              </div>
              <div className="slider-btn-box">
                <button className="btn-slide" onClick={this.callImage1}>
                  ●
                </button>
                <button className="btn-slide" onClick={this.callImage2}>
                  ●
                </button>
                <button className="btn-slide" onClick={this.callImage3}>
                  ●
                </button>
                <button className="btn-slide" onClick={this.callImage4}>
                  ●
                </button>
                <button className="btn-slide" onClick={this.callImage5}>
                  ●
                </button>
              </div>
            </section>
          </div>

          <div className="teacher-page-right"></div>
        </div>
      </>
    );
  }
}
export default TeacherList;
