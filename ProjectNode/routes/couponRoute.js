const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
function getCouponData() {
  let sql = `SELECT * FROM coupon WHERE 1`;
  return sql;
}

class getCoupon {
  constructor(member_sid, coupon_sid) {
    this.member_sid = member_sid;
    this.coupon_sid = coupon_sid;
  }
  checkCoupon() {
    let sql = `SELECT * FROM member_coupon WHERE member_sid = "${this.member_sid}" AND coupon_sid ="${this.coupon_sid}"`;
    return sql;
  }
  addCoupon() {
    let sql = `INSERT INTO member_coupon( member_sid,coupon_sid) VALUES ( "${this.member_sid}","${this.coupon_sid}")`;
    return sql;
  }
}
//------------------------------------------------------------
router.get("/", (req, res) => {
  db.query(getCouponData(), (error, rows) => {
    return res.json({
      status: "202",
      message: "資料獲取成功",
      rows
    });
  });
});

router.post("/getcoupon", (req, res) => {
  let Coupon = new getCoupon(req.body.member_sid, req.body.coupon_sid);
  db.query(Coupon.checkCoupon(), (error, rows) => {
    console.log(rows);
    if (rows.length > 0) {
      return res.json({
        status: "404",
        message: "已領取過"
      });
    } else {
      db.query(Coupon.addCoupon(), (error, rows) => {
        console.log(rows);
        if (rows.affectedRows === 1) {
          return res.json({
            status: "202",
            message: "領取成功"
          });
        } else {
          return res.json({
            status: "404",
            message: "領取失敗"
          });
        }
      });
    }
  });
});

module.exports = router;
