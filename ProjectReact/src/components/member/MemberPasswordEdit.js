import React, { useEffect } from "react";
import "../../commom/scss/member/memberEdit.scss";
import Captcha from "captcha-mini";
import { FaKey } from "react-icons/fa";
const MemberPasswordEdit = () => {
  useEffect(() => {
    let captcha = new Captcha({
      lineWidth: 1, //线条宽度
      lineNum: 3, //线条数量
      dotR: 1, //点的半径
      dotNum: 25, //点的数量
      preGroundColor: [50, 80], //前景色区间
      backGroundColor: [150, 250], //背景色区间
      fontSize: 30, //字体大小
      fontFamily: ["Georgia", "微软雅黑", "Helvetica", "Arial"], //字体类型
      fontStyle: "stroke", //字体绘制方法，有fill和stroke
      content: "abcdefghijklmnopqrstuvw", //验证码内容
      length: 3 //验证码长度
    });
    //把生成的驗證碼丟到canvas容器中，然後callback把它(參數自訂為r)設定給state
    captcha.draw(
      document.querySelector("#captcha"),
      value => {
        console.log(value);
      },
      []
    );
  });
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div
          className="col-4"
          style={{ background: "#635E59", minHeight: "937px" }}
        ></div> */}
        <div className="col-12 d-flex flex-column">
          <form>
            <div className="MemberEditHeader my-3">
              <h4>
                <span>重新設定密碼</span>
              </h4>
            </div>
            <div></div>
            <div className="MemberPasswordEditMain mb-5 d-flex flex-column">
              <div className="d-flex align-items-end">
                <div className="short-input">
                  <div className="titleH">舊密碼</div>
                  <div className="position-relative">
                    <input name="" type="name" placeholder="請填入舊密碼" />
                    <FaKey
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "#fff"
                      }}
                    />
                  </div>
                </div>
                <span className="ml-5 mb-3">1234567</span>
              </div>
              <div className="d-flex align-items-end">
                <div className="short-input">
                  <div className="titleH">新密碼</div>
                  <div className="position-relative">
                    <input name="" type="name" placeholder="請填入新密碼" />
                    <FaKey
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "#fff"
                      }}
                    />
                  </div>
                  <span></span>
                </div>
                <span className="ml-5 mb-3">1234567</span>
              </div>
              <div className="d-flex align-items-end">
                <div className="short-input ">
                  <div className="titleH">新密碼確認</div>
                  <div className="position-relative">
                    <input name="" type="name" placeholder="請再次填入新密碼" />
                    <FaKey
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "8px",
                        color: "#fff"
                      }}
                    />
                  </div>
                </div>
                <span className="ml-5 mb-3">1234567</span>
              </div>
              <div className="d-flex align-items-end">
                <div className="short-input">
                  <div className="titleH">驗證碼</div>
                  <div className="position-relative">
                    <div className="d-flex">
                      <input name="" type="name" placeholder="請填入驗證碼" />
                      <FaKey
                        style={{
                          position: "absolute",
                          top: "25%",
                          left: "8px",
                          color: "#fff"
                        }}
                      />
                      <canvas
                        width="100"
                        height="30px"
                        id="captcha"
                        className="ml-3"
                      />
                    </div>
                  </div>
                </div>
                <span className="ml-5 mb-3">1234567</span>
              </div>
            </div>
            <div className="MemberEditFooter  d-flex  flex-column align-items-end pt-5 mb-5">
              <input
                name=""
                className="formBtn"
                type="submit"
                value="修改"
                onClick={formSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  function formSubmit(event) {
    event.preventDefault();
    console.log("formSubmit");
  }
};

export default MemberPasswordEdit;
