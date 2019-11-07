import React  from "react";
import "../../commom/scss/member/memberEdit.scss";

const MemberEdit = () => {
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
                <span>基本資料修改</span>
              </h4>
            </div>
            <div></div>
            <div className="MemberEditMain mb-5 d-flex flex-column">
              <div className="d-flex  justify-content-center">
                <div className="short-input">
                  <div className="titleH">Name</div>
                  <input type="name" />
                  <br></br>
                  <span></span>
                </div>
                <div className="short-input">
                  <div className="titleH">NickName</div>
                  <input type="tel" />
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center">
                <div className="longe-input">
                  <div className="titleH">Street address</div>
                  <input type="text" />
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center">
                <div className="short-input">
                  <div className="titleH">Phone</div>
                  <input type="tel" />
                  <br></br>
                  <span></span>
                </div>
                <div className="short-input">
                  <div className="titleH">birthday</div>
                  <input className="date-input" type="date" />
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="d-flex  justify-content-center mb-5">
                <div className="longe-input">
                  <div className="titleH">Street address</div>
                  <input type="address" />
                  <br />
                  <span></span>
                </div>
              </div>
            </div>
            <div className="MemberEditFooter my-5 d-flex  flex-column align-items-end">
              <input className="formBtn  mt-5" type="submit" value="修改" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemberEdit;
