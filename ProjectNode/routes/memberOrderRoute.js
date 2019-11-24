const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
bluebird.promisifyAll(db);
// import OrderDetail from "../domain/memberOrder";

router.get("/", (req, res) => {
  res.send("Member-OrderPage");
});

router.get("/course/:id", (req, res) => {
  const memberId = req.params.id;
  let sql =
    "SELECT * FROM `order` `o` JOIN `course_order` `co` JOIN `course` `c` JOIN `course_img` `ci` ON `o`.order_sid = `co`.order_sid AND `co`.`course_sid` = `c`.`course_sid` AND `co`.`course_sid` = `ci`.`course_sid` WHERE `o`.member_sid = " +
    memberId;
  db.queryAsync(sql).then(results => {
    res.json(results);
  });
});
router.get("/orderSid", (req, res) => {
  const memberId = req.params.id;
  sql = "SELECT * FROM `order` WHERE `o`.member_sid = " + memberId;
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
    res.json(results);
  });
});

class OrderDetail {
  constructor(orderType, user, item) {
    this.orderType = orderType;
    this.user = user;
    this.item = item;
  }
  orderDetailSQL() {
    let sql = "";
    switch (this.orderType) {
      case 1:
        sql =
          "SELECT * FROM `order` `o` JOIN `course_order` `co` JOIN `course` `c` JOIN `course_img` `ci` ON `o`.order_sid = `co`.order_sid AND `co`.`course_sid` = `c`.`course_sid` AND `co`.`course_sid` = `ci`.`course_sid` WHERE `o`.member_sid = " +
          this.user +
          " AND `o`.order_sid = " +
          this.item;
        return sql;
        break;
      case 2:
        sql =
          "SELECT * FROM ((`order` NATURAL JOIN `ingredients_order`) NATURAL JOIN `ingredients`) WHERE `order`.`member_sid` = " +
          this.user +
          " AND `order`.order_sid = " +
          this.item;
        return sql;
        break;
      default:
        return;
    }
  }
  static orderDefaultSQL(id) {
    let sql =
      "SELECT * FROM `order` `o` JOIN `course_order` `co` JOIN `course` `c` JOIN `course_img` `ci` ON `o`.order_sid = `co`.order_sid AND `co`.`course_sid` = `c`.`course_sid` AND `co`.`course_sid` = `ci`.`course_sid` WHERE `o`.member_sid = " +
      id +
      " order by `o`.`order_sid` DESC LIMIT 1";
  }
}

router.post("/orderDetail", (req, res, next) => {
  let orderDetail = new OrderDetail(
    req.body.orderType,
    req.body.user,
    req.body.item
  );
  db.query(orderDetail.orderDetailSQL(), (error, rows) => {
    if (error) {
      res.json({
        status: "404",
        message: "伺服器錯誤，請稍後在試！"
      });
      return;
    } else {
      res.json(rows[0]);
      return;
    }
  });
});

router.get("/orderDetail/:id", (req, res, next) => {
  const id = req.params.id;
  db.query(OrderDetail.orderDetailSQL(id), (error, rows) => {
    if (error) {
      res.json({
        status: "404",
        message: "伺服器錯誤，請稍後在試！"
      });
      return;
    } else {
      res.json(rows[0]);
      return;
    }
  });
});

module.exports = router;
