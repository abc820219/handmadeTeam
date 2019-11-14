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

router.get("/course/:id", (req, res) => {
  const memberId = req.params.id;
  sql =
    "SELECT * FROM `order` `o` JOIN `course_order` `co` JOIN `course` `c` JOIN `course_img` `ci` ON `o`.order_sid = `co`.order_sid AND `co`.`course_sid` = `c`.`course_sid` AND `co`.`course_sid` = `ci`.`course_sid` WHERE `o`.member_sid = " +
    memberId;
  db.queryAsync(sql).then(results => {
    res.json(results);
  });
});

router.get("/ingre/:id", (req, res) => {
  const memberId = req.params.id;
  sql =
    "SELECT * FROM ((`order` NATURAL JOIN `ingredients_order`) NATURAL JOIN `ingredients`) WHERE `order`.`member_sid` = " +
    memberId;
  db.queryAsync(sql).then(results => {
    console.log(results);
    res.json(results);
  });
});

module.exports = router;
