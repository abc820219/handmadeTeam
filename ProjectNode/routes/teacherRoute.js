const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用bluebird讓non-blocking變成promise
const moment = require("moment-timezone");
bluebird.promisifyAll(db); //db為mysql連線物件
// router.get('/',(req,res)=>{
//     res.send("teacher-Page");
// });

// 某一筆老師資料
// http://localhost:5000/handmade/teacher/3
// router.get("/:sid", (req, res) => {
//   const teacherId = req.params.sid;
//   const data = []; //  放接到的資料
//   db.queryAsync("SELECT * FROM `teacher` WHERE `teacher_sid` =" + teacherId)
//     .then(results => {
//       data.push(results[0]);
//       res.json(data);
//     })
//     .catch(error => {
//       console.log("sql錯誤", error);
//     });
// });

// 拿同一開課總報名人數
//http://localhost:5000/handmade/order
router.get("/order/:id", (req, res) => {
  const teacherOrderId = req.params.id;
  const data = [];
  db.queryAsync(
    "SELECT SUM(`subject_applicants`) AS OrderTotal FROM `subject_order`WHERE `subject_sid`= " +
      teacherOrderId
    // "SELECT * FROM `subject_order`WHERE `subject_sid` =" + teacherOrderId
  )
    .then(results => {
      data.push(results);
      res.json(data);
    })
    .catch(error => {
      console.log("sql課程資料錯誤", error);
    });
});

router.get("/:subject/", (req, res) => {
  const teacherId = req.params.sid;
  const data = [];
  db.queryAsync("SELECT * FROM subject NATURAL JOIN subject_img")
    .then(results => {
      data.push(results);
      res.json(data);
    })
    .catch(error => {
      console.log("sql課程資料錯誤", error);
    });
});

// 用subject_sid 查看某筆開課資料
// http://localhost:5000/handmade/teacher/subject/3

router.get("/subject/:sid", (req, res) => {
  const subjectId = req.params.sid;
  const data = [];
  db.queryAsync(
    "SELECT * FROM subject NATURAL JOIN subject_img WHERE `subject_sid` =" +
      subjectId
  )
    .then(results => {
      //data.push(results);

      const formatDate = "YYYY-MM-DD HH:mm:ss";
      results[0].subject_date = moment(results[0].subject_date)
        .tz("Asia/Taipei")
        .format(formatDate);
      //console.log("date", results.subject_date2);
      console.log("date", results[0]);
      res.json(results[0]);
    })
    .catch(error => {
      console.log("subject_sid錯誤", error);
    });
});

// http://localhost:5000/handmade/teacher/subject/
// router.get("/:subject/", (req, res) => {
//   const teacherId = req.params.sid;
//   const data = []; //  放接到的資料
//   db.queryAsync(
//     "SELECT teacher_sid, subject_name, subject_date, subject_spend_time, subject_address, subject_price, subject_feature FROM `subject` WHERE `teacher_sid` = " +
//       teacherId
//       )
//     .then(results => {
//       data.push(results);
//       res.json(data);
//     })
//     .catch(error => {
//       console.log("sql課程資料錯誤", error);
//     });
// });

// 拿老師表所有資料
// http://localhost:5000/handmade/teacher/
router.get("/", (req, res) => {
  const teacherId = req.params.sid;
  const data = []; //  放接到的資料
  db.queryAsync("SELECT * FROM `teacher`")
    .then(results => {
      data.push(results);
      res.json(data);
    })
    .catch(error => {
      console.log("sql老師資料錯誤", error);
    });
});

//post表單資料
router.route("/subject/order").post(function(req, response) {
  // console.lusernameog(subjectId);
  console.log(req.body.usersid, req.body.totalPrice);
  let user = req.body.usersid;
  let totalprice = req.body.totalPrice;
  db.queryAsync(
    "INSERT INTO `order` (member_sid,order_total_price) VALUES (?,?)",
    [user, totalprice]
  ).then((results, fields) => {
    db.queryAsync(
      "SELECT `order_sid`  FROM `order` WHERE `member_sid` = (?) ORDER BY `order_create_time` DESC LIMIT 1",
      [user]
    )
      .then(res => {
        console.log(res[0].order_sid);
        db.queryAsync(
          "INSERT INTO `subject_order`(`order_sid`, `subject_sid`, `subject_applicants_name`, `subject_applicants_phone`, `subject_applicants`) VALUES (?,?,?,?,?)",
          [
            res[0].order_sid,
            req.body.subject_sid,
            req.body.username,
            req.body.phone,
            req.body.people
          ]
        ).then(results => {
          console.log(results);
          results.affectedRows >= 1
            ? response.json({ status: 200 })
            : response.json({ status: 400 });
        });
      })
      .catch(error => {
        console.log("Sql錯誤", error);
      });
  });
});

module.exports = router;
