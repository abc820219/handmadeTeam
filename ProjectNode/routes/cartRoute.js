const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
const bodyParser = require("body-parser");
bluebird.promisifyAll(db);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const moment = require("moment-timezone");

// router.get('/',(req,res)=>{
//     res.send("cart-Page");
// });


router.post("/submitcart", (req, res) => {
  const courseCart = JSON.parse(req.body.courseCart);
  const ingreCart = JSON.parse(req.body.ingreCart);
  const user = req.body.user;
  const coupon = req.body.coupon || 0;
  const outPut = [];
  let order_sid;

  let courseCartInsert = [];

  db.queryAsync("INSERT INTO `order` (member_sid, coupon_sid) VALUES (?, ?)", [
    user,
    coupon
  ]).then((results, fields) => {
    db.queryAsync(
      "SELECT `order`.`order_sid`,`order`.`order_create_time` FROM `order` ORDER BY `order`.`order_create_time` DESC LIMIT 1"
    )
      .then(results => {
        order_sid = results[0].order_sid;
        if (courseCart.length !== 0 && ingreCart.length !== 0) {
          for (i = 0; i < courseCart.length; i++) {
            db.query(
              "INSERT INTO `course_order` (order_sid, course_sid, course_order_choose, course_order_applicants) VALUES (?, ?,?,?)",
              [
                order_sid,
                courseCart[i].course_sid,
                courseCart[i].course_order_choose,
                courseCart[i].course_order_applicants
              ]
            );
          }
          for (i = 0; i < ingreCart.length; i++) {
            db.query(
              "INSERT INTO `ingredients_order` (order_sid, ingredients_sid, ingredients_order_quantity) VALUES (?, ?,?)",
              [
                order_sid,
                ingreCart[i].ingredient_sid,
                ingreCart[i].ingredient_order_quantity
              ]
            );
          }
        } else if (courseCart.length !== 0) {
          for (i = 0; i < courseCart.length; i++) {
            db.query(
              "INSERT INTO `course_order` (order_sid, course_sid, course_order_choose, course_order_applicants) VALUES (?, ?,?,?)",
              [
                order_sid,
                courseCart[i].course_sid,
                courseCart[i].course_order_choose,
                courseCart[i].course_order_applicants
              ]
            );
          }
        } else {
          for (i = 0; i < ingreCart.length; i++) {
            db.query(
              "INSERT INTO `ingredients_order` (order_sid, ingredients_sid, ingredients_order_quantity) VALUES (?, ?,?)",
              [
                order_sid,
                ingreCart[i].ingredient_sid,
                ingreCart[i].ingredient_order_quantity
              ]
            );
          }
        }
        return results;
      })
      .then((results, fields) => {
        const formatDate = "YYYY-MM-DD HH:mm:ss";
        results.course_order_choose = moment(results.course_order_choose).tz('Asia/Taipei').format(formatDate);
        res.json(results);
      });
  });
});

router.post("/checkCourseAttendee", (req, res) => {});

module.exports = router;
