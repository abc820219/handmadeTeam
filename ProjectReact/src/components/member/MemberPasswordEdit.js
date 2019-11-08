import React from "react";
import "../../commom/scss/member/memberEdit.scss";
import Captcha from "captcha-mini";
import { FaKey } from "react-icons/fa";
const MemberPasswordEdit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-4"
          style={{ background: "#635E59", minHeight: "937px" }}
        ></div>
        <div
          className="col-8 d-flex flex-column"
          style={{ background: "#F3D6B7", minHeight: "937px" }}
        >
          <form>
            <div className="MemberEditHeader my-5">
              <h4>
                <span>重新設定密碼</span>
              </h4>
            </div>
            <div></div>
            <div className="MemberPasswordEditMain mb-5 d-flex flex-column">
              <div className="d-flex">
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
                  <span></span>
                </div>
              </div>
              <div className="d-flex">
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
              </div>
              <div className="d-flex">
                <div className="short-input">
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
                  <span></span>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div className="short-input">
                  <div className="titleH">驗證碼</div>
                  <div className="position-relative">
                    <input name="" type="name" placeholder="請填入驗證碼" />
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
              </div>
            </div>
            <div className="MemberEditFooter  d-flex  flex-column align-items-end">
              <input
                name=""
                className="formBtn mt-5"
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
