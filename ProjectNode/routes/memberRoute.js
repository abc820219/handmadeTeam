const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
bluebird.promisifyAll(db);
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Member-Page");
});

class login {
  constructor(account, password) {
    this.member_account = account;
    this.member_password = password;
  }
  getUserByIdSQL() {
    let sql = `SELECT * FROM member WHERE member_account = "${this.member_account}" AND member_password = "${this.member_password}"`;
    return sql;
  }
}
router.post("/login", (req, res, next) => {
  console.log(req.body.member_account);
  let Member = new login(req.body.member_account, req.body.member_password);
  console.log(Member.getUserByIdSQL());
  db.query(Member.getUserByIdSQL(), (error, rows) => {
    if (rows.length == 0) {
      res.json({
        status: "登入失敗",
        message: "請輸入正確的帳號或密碼"
      });
      return;
    } else if (error) {
      res.json({
        status: "登入失敗",
        message: "伺服器錯誤，請稍後在試！"
      });
      return;
    } else {
      res.json({
        status: "202",
        message: "歡迎登入!",
        info: rows[0]
      });
      next();
    }
    console.log(req.session);
  });
});

module.exports = router;
