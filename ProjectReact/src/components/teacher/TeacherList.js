import React, { Component } from "react";
import "../../commom/scss/teacher/productslider.scss";
class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //老師資料
      teacher_name: "Cedric Grole",
      teacher_detail:"甜點哲學是，不要重複別人做的，而是要有自己的理念和創造，都是單一主要素材，從不混合味道，而是想辦法把味道發揮到極致，讓人明白在吃的是什麼食材，它原來的味道是怎樣",
      teacher_skill: "水果擬真甜點 聖多諾黑泡芙塔 魔術方塊",
      teacher_small_img: "",
      teacher_big_img: "t1.png",
      teacherNumber: "t1-11.png",

      //開課資料
      subject_info: []
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

  // 取得所有老師資料
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
        console.log(Data);

        this.setState(
          {
            teacherArr1: Data[0],
            teacherArr2: Data[1],
            teacherArr3: Data[2],
            teacherArr4: Data[3],
            teacherArr5: Data[4]
          },
          () => {
            console.log("teacher整包第一筆:", this.state.teacherArr1);
            // console.log("big_img:", this.state.teacherArr1.teacher_big_img);
          }
        );
      });
  };

  // 取得開課資料
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
        // console.log("SubData:", SubData);
        this.setState(
          {
            subject_info: SubData
          },
          () => {
            // console.log("subject_info:", this.state.subject_info);

            //篩選老師開課
            let subject_info = SubData;
            console.log(subject_info);
            let findteachersid1 = subject_info.filter(function name(
              item,
              index,
              array
            ) {
              return item.teacher_sid == 1;
            });
            console.log("findteachersid1:", findteachersid1);
            let findteachersid2 = subject_info.filter(function name(
              item,
              index,
              array
            ) {
              return item.teacher_sid == 2;
            });
            console.log("findteachersid2:", findteachersid2);
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
      teacher_big_img: this.state.teacherArr1.teacher_big_img
    });
  };

  callImage2 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr2.teacher_small_img,
      teacher_name: this.state.teacherArr2.teacher_name,
      teacher_detail: this.state.teacherArr2.teacher_detail,
      teacher_skill: this.state.teacherArr2.teacher_skill,
      teacher_big_img: this.state.teacherArr2.teacher_big_img
    });
  };
  callImage3 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr3.teacher_small_img,
      teacher_name: this.state.teacherArr3.teacher_name,
      teacher_detail: this.state.teacherArr3.teacher_detail,
      teacher_skill: this.state.teacherArr3.teacher_skill,
      teacher_big_img: this.state.teacherArr3.teacher_big_img
    });
  };
  callImage4 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr4.teacher_small_img,
      teacher_name: this.state.teacherArr4.teacher_name,
      teacher_detail: this.state.teacherArr4.teacher_detail,
      teacher_skill: this.state.teacherArr4.teacher_skill,
      teacher_big_img: this.state.teacherArr4.teacher_big_img
    });
  };
  callImage5 = () => {
    this.setState({
      teacherNumber: this.state.teacherArr5.teacher_small_img,
      teacher_name: this.state.teacherArr5.teacher_name,
      teacher_detail: this.state.teacherArr5.teacher_detail,
      teacher_skill: this.state.teacherArr5.teacher_skill,
      teacher_big_img: this.state.teacherArr5.teacher_big_img
    });
  };

  render() {
    const { activeItemIndex, children, teacher } = this.state;

    return (
      <>
        <div className="teacher-list-page">
          {/* 老師大圖 */}
          <div className="left-img">
            <img
              className="slider-image"
              src={`/images/${this.state.teacher_big_img}`}
            />
          </div>
          {/* 按鈕切換照片及變更資料 */}
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
          {/* 老師小圖 */}
          <div className="silder-circle">
            <div className="slider-box">
              <img
                className="slider-image"
                src={`/images/${this.state.teacherNumber}`}
              />
              {/* <Slider {...settings}> */}
              {/* <div className="image-box">
                  <img
                    className="slider-image"
                    src={`/images/${this.state.teacher[0]}`}
                  />
                </div> */}
              {/* </Slider> */}
            </div>
          </div>
          {/* 老師課程圖 */}
          <div className="right-img"></div>

          <div className="teacher-page-left"></div>
          {/* 老師資料區塊 */}
          <div className="teacher-page-center">
            <section className="teacher-page">
              <div className="teacher-name">
                <h1>{this.state.teacher_name}1234567</h1>
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
            </section>
          </div>

          <div className="teacher-page-right">right</div>
        </div>
      </>
    );
  }
}
export default TeacherList;
