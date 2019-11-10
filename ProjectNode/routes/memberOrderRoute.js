const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
bluebird.promisifyAll(db);
// import MemberOrder from "../domain/memberOrder";

router.get("/", (req, res) => {
  res.send("Member-OrderPage");
});

router.get("/:id", (req, res) => {
  const memberId = req.params.id;
  sql =
    "SELECT `order`.*, `course_order`.* FROM `order` JOIN `course_order` ON `order`.order_sid = `course_order`.order_sid WHERE `order`.member_sid = " +
    memberId;
  db.queryAsync(sql).then(results => {
    console.log(results);
    res.json(results[0]);
    c;
  });
});

module.exports = router;
