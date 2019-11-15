import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "../../commom/scss/teacher/subject.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderInfo from "../../components/teacher/OrderInfo";

class Subject extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="subject-page d-flex">
          <div className="subject-page-left"></div>

          <div className="subject-page-center">
            <div className="subject-name">
              <div className="subject-name-box">
                <p>The Hazelnut Ring</p>
                <div className="color-section"></div>
              </div>
            </div>

            <div className="subject-info ">
              <div className="subject-info-box d-flex">
                <div>開課日期</div>
                <div>所需時間</div>
                <div>地區</div>
                <div>剩餘人數</div>
              </div>
            </div>

            <div className="subject-detail">
              <div className="subject-detail-box">
                <div className="subject-address">
                  <link></link>
                  <p>士林區中山北路五段621號</p>
                </div>
                <div className="subject-feature">
                  <link></link>
                  <p>
                    粉膚色帶斑點的外殼與金絲鳥巢以白巧克力製成，剖開內層像滷透的溏心蛋，蛋白是椰子慕斯，蛋黃則是百香果奶餡與芒果果醬，幕斯的質地輕柔，熱帶水果的酸甜風味不會太重手，優雅平衡。
                  </p>
                </div>
              </div>
            </div>
            <div className="book-btn-box">
              <Button className="book-btn">book</Button>
            </div>
          </div>

          {/* <sidebar className="order-sidebar"></sidebar> */}

          <div className="subject-page-right"></div>
          {/* <OrderInfo/> */}
        </div>
      </>
    );
  }
}
export default Subject;
